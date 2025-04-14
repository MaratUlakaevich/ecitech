// app/sitemap.js
// Sitemap для всего сайта, включая блог

import { getAllArticles, getAllCategories } from '@/lib/api/strapi';

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
  const articlesUrls = articlesResponse.data.map((article: any) => ({
    url: `${baseUrl}/blog/${article.attributes.slug}`,
    lastModified: new Date(article.attributes.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Получаем все категории
  const categoriesResponse = await getAllCategories();
  const categoriesUrls = categoriesResponse.data.map((category: any) => ({
    url: `${baseUrl}/blog/category/${category.attributes.slug}`,
    lastModified: new Date(category.attributes.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...articlesUrls, ...categoriesUrls];
}