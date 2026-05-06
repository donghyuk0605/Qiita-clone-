import React from 'react';
import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f5f6f6] text-[#333333] font-sans">
      <Header />
      <div className="max-w-[1200px] mx-auto px-4 py-6 flex gap-6 items-start justify-center">
        <LeftSidebar />
        <main className="flex-1 min-w-0 max-w-[700px] w-full">
          {children}
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};
