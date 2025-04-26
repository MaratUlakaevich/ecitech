// app/api/search/route.js
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '10';

  // Собираем Strapi-URL с case-insensitive поиском в title и content
  const filters = [
    `filters[$or][0][title][$containsi]=${encodeURIComponent(q)}`,
    `filters[$or][1][content][$containsi]=${encodeURIComponent(q)}`,
  ].join('&');

  const strapiRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?${filters}&populate[0]=seo&populate[1]=seo.img&populate[2]=img&populate[3]=categories&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`
  );
  const json = await strapiRes.json();
  
  // Отдаём массив статей как JSON
  return NextResponse.json({ articles: json.data });
}
