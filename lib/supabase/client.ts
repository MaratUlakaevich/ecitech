/**
 * Supabase client factories.
 *
 * Two helpers:
 *   - createBrowserClient() uses the anon key, safe for client-side.
 *   - createServerClient()  uses the service-role key, SERVER ONLY.
 *
 * NOTE (Week 2): once we adopt @supabase/ssr for authed SSR routes, we
 * will likely replace createServerClient here with a cookie-aware
 * variant. For sprint day 1 we keep this intentionally minimal — the
 * project does not exist yet and nothing imports these clients.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

type Client = SupabaseClient<Database>;

function readPublicEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return { url, anon };
}

function isPlaceholder(value: string | undefined): boolean {
  if (!value) return true;
  return (
    value.includes('your-project.supabase.co') ||
    value.startsWith('eyJxxxxxxxx')
  );
}

let browserCache: Client | null = null;

/**
 * Browser-side client. Cached across hot reloads. Throws if env is
 * missing — browser code is expected to run only after env is wired.
 */
export function createBrowserClient(): Client {
  if (browserCache) return browserCache;
  const { url, anon } = readPublicEnv();
  if (!url || !anon || isPlaceholder(url) || isPlaceholder(anon)) {
    throw new Error(
      'Supabase not configured: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY'
    );
  }
  browserCache = createClient<Database>(url, anon, {
    auth: { persistSession: true, autoRefreshToken: true },
  });
  return browserCache;
}

/**
 * Server-side client using service-role key. DO NOT import this from
 * any `"use client"` file or from `lib/supabase/client` in a shared
 * bundle — bundler will leak the key. Import only from route handlers
 * and server actions.
 */
export function createServerClient(): Client {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (
    !url ||
    !serviceKey ||
    isPlaceholder(url) ||
    isPlaceholder(serviceKey)
  ) {
    throw new Error(
      'Supabase server client not configured: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY'
    );
  }
  return createClient<Database>(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Non-throwing variant used by graceful-degradation paths (e.g. the
 * form handler logging a conversation row). Returns null when env is
 * missing, so callers can skip without a try/catch.
 */
export function tryCreateServerClient(): Client | null {
  try {
    return createServerClient();
  } catch {
    return null;
  }
}
