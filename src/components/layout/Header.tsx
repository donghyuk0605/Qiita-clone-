import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex h-14 items-center px-4 max-w-[1200px] mx-auto justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#55c500] text-white font-bold text-xl px-2 py-1 rounded">
              Qiita
            </div>
            <span className="text-sm font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">freelyTech版</span>
          </Link>
          
          <div className="hidden md:flex relative ml-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-100 border-none text-gray-900 text-sm rounded-md block w-[300px] pl-10 p-2 outline-none focus:ring-2 focus:ring-[#55c500]"
              placeholder="キーワードを入力"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-sm font-medium">
            <button className="text-gray-500 hover:text-gray-900">ユーザー登録</button>
            <Link href="/login" className="text-gray-500 hover:text-gray-900">ログイン</Link>
          </div>
          <button className="bg-[#55c500] text-white text-sm font-bold px-4 py-2 rounded hover:bg-[#46a300] transition-colors">
            記事を投稿する
          </button>
        </div>
      </div>
    </header>
  );
};
