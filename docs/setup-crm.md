# CRM Setup — Notion + Supabase

End-to-end provisioning guide. Run through this once to wire up a fresh
environment. Estimated time: ~30 minutes.

## 1. Notion integration

1. Visit <https://www.notion.so/my-integrations> and click **New
   integration**. Name: `ECITech Website`. Associate it with your
   workspace. Capabilities: **Read content**, **Update content**,
   **Insert content**. No user info needed.
2. Copy the **Internal Integration Secret** — this is `NOTION_TOKEN`
   (starts with `secret_` or `ntn_`).
3. Add the token to `.env.local`:
   ```
   NOTION_TOKEN=secret_xxxxxxxx
   ```

## 2. Notion databases

Create three databases in a workspace page the integration can see. For
each database, click **...** -> **Connections** -> add the `ECITech
Website` integration. Without this step, API calls return
`object_not_found`.

### 2a. Leads database

Create a database named **Leads** with exactly these properties (names
are case-sensitive — the client matches on them):

| Property         | Type          | Options / notes                                                                    |
| ---------------- | ------------- | ---------------------------------------------------------------------------------- |
| Name             | Title         | (default title column)                                                             |
| Email            | Email         |                                                                                    |
| Company          | Text          |                                                                                    |
| Phone            | Phone         |                                                                                    |
| Source           | Select        | `website-form`, `outbound`, `referral`, `linkedin`, `other`                        |
| ICP Tier         | Select        | `A`, `B`, `C`, `Unfit` (leave rows blank by default)                               |
| Budget           | Text          |                                                                                    |
| Timeline         | Text          |                                                                                    |
| Industry         | Select        | `fintech`, `medtech`, `edtech`, `hospitality`, `enterprise`, `other`               |
| Message          | Text          |                                                                                    |
| Status           | **Status**    | Groups: To-do = `New`, `Qualifying`; In progress = `Meeting`, `Proposal`; Complete = `Won`, `Lost` |
| NDA Requested    | Checkbox      |                                                                                    |
| Attachment URL   | URL           |                                                                                    |
| Created          | Created time  |                                                                                    |

Copy the database ID from the URL
(`https://notion.so/<workspace>/<DB_ID>?v=...` — the 32-char hex chunk
before `?v=`) into `.env.local` as:

```
NOTION_LEADS_DB_ID=<32-char id>
```

Note on Notion API v5: the SDK now queries **data sources**, not
databases. For databases created via the Notion UI, each database
has exactly one data source and the client resolves it automatically
(see `resolveDataSourceId` in `lib/notion/leads.ts`). You only need
the database ID here.

### 2b. Companies database

Create a database named **Companies**. Schema is TBD (Wave 3). For now
just capture the ID:

```
NOTION_COMPANIES_DB_ID=<32-char id>
```

### 2c. Conversations database

Create a database named **Conversations**. Schema is TBD (Wave 3). For
now:

```
NOTION_CONVERSATIONS_DB_ID=<32-char id>
```

## 3. Smoke-test Notion

After restarting `npm run dev`, submit the contact form. A new row
should appear in the Leads DB with Status = `New`. If nothing shows up,
check the server console for a `[notion]` log line.

If the env is missing or a DB is not shared with the integration, the
form still sends email — Notion write errors are swallowed and logged.

## 4. Supabase project

1. Create a project at <https://supabase.com/dashboard>. Region: choose
   closest to Vercel deployment region (usually `eu-west` for us).
2. From **Project Settings -> API**, copy:
   - `Project URL` -> `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key -> `SUPABASE_SERVICE_ROLE_KEY` (server-only,
     never commit, never expose to the browser)
3. Add all three to `.env.local`.

## 5. Run the initial migration

Option A — SQL editor (fastest):

1. Open Supabase dashboard -> **SQL Editor** -> **New query**.
2. Paste the contents of `supabase/migrations/0001_init.sql`.
3. Click **Run**. You should see `Success. No rows returned`.

Option B — Supabase CLI (recommended once more migrations exist):

```bash
brew install supabase/tap/supabase   # if not installed
supabase link --project-ref <project-ref>
supabase db push
```

## 6. Verify

In the SQL editor run:

```sql
select extname from pg_extension where extname in ('vector', 'pgcrypto');
select count(*) from public.leads;
select count(*) from public.conversations;
```

You should get both extensions listed and `0` rows in each table.

## 7. Production (Vercel)

Mirror the same env names in **Vercel -> Project -> Settings ->
Environment Variables**. Make sure `SUPABASE_SERVICE_ROLE_KEY` is scoped
to **Production** and **Preview** only (never **Development** — that
leaks into previews of forks if you ever accept PRs from outside the
team).
