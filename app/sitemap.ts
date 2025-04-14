// app/sitemap.js
// Sitemap для всего сайта, включая блог

import { getAllArticles, getAllCategories } from '@/api/strapi';
import { Article } from '@/lib/types/article';
import { Category } from '@/lib/types/category';

export default async function sitemap() {
  const baseUrl = 'https://ecitech.online';

  // Базовые URL сайта
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Получаем все статьи
  const articlesResponse = await getAllArticles(1, 100);
  const articlesUrls = articlesResponse.data.map((article: Article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Получаем все категории
  const categoriesResponse = await getAllCategories();
  const categoriesUrls = categoriesResponse.data.map((category: Category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: new Date(category.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...articlesUrls, ...categoriesUrls];
}