/**
 * Notion CRM — Leads database operations.
 *
 * Public API consumed by Stream A (form handler) and future internal
 * dashboards:
 *
 *   createLead(input)            -> { id, url } | { error }
 *   updateLeadStatus(id, status) -> { id, status } | { error }
 *   listLeads(opts)              -> { leads, nextCursor, hasMore } | { error }
 *
 * Design rules:
 *   - Never throw. All errors are returned as `{ error }` so the caller
 *     (email handler) can decide whether to continue.
 *   - If NOTION_TOKEN or NOTION_LEADS_DB_ID is missing we return
 *     `{ error: 'notion-not-configured' }` and console.warn once per
 *     call — the email path must still succeed without Notion.
 *   - Option names (Source, Industry, Status, ICP Tier) MUST match the
 *     Notion DB exactly. See lib/notion/types.ts for canonical list.
 */

import type {
  CreateLeadResult,
  IcpTier,
  LeadIndustry,
  LeadInput,
  LeadRow,
  LeadSource,
  LeadStatus,
  ListLeadsOptions,
  ListLeadsResult,
  UpdateLeadStatusResult,
} from './types';
import { getLeadsDbId, getNotionClient } from './client';

const VALID_SOURCES: readonly LeadSource[] = [
  'website-form',
  'outbound',
  'referral',
  'linkedin',
  'other',
] as const;

const VALID_INDUSTRIES: readonly LeadIndustry[] = [
  'fintech',
  'medtech',
  'edtech',
  'hospitality',
  'enterprise',
  'other',
] as const;

function normalizeSource(value: string | undefined): LeadSource {
  if (!value) return 'website-form';
  return (VALID_SOURCES as readonly string[]).includes(value)
    ? (value as LeadSource)
    : 'other';
}

function normalizeIndustry(value: string | undefined): LeadIndustry | null {
  if (!value) return null;
  return (VALID_INDUSTRIES as readonly string[]).includes(value)
    ? (value as LeadIndustry)
    : 'other';
}

function richText(value: string | undefined | null) {
  if (!value) return { rich_text: [] as { text: { content: string } }[] };
  // Notion rich_text items cap at 2000 chars per block. Chunk long
  // messages so we don't lose content on verbose form submissions.
  const chunks: string[] = [];
  const CHUNK = 1900;
  for (let i = 0; i < value.length; i += CHUNK) {
    chunks.push(value.slice(i, i + CHUNK));
  }
  return {
    rich_text: chunks.map((c) => ({ text: { content: c } })),
  };
}

/**
 * Create a new lead in the Notion Leads DB.
 *
 * Graceful-degradation contract: returns `{ error: 'notion-not-configured' }`
 * (never throws) when env vars are absent. Stream A must treat this as
 * a non-fatal warning.
 */
export async function createLead(input: LeadInput): Promise<CreateLeadResult> {
  const notion = getNotionClient();
  const databaseId = getLeadsDbId();

  if (!notion || !databaseId) {
    console.warn(
      '[notion] createLead skipped — NOTION_TOKEN or NOTION_LEADS_DB_ID not configured'
    );
    return { error: 'notion-not-configured' };
  }

  const source = normalizeSource(input.source);
  const industry = normalizeIndustry(input.industry);

  try {
    const properties: Record<string, unknown> = {
      Name: {
        title: [{ text: { content: input.fullName.slice(0, 2000) } }],
      },
      Email: { email: input.email },
      Company: richText(input.company),
      Message: richText(input.message),
      Source: { select: { name: source } },
      Status: { status: { name: 'New' satisfies LeadStatus } },
      'NDA Requested': { checkbox: Boolean(input.nda) },
    };

    if (input.phone) {
      properties.Phone = { phone_number: input.phone };
    }
    if (industry) {
      properties.Industry = { select: { name: industry } };
    }
    if (input.attachmentUrl) {
      properties['Attachment URL'] = { url: input.attachmentUrl };
    }

    // Cast through unknown: @notionhq/client types the properties map as a
    // huge union; our typed builder above is equivalent but not inferable.
    const page = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: properties as unknown as Parameters<
        typeof notion.pages.create
      >[0]['properties'],
    });

    // `page` is either a full or partial PageObjectResponse. Both expose
    // `id` and `url` on the full shape; narrow defensively.
    const id = 'id' in page ? page.id : '';
    const url = 'url' in page && typeof page.url === 'string' ? page.url : '';

    if (!id) {
      return { error: 'notion-create-failed' };
    }
    return { id, url };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'unknown-notion-error';
    console.error('[notion] createLead failed:', message);
    return { error: message };
  }
}

/**
 * Update a lead's status. Status option name must exist on the DB.
 */
export async function updateLeadStatus(
  pageId: string,
  status: LeadStatus
): Promise<UpdateLeadStatusResult> {
  const notion = getNotionClient();
  if (!notion) {
    console.warn(
      '[notion] updateLeadStatus skipped — NOTION_TOKEN not configured'
    );
    return { error: 'notion-not-configured' };
  }
  try {
    await notion.pages.update({
      page_id: pageId,
      properties: {
        Status: { status: { name: status } },
      } as unknown as Parameters<typeof notion.pages.update>[0]['properties'],
    });
    return { id: pageId, status };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'unknown-notion-error';
    console.error('[notion] updateLeadStatus failed:', message);
    return { error: message };
  }
}

// ---------------------------------------------------------------------------
// listLeads — helper for admin tooling. Not used by Wave 2 form flow.
// ---------------------------------------------------------------------------

