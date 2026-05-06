import React from 'react';
import Head from 'next/head';
import { Layout } from '@/components/layout/Layout';
import { ArticleCard } from '@/components/features/ArticleCard';
import { supabase } from '@/lib/supabase';
import { Article } from '@/data/mock';
import Link from 'next/link';

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Qiita clone - freelyTech版</title>
      </Head>

      {/* Conference Banner */}
      <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
        <Link href="#">
          <img src="/images/conference_banner.png" alt="Qiita Conference 2026" className="w-full" />
        </Link>
        <div className="bg-white px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
          ⏳ Time to end <span className="font-bold text-gray-900">25 days</span>
        </div>
      </div>

      {/* Article Feed */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2.5 bg-white">
          <div className="flex items-center gap-1">
            <button className="flex items-center gap-1.5 text-sm font-bold text-gray-900 bg-gray-100 px-3 py-1.5 rounded-full">
              ≡ All
            </button>
          </div>
          <span className="text-xs text-gray-400">
            Remarkable items. Refreshed at every 5 a.m. and 5 p.m. 🔄
          </span>
        </div>

        {/* Articles */}
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
        name: Array.isArray(item.profiles) ? item.profiles[0]?.name : item.profiles.name,
        username: Array.isArray(item.profiles) ? item.profiles[0]?.username : item.profiles.username,
        iconUrl: Array.isArray(item.profiles) ? item.profiles[0]?.icon_url : item.profiles.icon_url,
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
