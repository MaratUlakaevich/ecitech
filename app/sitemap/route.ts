// app/sitemap.xml/route.ts
import { getAllArticles } from "@/api/strapi";
import { Article } from "@/lib/types/article";

export async function GET(): Promise<Response> {
  const baseUrl = "https://ecitech.online";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/portfolio",
    "/contact",
    "/blog",
  ];

  const {data: articles} = await getAllArticles(); // должен возвращать массив статей

  const dynamicBlogRoutes = articles.map((article: Article) => ({
    url: `/blog/${article.slug}`,
    lastmod: article.updatedAt,
  }));

  const allRoutes = [
    ...staticRoutes.map((route) => ({ url: route, lastmod: new Date().toISOString() })), 
    ...dynamicBlogRoutes
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        ({ url, lastmod }) => `
      <url>
        <loc>${baseUrl}${url}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${url === "/" ? "1.0" : "0.8"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
