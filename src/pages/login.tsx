import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f6f6] flex flex-col items-center justify-center font-sans">
      <Head>
        <title>ログイン - freelyTech版</title>
      </Head>

      <div className="mb-8 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 mb-4">
          <div className="bg-[#55c500] text-white font-bold text-3xl px-3 py-1 rounded">
            Qiita
          </div>
        </Link>
        <p className="text-gray-600">エンジニアに関する知識を記録・共有しよう</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-6">ログイン</h1>

        {errorMsg && (
          <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#55c500]"
              placeholder="qiita@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[#55c500]"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#55c500] text-white font-bold py-2 px-4 rounded hover:bg-[#46a300] transition-colors disabled:opacity-50"
          >
            {loading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            ※ デモ用のため、Supabase Authが有効になっていない場合はエラーになります。
          </p>
        </div>
      </div>
    </div>
  );
}
