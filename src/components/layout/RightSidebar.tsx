import React from 'react';
import Link from 'next/link';

export const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden xl:block w-[300px] shrink-0 space-y-4">
      {/* DigiKey Ad */}
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <Link href="#">
          <img src="/images/digikey_ad.png" alt="DigiKey Advertisement" className="w-full" />
        </Link>
      </div>

      {/* Stock List Feed Notification */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          📋 ストックリストフィードの表示が変わりました
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-2">
          最近で注目を集めているストックリストが表示されるようになりました。
        </p>
        <Link href="#" className="text-xs text-[#55c500] hover:underline">
          View detail
        </Link>
      </div>

      {/* Being held posting campaigns */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-gray-900">Being held posting campaigns</h3>
          <Link href="#" className="text-xs text-[#55c500] hover:underline">All</Link>
        </div>
        <div className="space-y-3">
          {/* Campaign 1 */}
          <Link href="#" className="block">
            <img src="/images/campaign_beginner.png" alt="新人プログラマ応援" className="w-full rounded" />
            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
              <span>~2026-05-10</span>
              <span>🔥 661</span>
              <span>👥 +654</span>
            </div>
          </Link>
          {/* Campaign 2 */}
          <Link href="#" className="block">
            <img src="/images/campaign_ruby.png" alt="みんなでRubyの知見を共有しよう" className="w-full rounded" />
            <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
              <span>~2026-05-10</span>
              <span>🔥 37</span>
              <span>👥 +30</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Being held and before held events */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Being held and before held events</h3>
        <Link href="#" className="block">
          <img src="/images/conference_sidebar.png" alt="Qiita Conference 2026" className="w-full rounded" />
          <p className="text-xs text-gray-500 mt-1">2026-05-27 ~ 2026-05-29</p>
        </Link>
      </div>
    </aside>
  );
};
