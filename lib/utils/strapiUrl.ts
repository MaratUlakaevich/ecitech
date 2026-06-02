export const getStrapiImageUrl = (path: string): string => {
  const base = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
  if (!path) return '';
  return path.startsWith('http') ? path : `${base}${path}`;
};
