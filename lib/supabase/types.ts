/**
 * Supabase schema types.
 *
 * This is a minimal hand-written shape matching supabase/migrations/0001_init.sql.
 * When the Supabase project is created we should regenerate these with:
 *
 *   npx supabase gen types typescript --project-id <id> > lib/supabase/database.ts
 *
 * and then import `Database` from there instead. Keeping this file as the
 * bridge so call sites don't break on regeneration.
 */

export type LeadStatusDb =
  | 'new'
  | 'qualifying'
  | 'meeting'
  | 'proposal'
  | 'won'
  | 'lost';

export type ConversationDirection = 'inbound' | 'outbound';
export type ConversationChannel = 'email' | 'chat';

export interface LeadsRow {
  id: string;
  created_at: string;
  email: string | null;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  industry: string | null;
  source: string | null;
  message: string | null;
  notion_id: string | null;
  status: LeadStatusDb;
}

export interface LeadsInsert {
  id?: string;
  created_at?: string;
  email?: string | null;
  full_name?: string | null;
  company?: string | null;
  phone?: string | null;
  industry?: string | null;
  source?: string | null;
  message?: string | null;
  notion_id?: string | null;
  status?: LeadStatusDb;
}

export interface ConversationsRow {
  id: string;
  lead_id: string | null;
  created_at: string;
  direction: ConversationDirection;
  channel: ConversationChannel;
  subject: string | null;
  body: string | null;
  raw_headers: Record<string, unknown> | null;
  embedding: number[] | null;
}

export interface ConversationsInsert {
  id?: string;
  lead_id?: string | null;
  created_at?: string;
  direction: ConversationDirection;
  channel: ConversationChannel;
  subject?: string | null;
  body?: string | null;
  raw_headers?: Record<string, unknown> | null;
  embedding?: number[] | null;
}

/**
 * Matches the shape expected by @supabase/supabase-js generics.
 */
export interface Database {
  public: {
    Tables: {
      leads: {
        Row: LeadsRow;
        Insert: LeadsInsert;
        Update: Partial<LeadsInsert>;
      };
      conversations: {
        Row: ConversationsRow;
        Insert: ConversationsInsert;
        Update: Partial<ConversationsInsert>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
