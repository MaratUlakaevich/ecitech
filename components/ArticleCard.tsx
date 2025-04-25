// components/ArticleCard.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Article } from '@/lib/types/article';
import { Category } from '@/lib/types/category';

export default function ArticleCard( { article } : { article: Article }) {
  const { title, description, slug, seo, categories, publishedAt } = article;
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target instanceof Element && 
        (e.target.tagName.toLowerCase() === 'a' || 
        e.target.closest('a') !== null)) {
      return;
    }

    router.push(`/blog/${slug}`);
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden md:h-72 rounded-3xl bg-gradient-to-r hover:from-slate-600 hover:to-slate-900 duration-300 shadow-md hover:shadow-lg transition-shadow mb-8 cursor-pointer" onClick={handleClick}>
      <div className="md:w-1/3 relative h-56 md:h-auto p-4">
        {seo.img && (
            <div className="relative w-full h-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${seo.img.url}`}
                alt={title}
                fill
                loading='lazy'
                unoptimized
                className="object-cover rounded-2xl" 
              />
            </div>
        )}
      </div>
      
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          {categories && categories.length > 0 && (
            <div className="mb-4">
              {categories.map((category: Category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="text-sm text-blue-400 hover:text-blue-900 mr-2"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
          
            <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3 transition-colors">
              {title}
            </h2>
          
          <p className="text-gray-300 mb-4">
            {description}
          </p>
        </div>
        
        <div className="text-gray-500 text-right">
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toLocaleDateString('en-EU', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
      </div>
    </div>
  );
}