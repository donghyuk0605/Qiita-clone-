import React from 'react';
import Head from 'next/head';
import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/features/ArticleCard';
import { Filter } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Article } from '@/data/mock';

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Qiita clone - freelyTech版</title>
      </Head>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 bg-white">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-900 border-b-2 border-[#55c500] pb-3 -mb-3">
              <svg className="w-5 h-5 text-[#55c500]" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
              トレンド
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 pb-3 -mb-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              タイムライン
            </button>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        {/* Article Feed */}
        <div className="flex flex-col">
          {articles && articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              記事がありません。Supabaseでテーブル作成とデータ挿入を実行してください。
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
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
    .order('created_at', { ascending: false });

  let mappedArticles: Article[] = [];
  
  if (data) {
    mappedArticles = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      lgtmCount: item.lgtm_count || 0,
      createdAt: item.created_at,
      author: item.profiles ? {
        name: item.profiles.name,
        username: item.profiles.username,
        iconUrl: item.profiles.icon_url,
      } : { name: 'Unknown', username: 'unknown', iconUrl: '' },
      tags: item.article_tags ? item.article_tags.map((at: any) => at.tags?.name).filter(Boolean) : [],
    }));
  } else if (error) {
    console.error("Supabase fetch error:", error.message);
  }

  return {
    props: {
      articles: mappedArticles,
    },
  };
}
