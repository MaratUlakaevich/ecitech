// lib/journal/articles.ts
// File-based MDX article loader for /journal.
//
// Articles live in /content/journal/<slug>.mdx with a YAML frontmatter
// block. This module is the single source for journal listings,
// individual article lookup, sitemap entries, and the RSS feed.
//
// Why files-in-repo instead of Strapi: simpler ops (zero backend),
// version-controlled drafts via git, atomic preview deploys per article,
// and no external service to fail-soft around.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type JournalCategory = "Method" | "Engineering" | "Case study" | "Field notes";

export type JournalFrontmatter = {
  title: string;
  description: string;
  date: string;             // ISO yyyy-mm-dd
  updated?: string;
  category: JournalCategory;
  tags?: string[];
  cover?: string;            // optional cover image path (under /public)
  excerpt?: string;          // short teaser used on listings
  readingTime?: number;      // minutes, computed if missing
  author?: string;           // defaults to studio
  draft?: boolean;
};

export type Article = {
  slug: string;
  frontmatter: JournalFrontmatter;
  content: string;           // raw MDX body
};

const CONTENT_DIR = path.join(process.cwd(), "content", "journal");

/** Read every published .mdx article (newest first). */
export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const articles = files
    .map((file): Article | null => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const parsed = matter(raw);
      const fm = parsed.data as Partial<JournalFrontmatter>;

      if (!fm.title || !fm.date || !fm.category) {
        // Skip malformed articles rather than crashing the build
        // eslint-disable-next-line no-console
        console.warn(`[journal] skipping ${file}: missing required frontmatter`);
        return null;
      }

      if (fm.draft) return null;

      const readingTime =
        fm.readingTime ?? estimateReadingMinutes(parsed.content);

      return {
        slug,
        frontmatter: {
          title: fm.title,
          description: fm.description ?? "",
          date: fm.date,
          updated: fm.updated,
          category: fm.category as JournalCategory,
          tags: fm.tags ?? [],
          cover: fm.cover,
          excerpt: fm.excerpt,
          readingTime,
          author: fm.author ?? "Marat Ulakaev",
        },
        content: parsed.content,
      };
    })
    .filter((a): a is Article => a !== null);

  // Newest first
  articles.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return articles;
}

/** Single-article lookup by slug. */
export function getArticleBySlug(slug: string): Article | null {
  return getAllArticles().find((a) => a.slug === slug) ?? null;
}

/** All categories actually present across articles. */
export function getCategories(): JournalCategory[] {
  const set = new Set<JournalCategory>();
  for (const a of getAllArticles()) set.add(a.frontmatter.category);
  return Array.from(set);
}

/** Lightweight reading-time estimate (180 wpm). */
function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}

/** Human-readable date for templates. */
export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Category slug (kebab-case) — used by tag filters. */
export function categorySlug(category: JournalCategory): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}
