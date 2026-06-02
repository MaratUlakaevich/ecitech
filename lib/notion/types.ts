/**
 * Notion CRM — shared types.
 *
 * Notion Leads database schema (must match the production Notion DB
 * that NOTION_LEADS_DB_ID points to):
 *
 *   - Name              (title)
 *   - Email             (email)
 *   - Company           (rich_text)
 *   - Phone             (phone_number)
 *   - Source            (select: website-form | outbound | referral | linkedin | other)
 *   - ICP Tier          (select: A | B | C | Unfit)         — empty by default
 *   - Budget            (rich_text)
 *   - Timeline          (rich_text)
 *   - Industry          (select: fintech | medtech | edtech | hospitality | enterprise | other)
 *   - Message           (rich_text)
 *   - Status            (status: New | Qualifying | Meeting | Proposal | Won | Lost)
 *   - NDA Requested     (checkbox)
 *   - Attachment URL    (url)
 *   - Created           (created_time, auto)
 *
 * Keep option names identical on the Notion side — typos will cause
 * Notion API validation errors at write time.
 */

export type LeadSource =
  | 'website-form'
  | 'outbound'
  | 'referral'
  | 'linkedin'
  | 'other';

export type LeadIndustry =
  | 'fintech'
  | 'medtech'
  | 'edtech'
  | 'hospitality'
  | 'enterprise'
  | 'other';

export type LeadStatus =
  | 'New'
  | 'Qualifying'
  | 'Meeting'
  | 'Proposal'
  | 'Won'
  | 'Lost';

export type IcpTier = 'A' | 'B' | 'C' | 'Unfit';

/**
 * Input accepted by `createLead()`. Stream A (form handler) builds this
 * object from the contact form payload and calls createLead.
 */
export type LeadInput = {
  fullName: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  source?: LeadSource;
  industry?: string;
  nda?: boolean;
  attachmentUrl?: string;
};

export type CreateLeadResult =
  | { id: string; url: string }
  | { error: string };

export type UpdateLeadStatusResult =
  | { id: string; status: LeadStatus }
  | { error: string };

/**
 * Minimal projection of a Notion Leads row — just the fields we need
 * when listing leads in our own UI / dashboards. The raw Notion page
 * object has far more data; we only surface what callers actually use.
 */
export type LeadRow = {
  id: string;
  url: string;
  createdTime: string;
  fullName: string;
  email: string | null;
  company: string | null;
  phone: string | null;
  source: LeadSource | null;
  icpTier: IcpTier | null;
  industry: LeadIndustry | null;
  status: LeadStatus | null;
  message: string | null;
  ndaRequested: boolean;
  attachmentUrl: string | null;
};

export type ListLeadsOptions = {
  pageSize?: number;
  startCursor?: string;
  status?: LeadStatus;
};

export type ListLeadsResult =
  | {
      leads: LeadRow[];
      nextCursor: string | null;
      hasMore: boolean;
    }
  | { error: string };
