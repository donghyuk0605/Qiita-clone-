import React from 'react';
import Link from 'next/link';

const tagRankings = [
  { rank: 1, name: 'AI', users: 224, icon: '🤖' },
  { rank: 2, name: 'Python', users: 152, icon: '🐍' },
  { rank: 3, name: 'ClaudeCode', users: 141, icon: '💻' },
  { rank: 4, name: '初心者', users: 132, icon: '🔰' },
  { rank: 5, name: 'aws', users: 105, icon: '☁️' },
  { rank: 6, name: 'Security', users: 77, icon: '🔒' },
  { rank: 7, name: '個人開発', users: 77, icon: '🛠️' },
  { rank: 8, name: 'AIエージェント', users: 77, icon: '🤖' },
  { rank: 9, name: 'Claude', users: 68, icon: '🧠' },
  { rank: 10, name: 'LLM', users: 65, icon: '📚' },
];

export const LeftSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-[200px] shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      {/* Service Description */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
        <p className="text-sm font-bold text-gray-900 mb-2">
          Qiita is a knowledge sharing service for engineers.
        </p>
        <ul className="text-xs text-gray-600 space-y-1 mb-3">
          <li>You can follow users and tags</li>
          <li>You can stock useful information</li>
          <li>You can make edit suggestions for articles</li>
        </ul>
        <Link href="/" className="text-xs text-[#55c500] hover:underline block mb-3">
          Functions that can be used after logging in
        </Link>
        <div className="flex gap-2">
          <Link href="/login" className="flex-1 bg-[#55c500] text-white text-xs font-bold py-2 rounded text-center hover:bg-[#46a300]">
            Login
          </Link>
          <Link href="/" className="flex-1 border border-gray-300 text-gray-700 text-xs font-bold py-2 rounded text-center hover:bg-gray-50">
            Signup
          </Link>
        </div>
      </div>

      {/* Tag Rankings */}
      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-gray-900">Tag Rankings</h3>
          <div className="flex gap-2 text-xs">
            <button className="text-gray-900 font-bold border-b-2 border-gray-900 pb-0.5">Weekly</button>
            <button className="text-gray-400 hover:text-gray-600">Monthly</button>
          </div>
        </div>
        <ul className="space-y-0">
          {tagRankings.map((tag) => (
            <li key={tag.rank}>
              <Link
                href="#"
                className="flex items-center gap-2 py-2 hover:bg-gray-50 rounded -mx-2 px-2"
              >
                <span className={`w-5 text-center text-xs font-bold ${
                  tag.rank <= 3 ? 'text-[#55c500]' : 'text-gray-400'
                }`}>
                  {tag.rank}
                </span>
                <span className="text-sm">{tag.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-gray-900 truncate">{tag.name}</div>
                  <div className="text-xs text-gray-400">{tag.users} users</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
