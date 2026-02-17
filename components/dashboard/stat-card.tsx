'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: string; 
  delay?: number;
}

export function StatCard({ 
  icon: Icon, 
  label, 
  value, 
  change, 
  trend = 'neutral',
  delay = 0 
}: StatCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: delay * 0.05 }}
    >
      <Card className="overflow-hidden border border-slate-200 shadow-sm transition-colors hover:border-slate-300">
        <CardContent className="p-6 relative">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {label}
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 font-syne">
                {value}
              </h3>
            </div>
            <div className="p-2 border border-slate-200 text-slate-900">
              <Icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
          </div>
          
          {change && (
            <div className="mt-4 flex items-center gap-2">
              <span className={cn(
                "flex items-center gap-1 px-1.5 py-0.5 text-xs font-bold border",
                trend === 'up' && "bg-slate-100 border-slate-300 text-slate-900",
                trend === 'down' && "bg-white border-slate-300 text-slate-500",
                trend === 'neutral' && "bg-white border-slate-200 text-slate-400"
              )}>
                {trend === 'up' && <ArrowUpRight className="h-3 w-3" />}
                {trend === 'down' && <ArrowDownRight className="h-3 w-3" />}
                {trend === 'neutral' && <Minus className="h-3 w-3" />}
                {change}
              </span>
              <span className="text-xs text-slate-400">vs last month</span>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
