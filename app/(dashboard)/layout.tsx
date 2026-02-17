'use client';

import * as React from 'react';
import { SidebarProvider } from '@/hooks/use-sidebar';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-slate-50/50">
        <Sidebar />
        <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
          <Header />
          <main className="flex-1 p-6 md:p-8 overflow-y-auto">
            <div className="mx-auto max-w-7xl animate-in fade-in-0 duration-500">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
