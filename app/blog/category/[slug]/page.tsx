// app/blog/category/[slug]/page.js
// Страница категории с статьями

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCategories, getArticlesByCategory } from '@/api/strapi';
import ArticleCard from '@/components/ArticleCard';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Params } from '@/lib/types/params';
import { Category } from '@/lib/types/category';
import { Article } from '@/lib/types/article';

export const revalidate = 3600;

// Генерация метаданных для каждой категории
export async function generateMetadata({ params }: {params: Params}) {
  const categoriesResponse = await getAllCategories();
  const category = categoriesResponse.data.find((cat: Category) => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The category you are looking for does not exist',
    };
  }
  
  return {
    title: `${category.name} - Blog`,
    description: category.description || `Articles from category ${category.name}`,
  };
}

// Генерация статических путей для всех категорий
export async function generateStaticParams() {
  const { data: categories } = await getAllCategories();
  
  return categories.map((category: Category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params, searchParams }: { params: Params, searchParams: { page?: string } }) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const categoriesResponse = await getAllCategories();
  const category = categoriesResponse.data.find((cat: Category) => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }
  
  const { data: articles, meta } = await getArticlesByCategory(params.slug, page, 10);
  
  return (
    <>
      <Head>
        <title>ECITech</title>
        <meta name="description" content="" />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="lg:w-[80%] mx-auto py-8 px-6">
        <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back
        </Link>
        
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        {category.description && (
          <p className="text-gray-600 mb-8">{category.description}</p>
        )}
        
        <div className="flex flex-col space-y-6">
          {articles.map((article: Article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {articles.length === 0 && (
          <p className="text-center py-8">No articles in this category</p>
        )}
        
        {meta.pagination.pageCount > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              {Array.from({ length: meta.pagination.pageCount }, (_, i) => (
                <Link
                  key={i + 1}
                  href={`/blog/category/${params.slug}?page=${i + 1}`}
                  className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                  {i + 1}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}