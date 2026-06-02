// app/blog/category/[slug]/page.tsx
// Category index — Paper aesthetic.

import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getArticlesByCategory } from "@/api/strapi";
import ArticleCard from "@/components/ArticleCard";
import MastheadHeader from "@/components/MastheadHeader";
import EditorialFooter from "@/components/EditorialFooter";
import { Params } from "@/lib/types/params";
import { Category } from "@/lib/types/category";
import { Article } from "@/lib/types/article";
import BreadcrumbsLd from "@/components/seo/BreadcrumbsLd";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Params }) {
  const categoriesResponse = await getAllCategories();
  const category = categoriesResponse.data.find(
    (cat: Category) => cat.slug === params.slug
  );

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The category you are looking for does not exist",
    };
  }

  return {
    title: `${category.name} — Journal · ECITech`,
    description:
      category.description || `Articles in the ${category.name} category of the ECITech journal.`,
  };
}

export async function generateStaticParams() {
  const { data: categories } = await getAllCategories();
  return categories.map((category: Category) => ({ slug: category.slug }));
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: { page?: string };
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const categoriesResponse = await getAllCategories();
  const category = categoriesResponse.data.find(
    (cat: Category) => cat.slug === params.slug
  );

  if (!category) {
    notFound();
  }

  const { data: articles, meta } = await getArticlesByCategory(params.slug, page, 10);

  return (
    <>
      <BreadcrumbsLd
        items={[
          { name: "Home", url: "/" },
          { name: "Journal", url: "/blog" },
          { name: category.name, url: `/blog/category/${category.slug}` },
        ]}
      />

      <MastheadHeader />

      <main className="relative">
        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pt-16 pb-12 lg:pt-24 lg:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13.5px] text-ink-500 hover:text-copper-500 transition-colors mb-10"
          >
            <span className="w-6 h-px bg-current"></span>
            <span className="smallcaps">Back to journal</span>
          </Link>

          <div className="mono-eyebrow mb-6">Category</div>
          <h1 className="display text-[44px] sm:text-[60px] lg:text-[80px] text-ink-900 leading-[0.98] max-w-hero">
            {category.name}
          </h1>
          {category.description && (
            <p className="mt-8 max-w-reading text-[17px] lg:text-[19px] leading-[1.6] text-ink-700">
              {category.description}
            </p>
          )}
        </section>

        <section className="max-w-[1480px] mx-auto px-8 lg:px-14 pb-20 lg:pb-28">
          {articles.length === 0 ? (
            <div className="hairline border bg-paper-soft p-12 lg:p-16 text-center">
              <p className="display text-[22px] sm:text-[28px] text-ink-900 mb-3">
                No articles in this category yet.
              </p>
              <Link href="/blog" className="link-editorial">
                Back to journal &rarr;
              </Link>
            </div>
          ) : (
            <ul className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: Article) => (
                <li key={article.id}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          )}

          {meta.pagination.pageCount > 1 && (
            <nav className="mt-14 flex justify-center items-center gap-2">
              {Array.from({ length: meta.pagination.pageCount }, (_, i) => (
                <Link
                  key={i + 1}
                  href={`/blog/category/${params.slug}?page=${i + 1}`}
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
