// app/journal/[slug]/page.tsx
// Article page — Paper editorial aesthetic.

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles } from "@/api/strapi";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import MastheadHeader from "@/components/MastheadHeader";
import EditorialFooter from "@/components/EditorialFooter";
import FinalCTA from "@/components/FinalCTA";
import { Params } from "@/lib/types/params";
import { Article } from "@/lib/types/article";
import SmallArticleCard from "@/components/SmallArticleCard";
import ClientMDX from "@/components/ClientMDX";
import { getStrapiImageUrl } from "@/lib/utils/strapiUrl";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";
import ArticleLd from "@/components/seo/ArticleLd";
import BlogReadTimer from "@/components/BlogReadTimer";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Params }) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Page not found",
      description: "This page does not exist",
    };
  }

  const { title, description, seo } = article;

  return {
    title: seo?.metaTitle || title,
    description: seo?.metaDescription || description,
    keywords: seo?.keywords || [],
    openGraph: {
      title: seo?.metaTitle || title,
      description: seo?.metaDescription || description,
      type: "article",
      images: seo?.img?.url
        ? [`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${seo.img.url}`]
        : [],
    },
    twitter: {
      title: seo?.metaTitle || title,
      description: seo?.metaDescription || description,
      card: "summary_large_image",
      images: seo?.img?.url
        ? [`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${seo.img.url}`]
        : [],
    },
  };
}

export async function generateStaticParams() {
  // Fail-soft already lives inside getAllArticles; an empty array just
  // means the build won't pre-render anything (ISR fills on first hit).
  const { data: articles } = await getAllArticles(1, 100);
  return articles.map((article: Article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Params }) {
  const article = await getArticleBySlug(params.slug);
  const { data: articles } = await getAllArticles(1, 4);

  if (!article) {
    notFound();
  }

  const latestArticles = articles.filter((a: Article) => a.id !== article.id).slice(0, 3);

  const { title, content, publishedAt, categories, img, seo } = article;
  const imagesUrls = img?.map((image) => image.url) ?? [];

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      format: "mdx",
    },
  });

  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Journal", url: "/journal" },
          { name: title, url: `/journal/${params.slug}` },
        ]}
      />
      <ArticleLd
        headline={title}
        description={seo?.metaDescription}
        image={img && img[0] ? getStrapiImageUrl(img[0].url) : undefined}
        datePublished={publishedAt}
        url={`https://ecitech.online/journal/${params.slug}`}
      />
      <BlogReadTimer slug={params.slug} />

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
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {categories && categories.length > 0 && (
                <>
                  <span className="opacity-40">·</span>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/journal/category/${category.slug}`}
                      className="text-copper-500 hover:underline"
                    >
                      {category.name}
                    </Link>
                  ))}
                </>
              )}
            </div>

            <h1 className="display text-[36px] sm:text-[52px] lg:text-[68px] text-ink-900 leading-[1.02]">
              {title}
            </h1>

            {img && img[0] && (
              <div className="relative w-full aspect-[3/2] mt-12 hairline border overflow-hidden">
                <Image
                  src={getStrapiImageUrl(img[0].url)}
                  alt={title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </header>

          {/* Article body */}
          <div className="max-w-reading mx-auto mdx-content text-[17px] leading-[1.75] text-ink-800">
            <ClientMDX {...mdxSource} images={imagesUrls} />
          </div>

          {/* Author / studio block */}
          <div className="max-w-reading mx-auto mt-16 lg:mt-20 pt-10 hairline-top">
            <div className="mono-eyebrow mb-2">From the studio</div>
            <div className="text-[15px] leading-[1.65] text-ink-700">
              Written by <span className="text-ink-900">Marat Ulakaev</span>, founder of ECITech &mdash; an independent digital studio.
            </div>
          </div>
        </article>

        {/* Latest insights */}
        {latestArticles.length > 0 && (
          <section className="hairline-top bg-paper-soft">
            <div className="max-w-[1480px] mx-auto px-8 lg:px-14 py-16 lg:py-24">
              <div className="mono-eyebrow mb-10">More from the journal</div>
              <ul className="grid gap-6 lg:gap-8 md:grid-cols-3">
                {latestArticles.map((a: Article) => (
                  <li key={a.id}>
                    <SmallArticleCard article={a} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      <FinalCTA />
      <EditorialFooter />
    </>
  );
}
