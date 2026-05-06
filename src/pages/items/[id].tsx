import React from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/Header';
import { supabase } from '@/lib/supabase';
import { Article } from '@/data/mock';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { ja } from 'date-fns/locale';

interface ItemProps {
  article: Article | null;
}

export default function ItemDetail({ article }: ItemProps) {
  if (!article) {
    return (
      <div className="min-h-screen bg-[#f5f6f6] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">記事が見つかりません。</p>
        </div>
      </div>
    );
  }

  const timeAgo = formatDistanceToNow(new Date(article.createdAt), { addSuffix: true, locale: ja });

  return (
    <div className="min-h-screen bg-[#f5f6f6] font-sans">
      <Head>
        <title>{article.title} - freelyTech版</title>
      </Head>
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-4 py-8 flex gap-6 justify-center">
        {/* Left Action Sidebar (LGTM, Stock, etc.) - Mocked for desktop */}
        <div className="hidden lg:flex flex-col gap-4 mt-8 w-12 items-center">
          <button className="w-12 h-12 bg-white rounded-full shadow-sm flex flex-col items-center justify-center text-gray-500 hover:text-[#55c500] hover:border-[#55c500] border border-transparent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            <span className="text-[10px] font-bold mt-1">{article.lgtmCount}</span>
          </button>
        </div>

        {/* Main Article Content */}
        <article className="bg-white rounded-lg border border-gray-200 p-8 w-full max-w-[800px]">
          <div className="flex items-center gap-3 mb-6">
            <img src={article.author.iconUrl} alt={article.author.username} className="w-10 h-10 rounded-full" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">@{article.author.username}</span>
              </div>
              <div className="text-xs text-gray-500">
                {timeAgo}に投稿
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map(tag => (
              <span key={tag} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              この記事はモックデータです。本来ここにはMarkdownで書かれた記事本文が表示されます。
              <br/><br/>
              実際のQiitaと同じように、コードブロックや見出しなどがスタイリングされます。
            </p>
          </div>
        </article>

        {/* Right Sidebar - Mocked */}
        <div className="hidden xl:block w-72">
          {/* Author info box */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <img src={article.author.iconUrl} alt={article.author.username} className="w-12 h-12 rounded-full" />
              <div>
                <div className="font-bold">@{article.author.username}</div>
                <div className="text-sm text-gray-500">{article.author.name}</div>
              </div>
            </div>
            <button className="w-full bg-gray-100 text-gray-800 font-bold py-2 rounded text-sm hover:bg-gray-200">
              フォロー
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const { data, error } = await supabase
    .from('articles')
    .select(`
      id,
      title,
      lgtm_count,
      created_at,
      profiles (name, username, icon_url),
      article_tags (
        tags (name)
      )
    `)
    .eq('id', id)
    .single();

  if (error || !data) {
    return { props: { article: null } };
  }

  const article: Article = {
    id: data.id,
    title: data.title,
    lgtmCount: data.lgtm_count || 0,
    createdAt: data.created_at,
    author: data.profiles ? {
      name: data.profiles.name,
      username: data.profiles.username,
      iconUrl: data.profiles.icon_url,
    } : { name: 'Unknown', username: 'unknown', iconUrl: '' },
    tags: data.article_tags ? data.article_tags.map((at: any) => at.tags?.name).filter(Boolean) : [],
  };

  return {
    props: {
      article,
    },
  };
}
