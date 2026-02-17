'use client';

import * as React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Avatar } from '@/components/ui/avatar';
import { getGreeting } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import { useState } from 'react'; // Added useState

export function Header() {
  const [showNotifications, setShowNotifications] = useState(false); // Added state
  const pathname = usePathname();
  const pageTitle = pathname?.split('/').pop() || 'Dashboard';
  const formattedTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <header className="sticky top-0 z-20 flex h-20 w-full items-center gap-4 bg-white px-6 border-b border-slate-200 transition-all">
      <MobileNav />
      
      <div className="flex flex-1 flex-col justify-center gap-1">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 font-syne hidden md:block uppercase">{formattedTitle}</h1>
        <p className="text-xs text-slate-500 hidden md:block font-mono">
          {getGreeting()} // ADMIN_ACCESS_GRANTED
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block w-72">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              placeholder="SEARCH..." 
              className="h-10 w-full border border-slate-200 bg-white pl-10 pr-4 text-sm focus:ring-0 focus:border-slate-900 placeholder:text-slate-300 font-mono"
            />
          </div>
        </div>
        
        <div className="relative">
          <Button 
            variant="outline" 
            size="icon" 
            className="relative border-slate-200 shadow-sm hover:bg-slate-50"
            onClick={() => setShowNotifications(!showNotifications)} // Toggle state
          >
            <Bell className="h-5 w-5 text-slate-900" />
            <span className="absolute right-2 top-2 h-2 w-2 bg-slate-900 rounded-full" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 border border-slate-200 bg-white shadow-lg z-50 rounded-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
               <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                 <h4 className="font-bold text-sm">Notifications</h4>
                 <span className="text-[10px] bg-slate-100 px-2 py-1 rounded-full text-slate-600">3 New</span>
               </div>
               <div className="max-h-[300px] overflow-y-auto">
                 {[1, 2, 3].map((_, i) => (
                   <div key={i} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer flex gap-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-slate-900 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-slate-900">New leave request from Sarah</p>
                        <p className="text-[10px] text-slate-400 mt-1">2 hours ago</p>
                      </div>
                   </div>
                 ))}
               </div>
               <div className="p-3 text-center border-t border-slate-100 bg-slate-50">
                 <button className="text-xs font-bold text-slate-600 hover:text-slate-900">Mark all as read</button>
               </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 ml-2">
          <Avatar fallback="AD" className="h-9 w-9 bg-slate-100 text-slate-900 border border-slate-200 rounded-none" />
          <div className="hidden lg:block">
            <p className="text-xs font-bold text-slate-900">Admin User</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">Manager</p>
          </div>
        </div>
      </div>
    </header>
  );
}
