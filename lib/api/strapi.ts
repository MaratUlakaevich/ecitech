// lib/api/strapi.js
// Утилита для работы с API Strapi

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';

// Функция для получения полного URL API Strapi
export function getStrapiURL(path = '') {
  return `${API_URL}${path}`;
}

// Функция для получения URL медиа-файлов
export function getStrapiMedia(media: any) {
  if (!media) return null;
  
  const { url } = media;
  return url.startsWith('/') ? getStrapiURL(url) : url;
}

// Базовый fetcher для данных из Strapi
export async function fetchAPI(path: any, options = {}, locale?: string) {
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
export async function getAllArticles(page = 1, pageSize = 10, locale?: string) {
  const path = `/articles?&populate[seo][populate]=img&populate=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
  const response = await fetchAPI(path);
  return response;
}

// Получение статьи по slug
export async function getArticleBySlug(slug: any) {
  const path = `/articles?filters[slug][$eq]=${slug}&populate[seo][populate]=img&populate=categories`;
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
export async function getArticlesByCategory(categorySlug: any, page = 1, pageSize = 10) {
  const path = `/articles?filters[categories][slug][$eq]=${categorySlug}&populate[seo][populate]=img&populate=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
  const response = await fetchAPI(path);
  return response;
}