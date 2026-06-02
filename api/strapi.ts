// api/strapi.ts
// Strapi REST client with fail-soft behaviour: if the backend is
// unreachable during build (or transiently down at runtime), getters
// return safe-empty shapes instead of throwing. The home page must
// never fail to build because the CMS is having a moment.

import { Article } from "@/lib/types/article";
import { Category } from "@/lib/types/category";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

// Build a full Strapi URL
export function getStrapiURL(path = "") {
  return `${API_URL}${path}`;
}

// Media URL helper (handles relative + absolute)
export function getStrapiMedia(media: { url: string }) {
  if (!media) return null;
  const { url } = media;
  return url.startsWith("/") ? getStrapiURL(url) : url;
}

export type StrapiCollectionResponse<T = unknown> = {
  data: T[];
  meta: {
    pagination: { page: number; pageSize: number; pageCount: number; total: number };
  };
};

function emptyCollection<T>(page = 1, pageSize = 0): StrapiCollectionResponse<T> {
  return {
    data: [] as T[],
    meta: { pagination: { page, pageSize, pageCount: 0, total: 0 } },
  };
}

function logStrapiFailure(path: string, reason: unknown) {
  // Visible in build logs without crashing the build.
  // eslint-disable-next-line no-console
  console.warn(`[strapi] fail-soft: ${path} — ${reason instanceof Error ? reason.message : reason}`);
}

// Base fetcher — fail-soft. Returns `null` on any failure (network,
// non-2xx, JSON parse error). Callers decide the safe-empty shape.
export async function fetchAPI<T = unknown>(
  path: string,
  options: RequestInit & { next?: { revalidate?: number } } = {}
): Promise<T | null> {
  const defaultOptions: RequestInit & { next?: { revalidate?: number } } = {
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
  };

  const mergedOptions = { ...defaultOptions, ...options };
  const requestUrl = getStrapiURL(`/api${path}`);

  try {
    const response = await fetch(requestUrl, mergedOptions);
    if (!response.ok) {
      logStrapiFailure(path, `${response.status} ${response.statusText}`);
      return null;
    }
    return (await response.json()) as T;
  } catch (err) {
    logStrapiFailure(path, err);
    return null;
  }
}

// Articles list with pagination
export async function getAllArticles(
  page = 1,
  pageSize = 10
): Promise<StrapiCollectionResponse<Article>> {
  const path = `/articles?&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
  const response = await fetchAPI<StrapiCollectionResponse<Article>>(path);
  return response ?? emptyCollection<Article>(page, pageSize);
}

// Article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const path = `/articles?filters[slug][$eq]=${slug}&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories`;
  const response = await fetchAPI<StrapiCollectionResponse<Article>>(path);
  return response?.data?.[0] ?? null;
}

// All categories
export async function getAllCategories(): Promise<StrapiCollectionResponse<Category>> {
  const path = `/categories?populate=*`;
  const response = await fetchAPI<StrapiCollectionResponse<Category>>(path);
  return response ?? emptyCollection<Category>();
}

// Articles by category
export async function getArticlesByCategory(
  categorySlug: string,
  page = 1,
  pageSize = 10
): Promise<StrapiCollectionResponse<Article>> {
  const path = `/articles?filters[categories][slug][$eq]=${categorySlug}&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
  const response = await fetchAPI<StrapiCollectionResponse<Article>>(path);
  return response ?? emptyCollection<Article>(page, pageSize);
}
