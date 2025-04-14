// app/blog/page.js
// Главная страница блога со списком всех статей

import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/api/strapi';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { Article } from '@/lib/types/article';

export const metadata = {
  title: 'Блог',
  description: 'Список всех статей нашего блога',
};

// Обновляем данные каждый час
export const revalidate = 3600;

export default async function BlogPage() {
  const { data: articles, meta } = await getAllArticles(1, 10);

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

        <div className="absolute overflow-hidden -z-10 lg:overflow-visible lg:overflow-y-hidden w-full max-h-[400px]">
          <Image
            src="img/3d.svg"
            width={2000}
            height={2000}
            unoptimized
            loading="lazy"
            alt="ECITech Main 3d img"
            className="hidden md:block relative rotate-[27deg] left-[4%] md:left-[0%] lg:left-[-3%]
                       -z-10 top-10 md:-top-4"
          ></Image>
          <div className='absolute bottom-0 h-20 w-full bg-gradient-to-b from-transparent to-[#0a0a0a]'></div>
        </div>
        <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
        
        <div className="flex flex-col space-y-6">
          {articles.map((article: Article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {meta.pagination.pageCount > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              {Array.from({ length: meta.pagination.pageCount }, (_, i) => (
                <Link
                  key={i + 1}
                  href={`/blog?page=${i + 1}`}
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