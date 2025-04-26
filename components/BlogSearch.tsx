// components/BlogSearch.tsx
'use client';

import { useState, useEffect } from 'react';
import { Article } from '@/lib/types/article';
import ArticleCard from './ArticleCard';

export default function BlogSearch({
  initialArticles,
}: {
  initialArticles: Article[];
}) {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // При пустом запросе возвращаем первоначальные статьи
    if (!query) {
      setArticles(initialArticles);
      return;
    }
    // Debounce 300ms
    const id = setTimeout(async () => {
      setLoading(true);
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const { articles: result } = await res.json();
      setArticles(result);
      setLoading(false);
    }, 300);
    return () => clearTimeout(id);
  }, [query, initialArticles]);

  return (
    <>
      <input
        type="text"
        className="w-full py-2 px-6 border rounded-full mb-4 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search articles…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      <div className="flex flex-col space-y-6">
        {articles.map((article: Article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
