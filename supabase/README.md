# Supabase

Migrations live in `migrations/`. Apply them either via the Supabase SQL
editor (copy/paste the file) or via the Supabase CLI once the project is
linked:

```bash
# one-time, after creating the project in the dashboard
supabase link --project-ref <project-ref>

# apply all migrations
supabase db push
```

## Current migrations

- `0001_init.sql` — enables `pgvector`, creates `leads` and
  `conversations` tables, adds indexes (HNSW on embeddings). RLS is
  enabled with no policies; all access is expected via the service-role
  key from server code.

See `docs/setup-crm.md` for the full end-to-end provisioning walkthrough.
