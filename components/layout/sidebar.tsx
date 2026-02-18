'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Award,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Target,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/use-sidebar';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Employees', href: '/employees' },
  { icon: Calendar, label: 'Attendance', href: '/attendance' },
  { icon: FileText, label: 'Leave', href: '/leave' },
  { icon: DollarSign, label: 'Payroll', href: '/payroll' },
  { icon: Award, label: 'Performance', href: '/performance' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { open, toggle } = useSidebar();

  return (
    <motion.aside
      initial={false}
      animate={{ width: open ? 260 : 84 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'sticky top-0 z-30 h-screen border-r border-slate-200 bg-white text-slate-900 hidden md:flex flex-col shrink-0 overflow-hidden'
      )}
    >
      {/* Brand */}
      <div className={cn('flex h-20 items-center px-6 border-b border-slate-100', open ? 'justify-between' : 'justify-center')}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-slate-900 bg-slate-900 text-white">
            <Target className="h-6 w-6" />
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <h1 className="font-syne text-lg font-bold text-slate-900 leading-none">Minimal HR</h1>
              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">Management</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        {open && (
          <p className="mb-4 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Menu
          </p>
        )}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start gap-4 px-3 py-6 transition-none border border-transparent rounded-none',
                    isActive
                      ? 'bg-slate-100 border-l-4 border-l-slate-900 font-bold text-slate-900'
                      : 'hover:bg-slate-50 hover:text-slate-900 text-slate-500',
                    !open && 'justify-center px-0 border-l-0'
                  )}
                >
                  <item.icon
                    className={cn(
                      'h-5 w-5 shrink-0 transition-colors',
                      isActive ? 'text-slate-900' : 'text-slate-400'
                    )}
                  />
                  {open && <span className="text-sm">{item.label}</span>}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / User */}
      <div className="border-t border-slate-200 bg-slate-50 p-4">
        {open ? (
          <div className="flex items-center gap-3 p-2 border border-slate-200 bg-white shadow-sm">
            <Avatar fallback="AD" className="h-9 w-9 bg-slate-200 text-slate-600 rounded-none" />
            <div className="overflow-hidden">
              <p className="truncate text-sm font-bold text-slate-900">Admin User</p>
              <p className="truncate text-xs text-slate-500">admin@company.com</p>
            </div>
            <Button size="icon" variant="ghost" className="ml-auto h-8 w-8 text-slate-400 hover:text-slate-900">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div className="flex justify-center">
            <Avatar fallback="AD" className="h-9 w-9 bg-slate-900 text-white rounded-none" />
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="absolute flex h-6 w-6 items-center justify-center border border-slate-300 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-900 shadow-none z-50 transition-all"
        style={{
          left: open ? '240px' : '60px',
          top: '50%',
          zIndex: 999
        }}
      >
        {open ? <ChevronLeft className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
      </button>
    </motion.aside>
  );
}
