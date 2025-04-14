// app/blog/category/[slug]/page.js
// Страница категории с статьями

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllCategories, getArticlesByCategory } from '@/lib/api/strapi';
import ArticleCard from '@/components/ArticleCard';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const revalidate = 3600;

// Генерация метаданных для каждой категории
export async function generateMetadata({ params }: any) {
  const categoriesResponse = await getAllCategories();
  const category = categoriesResponse.data.find((cat: any) => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Категория не найдена',
      description: 'Запрашиваемая категория не существует',
    };
  }
  
  return {
    title: `${category.name} - Блог`,
    description: category.description || `Статьи из категории ${category.name}`,
  };
}

// Генерация статических путей для всех категорий
export async function generateStaticParams() {
  const { data: categories } = await getAllCategories();
  
  return categories.map((category: any) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params, searchParams }: any) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  const categoriesResponse = await getAllCategories();
  const category = categoriesResponse.data.find((cat: any) => cat.slug === params.slug);
  
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
          {articles.map((article: any) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {articles.length === 0 && (
          <p className="text-center py-8">В этой категории пока нет статей.</p>
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