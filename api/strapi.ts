// lib/api/strapi.js
// Утилита для работы с API Strapi

import { Article } from "@/lib/types/article";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// Функция для получения полного URL API Strapi
export function getStrapiURL(path = '') {
  return `${API_URL}${path}`;
}

// Функция для получения URL медиа-файлов
export function getStrapiMedia(media: {url: string}) {
  if (!media) return null;
  
  const { url } = media;
  return url.startsWith('/') ? getStrapiURL(url) : url;
}

// Базовый fetcher для данных из Strapi
export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const requestUrl = getStrapiURL(`/api${path}`);
  const response = await fetch(requestUrl, mergedOptions);

  if (!response.ok) {
    throw new Error(`Error fetching from Strapi: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
}

// Получение всех статей с пагинацией
export async function getAllArticles(page = 1, pageSize = 10) {
  const path = `/articles?&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
  const response = await fetchAPI(path);
  return response;
}

// Получение статьи по slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const path = `/articles?filters[slug][$eq]=${slug}&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories`;
  const response = await fetchAPI(path);
  return response.data?.[0] || null;
}

// Получение всех категорий
export async function getAllCategories() {
  const path = `/categories?populate=*`;
  const response = await fetchAPI(path);
  return response;
}

// Получение статей по категории
export async function getArticlesByCategory(categorySlug: string, page = 1, pageSize = 10) {
  const path = `/articles?filters[categories][slug][$eq]=${categorySlug}&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
  const response = await fetchAPI(path);
  return response;
}