import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { Article } from '../../data/mock';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const dateStr = format(new Date(article.createdAt), 'yyyy-MM-dd');

  return (
    <article className="bg-white px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      {/* Tags row (shown as label before title like in screenshot) */}
      {article.tags.length > 0 && (
        <div className="flex items-center gap-1 mb-1 text-xs text-gray-400">
          <span>📝</span>
          <span>{article.tags[0]}</span>
          {article.tags.length > 1 && <span>・{article.tags.slice(1).join(' ')}</span>}
        </div>
      )}

      {/* Author info */}
      <div className="flex items-center gap-1.5 mb-1">
        <Link href={`/${article.author.username}`}>
          <img
            src={article.author.iconUrl}
            alt={article.author.username}
            className="w-5 h-5 rounded-full border border-gray-200"
          />
        </Link>
        <div className="flex flex-wrap items-center text-xs gap-1 text-gray-500">
          <Link href={`/${article.author.username}`} className="text-gray-700 hover:underline">
            @{article.author.username}
          </Link>
          <span>({article.author.name})</span>
        </div>
        <span className="text-xs text-gray-400 ml-auto">{dateStr}</span>
      </div>

      {/* Title */}
      <h2 className="text-[15px] font-bold text-gray-900 mb-1.5 leading-snug">
        <Link href={`/items/${article.id}`} className="hover:text-[#55c500] transition-colors">
          {article.title}
        </Link>
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        {article.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="text-xs text-gray-500 hover:bg-gray-200 bg-gray-100 px-2 py-0.5 rounded-sm transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>

      {/* Bottom row: LGTM count + actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-500 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span>{article.lgtmCount}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <button className="hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button className="hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};
