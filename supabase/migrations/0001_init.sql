-- ============================================================================
-- 0001_init.sql — ECITech CRM / AI memory schema
-- ============================================================================
-- Creates:
--   * extension pgvector             (embeddings)
--   * extension pgcrypto             (gen_random_uuid)
--   * table    public.leads          (mirror of Notion Leads DB)
--   * table    public.conversations  (email/chat messages, embedded)
--   * indexes  on conversations.lead_id, conversations.embedding
--
-- Run once against a fresh Supabase project:
--
--   supabase db push                 # if using supabase CLI + linked project
--   # OR paste contents into Supabase SQL editor
--
-- All identifiers are lowercase snake_case to match Supabase conventions
-- and to make generated TS types idiomatic.
-- ============================================================================

-- --- Extensions --------------------------------------------------------------
create extension if not exists pgcrypto;
create extension if not exists vector;

-- --- leads -------------------------------------------------------------------
-- One row per lead. `notion_id` is the canonical cross-ref to the Notion
-- page; Notion stays the source of truth for sales pipeline state,
-- Supabase is the query/embedding-friendly mirror.
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  email       text,
  full_name   text,
  company     text,
  phone       text,
  industry    text,
  source      text,
  message     text,
  notion_id   text unique,
  status      text not null default 'new'
);

create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

create index if not exists leads_email_idx
  on public.leads (lower(email));

-- --- conversations -----------------------------------------------------------
-- Every inbound/outbound message we want the AI agent to remember.
-- `embedding` is OpenAI text-embedding-3-small sized (1536). If we
-- switch models we must either re-embed or create a sibling column.
create table if not exists public.conversations (
  id           uuid primary key default gen_random_uuid(),
  lead_id      uuid references public.leads(id) on delete cascade,
  created_at   timestamptz not null default now(),
  direction    text not null check (direction in ('inbound', 'outbound')),
  channel      text not null check (channel in ('email', 'chat')),
  subject      text,
  body         text,
  raw_headers  jsonb,
  embedding    vector(1536)
);

create index if not exists conversations_lead_id_idx
  on public.conversations (lead_id);

-- Vector index choice: HNSW.
--
-- Rationale: dataset size is small (<100k rows for the foreseeable
-- future) and HNSW gives better recall at low row counts without the
-- ivfflat "must ANALYZE after bulk insert to pick good lists"
-- footgun. pgvector >= 0.5 ships HNSW and Supabase enables it by
-- default. If we ever exceed ~1M rows we can swap to ivfflat with
-- lists = sqrt(N) and re-ANALYZE.
create index if not exists conversations_embedding_hnsw_idx
  on public.conversations
  using hnsw (embedding vector_cosine_ops);

-- --- RLS ---------------------------------------------------------------------
-- Enable RLS but do NOT add policies yet — server-side code uses the
-- service-role key which bypasses RLS. Policies will be added when
-- (and if) we expose any of these tables to the anon/authenticated
-- roles from the browser.
alter table public.leads enable row level security;
alter table public.conversations enable row level security;
