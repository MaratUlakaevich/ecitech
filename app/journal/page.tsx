// app/journal/page.tsx
// Journal index — file-based MDX. Sourced from /content/journal/*.mdx.

import Link from "next/link";
import type { Metadata } from "next";
import MastheadHeader from "@/components/MastheadHeader";
import EditorialFooter from "@/components/EditorialFooter";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import {
  getAllArticles,
  getCategories,
  formatArticleDate,
} from "@/lib/journal/articles";

export const metadata: Metadata = {
  title: "Journal — ECITech",
  description:
    "Editorial notes on AI workflows, custom Next.js sites, and the operations layer behind growing businesses. From the studio.",
  keywords: [
    "ECITech journal",
    "AI workflow blog",
    "Next.js studio writing",
    "boutique digital studio essays",
  ],
  openGraph: {
    title: "Journal — ECITech",
    description:
      "Editorial notes on AI workflows, custom sites, and the operations behind growing businesses.",
    url: "https://ecitech.online/journal",
    images: [
      {
        url: "/img/og/default.png",
        width: 1200,
        height: 630,
        alt: "ECITech Journal",
      },
    ],
  },
  twitter: {
    title: "Journal — ECITech",
    description: "Editorial notes from the studio.",
    images: ["/img/og/default.png"],
  },
};

export default function JournalPage() {
  const articles = getAllArticles();
  const categories = getCategories();
  const featured = articles[0]; // newest article gets the headline slot
  const rest = articles.slice(1);

  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Journal", url: "/journal" },
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
            What we&apos;re learning while we ship: how the service ladder works in
            practice, the editorial side of custom Next.js, and the quiet operations
            layer behind a calm Monday.
          </p>
        </section>

        {/* Topic categories — purely descriptive in v1, not filterable */}
        {categories.length > 0 && (
          <section className="hairline-top hairline-bottom bg-paper-soft">
            <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-6 flex flex-wrap items-center gap-3">
              <span className="mono-eyebrow mr-2 !text-[10px]">Topics</span>
              {categories.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 hairline border bg-paper-50 text-[13px] text-ink-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Articles */}
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-24">
          {articles.length === 0 ? (
            <EmptyJournal />
          ) : (
            <>
              {/* Featured headline article */}
              {featured && (
                <Link href={`/journal/${featured.slug}`} className="group block mb-16 lg:mb-20">
                  <div className="hairline-top hairline-bottom py-10 lg:py-14 grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-16">
                    <div>
                      <div className="mono-eyebrow text-copper-500 mb-4">
                        00 — Latest issue
                      </div>
                      <h2 className="display text-[34px] sm:text-[48px] lg:text-[60px] text-ink-900 leading-[1.02] mb-6 group-hover:text-ink-700 transition-colors">
                        {featured.frontmatter.title}
                      </h2>
                      <p className="text-[17px] leading-[1.65] text-ink-700 max-w-reading">
                        {featured.frontmatter.excerpt ?? featured.frontmatter.description}
                      </p>
                      <div className="mt-8 inline-flex items-center gap-3 text-[14px] text-ink-900 group-hover:text-copper-500 transition-colors">
                        <span className="smallcaps">Read the essay</span>
                        <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-14"></span>
                      </div>
                    </div>
                    <aside className="lg:pl-10 lg:border-l hairline-strong space-y-5">
                      <div>
                        <div className="mono-eyebrow !text-[10px] mb-1">Category</div>
                        <div className="text-[15px] text-ink-900">
                          {featured.frontmatter.category}
                        </div>
                      </div>
                      <div>
                        <div className="mono-eyebrow !text-[10px] mb-1">Published</div>
                        <div className="text-[15px] text-ink-700">
                          {formatArticleDate(featured.frontmatter.date)}
                        </div>
                      </div>
                      <div>
                        <div className="mono-eyebrow !text-[10px] mb-1">Reading time</div>
                        <div className="text-[15px] text-ink-700">
                          {featured.frontmatter.readingTime} min
                        </div>
                      </div>
                    </aside>
                  </div>
                </Link>
              )}

              {/* Remaining articles */}
              {rest.length > 0 && (
                <>
                  <div className="mono-eyebrow mb-8">More from the journal</div>
                  <ol className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rest.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/journal/${a.slug}`}
                          className="group block hairline border bg-paper-50 hover:bg-paper-100 transition-colors p-8 lg:p-9 h-full"
                        >
                          <div className="mono-eyebrow !text-[10px] text-copper-500 mb-4">
                            {a.frontmatter.category}
                          </div>
                          <h3 className="display text-[24px] lg:text-[28px] text-ink-900 leading-[1.1] mb-4 group-hover:text-ink-700 transition-colors">
                            {a.frontmatter.title}
                          </h3>
                          <p className="text-[14.5px] leading-[1.6] text-ink-700 mb-6">
                            {a.frontmatter.excerpt ?? a.frontmatter.description}
                          </p>
                          <div className="hairline-top pt-4 flex items-center justify-between mono-eyebrow !text-[10px]">
                            <span>{formatArticleDate(a.frontmatter.date)}</span>
                            <span className="text-ink-700">{a.frontmatter.readingTime} min</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </>
              )}
            </>
          )}
        </section>
      </main>

      <EditorialFooter />
    </>
  );
}

function EmptyJournal() {
  return (
    <div className="hairline border bg-paper-50 p-12 lg:p-16 text-center">
      <p className="display text-[24px] sm:text-[32px] text-ink-900 leading-[1.15] mb-4">
        The journal opens soon.
      </p>
      <p className="text-[15px] text-ink-700 max-w-md mx-auto">
        First issue is in production. In the meantime, the work itself is the writing
        &mdash; see <Link href="/portfolio" className="link-editorial">Selected work</Link>.
      </p>
    </div>
  );
}
