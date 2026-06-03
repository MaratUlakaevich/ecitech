// app/journal/[slug]/page.tsx
// Single article — file-based MDX. Renders via next-mdx-remote/rsc.

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import MastheadHeader from "@/components/MastheadHeader";
import EditorialFooter from "@/components/EditorialFooter";
import FinalCTA from "@/components/FinalCTA";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import ArticleLd from "@/components/seo/ArticleLd";
import {
  getAllArticles,
  getArticleBySlug,
  formatArticleDate,
} from "@/lib/journal/articles";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: "Page not found — ECITech",
      description: "This article does not exist.",
    };
  }

  const { title, description, cover } = article.frontmatter;
  const url = `https://ecitech.online/journal/${article.slug}`;
  const image = cover ?? "/img/og/default.png";

  return {
    title: `${title} — ECITech Journal`,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [image],
    },
  };
}

// Lightweight MDX component palette — keeps prose rooted in our typography.
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="display text-[28px] sm:text-[34px] lg:text-[40px] text-ink-900 leading-[1.1] mt-14 mb-6"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="display text-[22px] sm:text-[26px] text-ink-900 leading-[1.15] mt-10 mb-4"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[17.5px] leading-[1.75] text-ink-800 mb-6" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-ink-900 underline decoration-1 underline-offset-4 decoration-copper-500 hover:text-copper-500 transition-colors"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 mb-8 space-y-2 text-[17.5px] leading-[1.7] text-ink-800 marker:text-copper-500"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 mb-8 space-y-2 text-[17.5px] leading-[1.7] text-ink-800 marker:text-copper-500"
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => <li {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-ink-900" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-2 border-copper-500 pl-6 my-8 italic text-ink-700 text-[18px] leading-[1.7]"
      {...props}
    />
  ),
  hr: () => <hr className="brass-rule my-12 max-w-md" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="font-mono text-[14px] bg-paper-deep px-1.5 py-0.5 rounded text-ink-900"
      {...props}
    />
  ),
};

export default function ArticlePage({ params }: { params: Params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const { frontmatter, content } = article;
  const url = `https://ecitech.online/journal/${article.slug}`;
  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Journal", url: "/journal" },
          { name: frontmatter.title, url },
        ]}
      />
      <ArticleLd
        headline={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.cover}
        datePublished={frontmatter.date}
        url={url}
      />

      <MastheadHeader />

      <main className="relative">
        <article className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-12 pb-16 lg:pt-20 lg:pb-24">
          {/* Back link */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[13.5px] text-ink-500 hover:text-copper-500 transition-colors mb-12 lg:mb-16"
          >
            <span className="w-6 h-px bg-current"></span>
            <span className="smallcaps">Back to journal</span>
          </Link>

          {/* Article header */}
          <header className="max-w-reading mx-auto mb-12 lg:mb-16">
            <div className="flex flex-wrap items-center gap-3 mb-8 mono-eyebrow !text-[10.5px]">
              <span className="text-copper-500">{frontmatter.category}</span>
              <span className="opacity-40">·</span>
              <time dateTime={frontmatter.date}>{formatArticleDate(frontmatter.date)}</time>
              <span className="opacity-40">·</span>
              <span>{frontmatter.readingTime} min read</span>
            </div>

            <h1 className="display text-[36px] sm:text-[52px] lg:text-[64px] text-ink-900 leading-[1.04]">
              {frontmatter.title}
            </h1>

            {frontmatter.description && (
              <p className="mt-8 text-[19px] lg:text-[21px] leading-[1.55] text-ink-700">
                {frontmatter.description}
              </p>
            )}
          </header>

          {/* Article body — MDX */}
          <div className="max-w-reading mx-auto">
            <MDXRemote
              source={content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </div>

          {/* Author / studio block */}
          <div className="max-w-reading mx-auto mt-16 lg:mt-20 pt-10 hairline-top">
            <div className="mono-eyebrow mb-2">From the studio</div>
            <div className="text-[15px] leading-[1.65] text-ink-700">
              Written by <span className="text-ink-900">{frontmatter.author}</span>, founder
              of ECITech &mdash; an independent digital studio.
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="hairline-top bg-paper-soft">
            <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-24">
              <div className="mono-eyebrow mb-10">More from the journal</div>
              <ol className="grid gap-6 lg:gap-8 md:grid-cols-3">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/journal/${a.slug}`}
                      className="group block hairline border bg-paper-50 hover:bg-paper-100 transition-colors p-7 lg:p-8 h-full"
                    >
                      <div className="mono-eyebrow !text-[10px] text-copper-500 mb-3">
                        {a.frontmatter.category}
                      </div>
                      <h3 className="display text-[20px] lg:text-[22px] text-ink-900 leading-[1.15] mb-3 group-hover:text-ink-700 transition-colors">
                        {a.frontmatter.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.6] text-ink-700">
                        {a.frontmatter.excerpt ?? a.frontmatter.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}
      </main>

      <FinalCTA />
      <EditorialFooter />
    </>
  );
}
