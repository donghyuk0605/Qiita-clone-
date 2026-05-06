import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';
import Link from 'next/link';
import { Article } from '../../data/mock';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const timeAgo = formatDistanceToNow(new Date(article.createdAt), { addSuffix: true, locale: ja });

  return (
    <article className="bg-white p-4 sm:p-5 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Link href={`/${article.author.username}`}>
          <img
            src={article.author.iconUrl}
            alt={article.author.username}
            className="w-6 h-6 rounded-full border border-gray-200"
          />
        </Link>
        <div className="flex flex-wrap items-center text-sm gap-1">
          <Link href={`/${article.author.username}`} className="text-gray-900 font-medium hover:underline">
            @{article.author.username}
          </Link>
          <span className="text-gray-500">({article.author.name})</span>
          <span className="text-gray-500 mx-1">・</span>
          <span className="text-gray-500">{timeAgo}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
        <Link href={`/items/${article.id}`} className="hover:text-[#55c500] transition-colors">
          {article.title}
        </Link>
      </h2>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
        {article.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="text-xs text-gray-500 hover:bg-gray-200 bg-gray-100 px-2 py-1 rounded-sm transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-1 text-gray-500 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#55c500]">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
        <span className="font-bold">{article.lgtmCount}</span>
      </div>
    </article>
  );
};
