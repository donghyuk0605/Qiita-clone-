import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const topUsers = [
  { name: 'Akira-Isegawa', contributions: 635, icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Akira' },
  { name: 'miruky', contributions: 381, icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=miruky' },
  { name: 'ot12', contributions: 377, icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ot12' },
  { name: 'teppei19980914', contributions: 345, icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=teppei' },
  { name: 'nogataka', contributions: 287, icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nogataka' },
];

export const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden xl:block w-72 shrink-0 space-y-6">
      {/* Banner Mock */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <Link href="#">
          <div className="h-32 bg-gradient-to-r from-green-400 to-[#55c500] flex items-center justify-center p-4">
            <h3 className="text-white font-bold text-lg text-center drop-shadow-md">
              Qiita Engineer Festa 2026<br />開催中！
            </h3>
          </div>
          <div className="p-3">
            <p className="text-xs text-gray-600 flex items-center justify-between">
              豪華景品をゲットしよう <ExternalLink className="w-3 h-3" />
            </p>
          </div>
        </Link>
      </div>

      {/* User Ranking */}
      <div className="bg-white rounded-lg border border-gray-200 py-3">
        <div className="px-4 pb-2 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-gray-800 text-sm">User Rankings</h3>
          <span className="text-xs text-gray-400">更新: 24時間毎</span>
        </div>
        <ul className="pt-2">
          {topUsers.map((user, index) => (
            <li key={index}>
              <Link href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
                <span className="w-4 text-center font-bold text-gray-400 text-sm">
                  {index + 1}
                </span>
                <img src={user.icon} alt={user.name} className="w-8 h-8 rounded-full border border-gray-200 bg-gray-50" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">@{user.name}</p>
                  <p className="text-xs text-gray-500">{user.contributions} Contributions</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
