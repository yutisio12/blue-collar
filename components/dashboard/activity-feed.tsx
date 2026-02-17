'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

interface Activity {
  user: string;
  action: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="border-none shadow-lg shadow-slate-200/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold font-syne">Recent Activity</CardTitle>
        <Button variant="ghost" size="sm" className="text-xs text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-slate-50"
            >
              <Avatar 
                fallback={activity.user} 
                className="h-9 w-9 ring-2 ring-white shadow-sm"
              />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-bold text-slate-700">{activity.user}</span>
                  <span className="font-normal text-muted-foreground"> {activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-300" />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
