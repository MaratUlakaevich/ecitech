// app/blog/[slug]/page.js
// Страница отдельной статьи

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/lib/api/strapi';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const revalidate = 3600;

// Генерация метаданных для каждой статьи
export async function generateMetadata({ params }: any) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Статья не найдена',
      description: 'Запрашиваемая статья не существует',
    };
  }
  
  const { title, description, seo } = article;
  
  return {
    title: seo?.metaTitle || title,
    description: seo?.metaDescription || description,
    openGraph: {
      title: seo?.metaTitle || title,
      description: seo?.metaDescription || description,
      type: 'article',
      ...(article.image?.data && {
        images: [{
          url: `http://localhost:1337${article.img.data.url}`,
          width: 1200,
          height: 630,
          alt: title,
        }],
      }),
    },
  };
}



// Генерация статических путей для всех статей
export async function generateStaticParams() {
  const { data: articles } = await getAllArticles(1, 100);
  
  return articles.map((article: any) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: any) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  const { title, content, publishedAt, category, img } = article;
  
  return (
    <>
      <Head>
        <title>ECITech</title>
        <meta name="description" content="" />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="mx-auto py-8 px-6 w-[90%] md:w-[80%] bg-gradient-to-r from-slate-600 to-slate-950 rounded-xl shadow-lg">
        <Link href="/blog" className="text-blue-300 hover:underline mb-4 inline-block">
          ← Back
        </Link>
        
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            
            <div className="flex items-center text-gray-400 mb-6">
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString('ru-RU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              {category?.data && (
                <>
                  <span className="mx-2">•</span>
                  <Link 
                    href={`/blog/category/${category.data.attributes.slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {category.data.name}
                  </Link>
                </>
              )}
            </div>
            
            {img?.data && (
              <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={`http://localhost:1337${img.data.url}`}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>
          
          <div className="mdx-content">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}