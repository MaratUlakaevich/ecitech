/**
 * Notion API client singleton.
 *
 * We intentionally lazy-init the client and return `null` when
 * NOTION_TOKEN is missing so that callers (e.g. createLead) can
 * degrade gracefully in local/dev or when Notion is not yet
 * provisioned. Email delivery must keep working without Notion.
 */

import { Client } from '@notionhq/client';

let cached: Client | null = null;

export function getNotionClient(): Client | null {
  const token = process.env.NOTION_TOKEN;
  if (!token || token.startsWith('secret_xxxxxxxx')) {
    return null;
  }
  if (!cached) {
    cached = new Client({ auth: token });
  }
  return cached;
}

export function getLeadsDbId(): string | null {
  const id = process.env.NOTION_LEADS_DB_ID;
  if (!id) return null;
  return id;
}

export function getCompaniesDbId(): string | null {
  const id = process.env.NOTION_COMPANIES_DB_ID;
  if (!id) return null;
  return id;
}

export function getConversationsDbId(): string | null {
  const id = process.env.NOTION_CONVERSATIONS_DB_ID;
  if (!id) return null;
  return id;
}

/**
 * True when we have both a token and a Leads DB ID. Use this to
 * short-circuit Notion writes.
 */
export function isNotionConfigured(): boolean {
  return getNotionClient() !== null && getLeadsDbId() !== null;
}
