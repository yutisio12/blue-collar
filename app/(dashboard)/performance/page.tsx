'use client';

import { performanceData } from '@/lib/data/sampleData';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Crown, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PerformancePage() {
  const sortedPerformers = [...performanceData].sort((a, b) => b.overall - a.overall);
  const topPerformer = sortedPerformers[0];

  return (
    <div className="space-y-6">
       <div>
        <h2 className="text-2xl font-bold tracking-tight font-syne">Performance</h2>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">KPI Tracking</p>
      </div>

      {/* Top Performer Highlight - Monochrome */}
      <div className="relative overflow-hidden rounded-xl bg-slate-900 p-8 text-white shadow-sm border border-slate-900">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
             <div className="absolute -top-6 -left-6 z-0">
               <Crown className="h-12 w-12 text-slate-700/50 rotate-[-15deg]" fill="currentColor" />
             </div>
             <Avatar fallback={topPerformer.employee} className="h-24 w-24 border-4 border-slate-800 bg-white text-slate-900 text-2xl" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-medium text-slate-400 uppercase tracking-widest font-mono text-xs">Employee of the Month</h3>
            <h2 className="text-4xl font-bold font-syne mt-2">{topPerformer.employee}</h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
               <Star className="h-5 w-5 text-white" fill="currentColor" />
               <span className="font-bold text-xl">{topPerformer.overall}% Overall Score</span>
            </div>
          </div>
          <div className="md:ml-auto flex gap-4 text-center">
             <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-4 min-w-[100px] border border-slate-700">
                <div className="text-3xl font-bold">{topPerformer.productivity}%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono mt-1">Productivity</div>
             </div>
             <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-4 min-w-[100px] border border-slate-700">
                <div className="text-3xl font-bold">{topPerformer.quality}%</div>
                <div className="text-[10px] text-slate-400 uppercase font-mono mt-1">Quality</div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedPerformers.slice(1).map((perf, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:border-slate-400 transition-colors shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar fallback={perf.employee} className="h-10 w-10 bg-slate-100 text-slate-600 border border-slate-200" />
                    <div>
                       <CardTitle className="text-base">{perf.employee}</CardTitle>
                       <p className="text-xs text-muted-foreground flex items-center gap-1">
                         <TrendingUp className="h-3 w-3" /> Trending up
                       </p>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-slate-900 font-mono">{perf.overall}%</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-500 font-mono uppercase">
                    <span>Productivity</span>
                    <span>{perf.productivity}%</span>
                  </div>
                  {/* Using standard Tailwind bg classes for progress if component supports className, or we assume default is styled in component. 
                      If component accepts `className="bg-slate-900"`, good. If `indicatorColor` is custom, I'll use that. 
                      Assuming I should use custom prop based on previous file, but updated to monochrome colors.
                  */}
                  <Progress value={perf.productivity} className="h-1.5 [&>div]:bg-slate-900" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-500 font-mono uppercase">
                    <span>Quality</span>
                    <span>{perf.quality}%</span>
                  </div>
                  <Progress value={perf.quality} className="h-1.5 [&>div]:bg-slate-600" />
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-500 font-mono uppercase">
                    <span>Teamwork</span>
                    <span>{perf.teamwork}%</span>
                  </div>
                  <Progress value={perf.teamwork} className="h-1.5 [&>div]:bg-slate-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
