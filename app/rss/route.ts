import { getAllArticles } from "@/api/strapi";
import { Article } from "@/lib/types/article";
import { Feed } from "feed";

export async function GET() {
  const baseUrl = "https://ecitech.online";
  const res = await getAllArticles(1, 50); // последние 50
  const feed = new Feed({
    title: "ECITech Blog",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    copyright: `© ${new Date().getFullYear()} ECITech. All rights reserved.`,
  });

  res.data.forEach((article: Article) => {
    const { title, slug, publishedAt, description } = article;
    feed.addItem({
      title,
      id: `${baseUrl}/blog/${slug}`,
      link: `${baseUrl}/blog/${slug}`,
      date: new Date(publishedAt),
      description,
    });
  });

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
