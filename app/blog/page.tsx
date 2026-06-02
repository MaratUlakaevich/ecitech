// app/blog/page.tsx
// Journal index — Paper aesthetic. Strapi-backed.

import Link from "next/link";
import { getAllArticles, getAllCategories } from "@/api/strapi";
import { Category } from "@/lib/types/category";
import MastheadHeader from "@/components/MastheadHeader";
import EditorialFooter from "@/components/EditorialFooter";
import BlogSearch from "@/components/BlogSearch";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export const metadata = {
  title: "Journal — ECITech",
  description:
    "Editorial notes on AI workflows, custom Next.js sites, and the operations layer behind growing businesses. From the studio.",
  keywords: [
    "ECITech journal",
    "AI workflow blog",
    "Next.js studio blog",
    "boutique digital studio writing",
  ],
};

export const revalidate = 3600;

export default async function BlogPage() {
  const { data: articles, meta } = await getAllArticles(1, 10);
  const { data: categories } = await getAllCategories();

  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
        ]}
      />

      <MastheadHeader />

      <main className="relative">
        {/* Hero */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="mono-eyebrow mb-8">Journal · Notes from the studio</div>
          <h1 className="display text-[48px] sm:text-[68px] lg:text-[88px] text-ink-900 leading-[0.98] max-w-hero">
            Editorial notes,<br />
            <span className="display-italic text-copper-500">honest takes.</span>
          </h1>
          <p className="mt-10 max-w-reading text-[17px] lg:text-[19px] leading-[1.6] text-ink-700">
            What we&apos;re learning while we ship: AI workflows that actually work, custom Next.js patterns, the operations layer behind a calm Monday.
          </p>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="hairline-top hairline-bottom bg-paper-soft">
            <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-6 flex flex-wrap items-center gap-3">
              <span className="mono-eyebrow mr-2 !text-[10px]">Filter</span>
              <Link
                href="/blog"
                className="px-3 py-1.5 hairline border bg-paper-50 text-[13px] text-ink-900 hover:border-copper-500 hover:text-copper-500 transition-colors"
              >
                All
              </Link>
              {categories.map((category: Category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="px-3 py-1.5 hairline border bg-paper-50 text-[13px] text-ink-700 hover:border-copper-500 hover:text-copper-500 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Articles */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-24">
          <div className="mono-eyebrow mb-10">Latest writing</div>

          {articles.length === 0 ? (
            <div className="hairline border bg-paper-50 p-12 lg:p-16 text-center">
              <p className="display text-[24px] sm:text-[32px] text-ink-900 leading-[1.15] mb-4">
                The journal opens soon.
              </p>
              <p className="text-[15px] text-ink-700 max-w-md mx-auto">
                First issue is in production. In the meantime, the work itself is the writing &mdash; see{" "}
                <Link href="/portfolio" className="link-editorial">
                  Selected work
                </Link>
                .
              </p>
            </div>
          ) : (
            <BlogSearch initialArticles={articles} />
          )}

          {meta.pagination.pageCount > 1 && (
            <nav className="mt-12 flex justify-center items-center gap-2">
              {Array.from({ length: meta.pagination.pageCount }, (_, i) => (
                <Link
                  key={i + 1}
                  href={`/blog?page=${i + 1}`}
                  className="px-3 py-1.5 hairline border text-[13px] text-ink-700 hover:border-copper-500 hover:text-copper-500 transition-colors"
                >
                  {i + 1}
                </Link>
              ))}
            </nav>
          )}
        </section>
      </main>

      <EditorialFooter />
    </>
  );
}