// Narrow types for the subset of Notion property values we read. Using
// `unknown` + runtime narrowing keeps us free of the massive generated
// union types from @notionhq/client without resorting to `any`.
type NotionProp = { type: string } & Record<string, unknown>;
type NotionPage = {
  id: string;
  url: string;
  created_time: string;
  properties: Record<string, NotionProp>;
};

function readTitle(p: NotionProp | undefined): string {
  if (!p || p.type !== 'title') return '';
  const arr = (p as { title?: Array<{ plain_text?: string }> }).title ?? [];
  return arr.map((t) => t.plain_text ?? '').join('');
}
function readRichText(p: NotionProp | undefined): string | null {
  if (!p || p.type !== 'rich_text') return null;
  const arr =
    (p as { rich_text?: Array<{ plain_text?: string }> }).rich_text ?? [];
  const joined = arr.map((t) => t.plain_text ?? '').join('');
  return joined || null;
}
function readEmail(p: NotionProp | undefined): string | null {
  if (!p || p.type !== 'email') return null;
  return (p as { email?: string | null }).email ?? null;
}
function readPhone(p: NotionProp | undefined): string | null {
  if (!p || p.type !== 'phone_number') return null;
  return (p as { phone_number?: string | null }).phone_number ?? null;
}
function readUrl(p: NotionProp | undefined): string | null {
  if (!p || p.type !== 'url') return null;
  return (p as { url?: string | null }).url ?? null;
}
function readCheckbox(p: NotionProp | undefined): boolean {
  if (!p || p.type !== 'checkbox') return false;
  return Boolean((p as { checkbox?: boolean }).checkbox);
}
function readSelectName<T extends string>(
  p: NotionProp | undefined,
  allowed: readonly T[]
): T | null {
  if (!p || p.type !== 'select') return null;
  const name = (p as { select?: { name?: string } | null }).select?.name;
  if (!name) return null;
  return (allowed as readonly string[]).includes(name) ? (name as T) : null;
}
function readStatusName(p: NotionProp | undefined): LeadStatus | null {
  if (!p || p.type !== 'status') return null;
  const name = (p as { status?: { name?: string } | null }).status?.name;
  const allowed: readonly LeadStatus[] = [
    'New',
    'Qualifying',
    'Meeting',
    'Proposal',
    'Won',
    'Lost',
  ];
  if (!name) return null;
  return (allowed as readonly string[]).includes(name)
    ? (name as LeadStatus)
    : null;
}

function pageToRow(page: NotionPage): LeadRow {
  const p = page.properties;
  return {
    id: page.id,
    url: page.url,
    createdTime: page.created_time,
    fullName: readTitle(p.Name),
    email: readEmail(p.Email),
    company: readRichText(p.Company),
    phone: readPhone(p.Phone),
    source: readSelectName<LeadSource>(p.Source, VALID_SOURCES),
    icpTier: readSelectName<IcpTier>(p['ICP Tier'], [
      'A',
      'B',
      'C',
      'Unfit',
    ] as const),
    industry: readSelectName<LeadIndustry>(p.Industry, VALID_INDUSTRIES),
    status: readStatusName(p.Status),
    message: readRichText(p.Message),
    ndaRequested: readCheckbox(p['NDA Requested']),
    attachmentUrl: readUrl(p['Attachment URL']),
  };
}

// Resolve a database ID to its first data_source ID. Notion SDK v5
// removed `databases.query` — all queries now run against a data
// source. Most databases created via the UI have exactly one data
// source; we cache the lookup so we only pay one round-trip per
// process.
const dataSourceIdCache = new Map<string, string>();

async function resolveDataSourceId(
  notion: ReturnType<typeof getNotionClient> & object,
  databaseId: string
): Promise<string | null> {
  const cached = dataSourceIdCache.get(databaseId);
  if (cached) return cached;
  const db = (await notion.databases.retrieve({
    database_id: databaseId,
  })) as unknown as { data_sources?: Array<{ id: string }> };
  const first = db.data_sources?.[0]?.id;
  if (!first) return null;
  dataSourceIdCache.set(databaseId, first);
  return first;
}

export async function listLeads(
  opts: ListLeadsOptions = {}
): Promise<ListLeadsResult> {
  const notion = getNotionClient();
  const databaseId = getLeadsDbId();
  if (!notion || !databaseId) {
    return { error: 'notion-not-configured' };
  }

  try {
    const dataSourceId = await resolveDataSourceId(notion, databaseId);
    if (!dataSourceId) {
      return { error: 'notion-no-data-source' };
    }

    const queryArgs: Record<string, unknown> = {
      data_source_id: dataSourceId,
      page_size: opts.pageSize ?? 25,
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    };
    if (opts.startCursor) queryArgs.start_cursor = opts.startCursor;
    if (opts.status) {
      queryArgs.filter = {
        property: 'Status',
        status: { equals: opts.status },
      };
    }

    const res = await notion.dataSources.query(
      queryArgs as unknown as Parameters<typeof notion.dataSources.query>[0]
    );

    const leads = (res.results as unknown as NotionPage[])
      .filter((r) => r && typeof r.id === 'string' && r.properties)
      .map(pageToRow);

    return {
      leads,
      nextCursor: res.next_cursor ?? null,
      hasMore: res.has_more,
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : 'unknown-notion-error';
    console.error('[notion] listLeads failed:', message);
    return { error: message };
  }
}
