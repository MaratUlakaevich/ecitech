// app/sitemap.ts
// Site-wide sitemap, including blog posts and category pages.

import type { MetadataRoute } from 'next';
import { getAllArticles, getAllCategories } from '@/api/strapi';
import { Article } from '@/lib/types/article';
import { Category } from '@/lib/types/category';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ecitech.online';
  const now = new Date();

  // Core static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Blog articles
  let articlesUrls: MetadataRoute.Sitemap = [];
  try {
    const articlesResponse = await getAllArticles(1, 100);
    articlesUrls = articlesResponse.data.map((article: Article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (e) {
    // Fail-soft: if Strapi is unreachable at build time, still produce the
    // static portion of the sitemap rather than blocking the entire build.
    articlesUrls = [];
  }

  // Blog categories
  let categoriesUrls: MetadataRoute.Sitemap = [];
  try {
    const categoriesResponse = await getAllCategories();
    categoriesUrls = categoriesResponse.data.map((category: Category) => ({
      url: `${baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date(category.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));
  } catch (e) {
    categoriesUrls = [];
  }

  return [...staticPages, ...articlesUrls, ...categoriesUrls];
}
