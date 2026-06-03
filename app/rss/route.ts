// app/rss/route.ts
// RSS feed sourced from the MDX journal.

import { Feed } from "feed";
import { getAllArticles } from "@/lib/journal/articles";

export function GET() {
  const baseUrl = "https://ecitech.online";
  const articles = getAllArticles();

  const feed = new Feed({
    title: "ECITech Journal",
    description:
      "Editorial notes on AI workflows, custom Next.js sites, and the operations layer behind growing businesses.",
    id: baseUrl,
    link: `${baseUrl}/journal`,
    language: "en",
    image: `${baseUrl}/img/og/default.png`,
    favicon: `${baseUrl}/img/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} ECITech.`,
    author: {
      name: "Marat Ulakaev",
      email: "hello@ecitech.online",
      link: "https://ecitech.online",
    },
  });

  for (const article of articles) {
    const { title, description, date, excerpt, category } = article.frontmatter;
    feed.addItem({
      title,
      id: `${baseUrl}/journal/${article.slug}`,
      link: `${baseUrl}/journal/${article.slug}`,
      date: new Date(date),
      description: excerpt ?? description,
      category: [{ name: category }],
    });
  }

  return new Response(feed.rss2(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
