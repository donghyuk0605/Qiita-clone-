import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="flex h-12 items-center px-4 max-w-[1200px] mx-auto justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-1">
            <div className="bg-[#55c500] text-white font-bold text-lg px-2 py-0.5 rounded">
              Qiita
            </div>
            <span className="text-xs font-bold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">freelyTech版</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-[13px] text-gray-600">
          <Link href="/" className="px-2 py-1 hover:text-gray-900 font-medium text-gray-900">Trend</Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900">Stock List</Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900">Question</Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900 flex items-center gap-0.5">
            <svg className="w-3.5 h-3.5 text-[#55c500]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Qiita Conference
          </Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900">Official Event</Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900 flex items-center gap-0.5">
            Official Column
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900">Organization</Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900 flex items-center gap-0.5">
            Qiita Careers
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </Link>
          <Link href="/" className="px-2 py-1 hover:text-gray-900 flex items-center gap-0.5">
            AI x Dev x Team
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
              <Search className="w-3.5 h-3.5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-100 border border-gray-200 text-gray-900 text-xs rounded block w-[160px] pl-8 p-1.5 outline-none focus:ring-1 focus:ring-[#55c500] focus:border-[#55c500]"
              placeholder="Search"
            />
          </div>
          <Link href="/login" className="text-sm text-gray-600 hover:text-gray-900 border border-gray-300 px-3 py-1 rounded">
            Login
          </Link>
          <Link href="/" className="bg-[#55c500] text-white text-sm font-bold px-3 py-1 rounded hover:bg-[#46a300] transition-colors">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};
