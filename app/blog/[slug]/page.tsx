// app/blog/[slug]/page.js
// Страница отдельной статьи

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles } from '@/api/strapi';
import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Params } from '@/lib/types/params';
import { Article } from '@/lib/types/article';
import SmallArticleCard from '@/components/SmallArticleCard';

const ClientMDX = dynamic(() => import('@/components/ClientMDX'), {
  ssr: false,   // ensure this runs only on the client
});

export const revalidate = 3600;

// Генерация метаданных для каждой статьи
export async function generateMetadata({ params }: {params: Params}) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Page not found',
      description: 'This page does not exist',
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
      type: 'article',
      images: [`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${seo.img.url}`]
    },
    twitter: {
      title: seo?.metaTitle || title,
      description: seo?.metaDescription || description,
      card: 'summary_large_image',
      images: [`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${seo.img.url}`]
    }
  };
}

// Генерация статических путей для всех статей
export async function generateStaticParams() {
  const { data: articles } = await getAllArticles(1, 100);
  
  return articles.map((article: Article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: {params: Params}) {
  const article = await getArticleBySlug(params.slug);
  const { data: articles } = await getAllArticles(1, 3);

  if (!articles || !article) {
    notFound();
  }
  
  const latestArticles = articles.filter((a: Article) => a.id !== article.id);
  
  console.log("Removed", latestArticles);
  
  const { title, content, publishedAt, categories, img, seo } = article;

  const imagesUrls = img?.map((image) => image.url)

  const mdxSource = await serialize(content, 
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        format: 'mdx',
      },
    }
  )

  return (
    <>
      <Head>
        <title>{seo.metaTitle}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="icon" href="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main className="mx-auto py-8 px-6 w-[90%] md:w-[80%] bg-gradient-to-r from-slate-800 to-slate-950 rounded-xl shadow-lg">
        <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Back
        </Link>
        
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
            
            <div className="flex flex-col md:flex-row justify-between md:items-center text-gray-400 text-sm md:text-base lg:text-lg mb-6">
              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString('en-EU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <div className='flex flex-col md:flex-row mt-4 md:mt-0'>
              {categories.map((category) =>
                <>
                  <Link 
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="text-blue-500 hover:underline md:ml-4"
                  >
                    {category.name}
                  </Link>
                </>
              )}
              </div>
            </div>
            
            {img && (
              <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={`http://localhost:1337${img[0].url}`}
                  alt={title}
                  fill
                  className="object-cover"
                  unoptimized
                  loading='lazy'
                />
              </div>
            )}
          </header>
          
          <div className="mdx-content">
            <ClientMDX 
              {...mdxSource}
              images={imagesUrls}
            />
          </div>
        </article>
      </main>
        <aside className='w-[80%] mx-auto my-10'>
          <h3 className='text-2xl font-bold'>Latest insights</h3>
          <ul className='flex flex-col md:flex-row w-full'>
            {latestArticles.map((a: Article) => (
              <li key={a.id} className='max-w-[40%]'>
                <SmallArticleCard key={a.id} article={a} />
              </li>
            ))}
            
          </ul>
        </aside>

      <Footer />
    </>
  );
}