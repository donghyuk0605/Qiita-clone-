import React from 'react';
import Link from 'next/link';
import { Home, Clock, Hash, HelpCircle, Calendar, Users } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'トレンド', active: true },
  { icon: Clock, label: 'タイムライン', active: false },
  { icon: Hash, label: 'タグ一覧', active: false },
  { icon: HelpCircle, label: '質問', active: false },
  { icon: Calendar, label: 'イベント', active: false },
  { icon: Users, label: 'Organization', active: false },
];

const popularTags = [
  { name: 'Python', users: 152 },
  { name: 'AWS', users: 105 },
  { name: 'JavaScript', users: 95 },
  { name: 'React', users: 88 },
  { name: '初心者', users: 132 },
  { name: 'AI', users: 224 },
  { name: 'Claude', users: 68 },
];

export const LeftSidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block w-60 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto">
      <nav className="mb-8">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <Link
                  href="#"
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.active ? 'text-[#55c500]' : 'text-gray-400'}`} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-3">
          人気のタグ
        </h3>
        <ul className="space-y-1">
          {popularTags.map((tag, index) => (
            <li key={index}>
              <Link
                href="#"
                className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 text-center text-gray-400 text-xs">{index + 1}</span>
                  <span className="truncate">{tag.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
