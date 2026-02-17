'use client'

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Home, Users, Calendar, FileText, DollarSign, Award, 
  Settings, LogOut, Target, Menu, ChevronRight, Bell, Search
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: Users, label: 'Employees', href: '/employees' },
    { icon: Calendar, label: 'Attendance', href: '/attendance' },
    { icon: FileText, label: 'Leave', href: '/leave' },
    { icon: DollarSign, label: 'Payroll', href: '/payroll' },
    { icon: Award, label: 'Performance', href: '/performance' }
  ];

  const getPageTitle = () => {
    const path = pathname || '/dashboard';
    const route = navigation.find(nav => nav.href === path);
    return route?.label || 'Dashboard';
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full ${sidebarOpen ? 'w-[260px]' : 'w-[76px]'} transition-all duration-300 z-50`}
        style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <div className={`p-5 ${sidebarOpen ? 'px-6' : 'px-4'}`}>
          {/* Logo */}
          <div className={`flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'} mb-8 mt-2`}>
            <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
              >
                <Target className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              {sidebarOpen && (
                <div>
                  <h1 className="text-[15px] font-bold tracking-tight text-white" style={{ fontFamily: '"Syne", sans-serif' }}>
                    Minimal HR
                  </h1>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Management</p>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5">
                <Menu className="w-4 h-4" strokeWidth={1.5} />
              </button>
            )}
          </div>

          {sidebarOpen && (
            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-semibold mb-3 px-3">Menu</p>
          )}

          {/* Navigation */}
          <nav className="space-y-1">
            {navigation.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => router.push(item.href)}
                  className={`relative fade-in w-full flex items-center ${sidebarOpen ? 'gap-3 px-3' : 'justify-center px-2'} py-2.5 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                  title={!sidebarOpen ? item.label : ''}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }} />
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <item.icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    {sidebarOpen && <span className="text-[13px] font-medium">{item.label}</span>}
                  </div>
                </button>
              );
            })}
          </nav>

          {sidebarOpen && (
            <div className="mt-8 pt-6 border-t border-white/5">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 transition-all rounded-xl mb-1">
                <Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span className="text-[13px] font-medium">Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all rounded-xl">
                <LogOut className="w-[18px] h-[18px]" strokeWidth={1.5} />
                <span className="text-[13px] font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>

        {!sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        )}

        {sidebarOpen && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="p-3.5 rounded-xl border border-white/5" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                >
                  <span className="text-[11px] font-bold text-white">AD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[13px] text-white truncate">Admin User</p>
                  <p className="text-[11px] text-slate-400 truncate">admin@company.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className={`${sidebarOpen ? 'ml-[260px]' : 'ml-[76px]'} min-h-screen transition-all duration-300`}>
        <header className="sticky top-0 z-40 border-b border-gray-100" style={{ background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
          <div className="px-8 py-5 flex items-center justify-between">
            <div>
              <p className="text-[13px] text-slate-400 font-medium mb-0.5">{getGreeting()}, Admin 👋</p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-800" style={{ fontFamily: '"Syne", sans-serif' }}>
                {getPageTitle()}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="input-field w-64 pl-10 pr-4 py-2.5 text-[13px]"
                />
              </div>
              <button className="relative p-2.5 rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all">
                <Bell className="w-[18px] h-[18px] text-slate-500" strokeWidth={1.5} />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-md transition-all"
                style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}
              >
                <span className="text-[11px] font-bold text-white">AD</span>
              </div>
            </div>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
