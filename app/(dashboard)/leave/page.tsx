'use client';

import { leaveRequests } from '@/lib/data/sampleData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LeavePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight font-syne">Leave Requests</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Time Off Management</p>
        </div>
        <Button className="bg-slate-900 text-white shadow-sm">
          New Request
        </Button>
      </div>

      <div className="grid gap-4">
        {leaveRequests.map((request, i) => (
          <motion.div
            key={request.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="overflow-hidden border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Left: Date Box */}
                  <div className="md:w-32 bg-slate-50 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <span className="text-[10px] font-bold uppercase text-slate-400 mb-1 font-mono">From</span>
                    <span className="text-lg font-bold text-slate-900">{request.startDate}</span>
                    <div className="h-px w-8 bg-slate-200 my-2" />
                    <span className="text-[10px] font-bold uppercase text-slate-400 mb-1 font-mono">To</span>
                    <span className="text-lg font-bold text-slate-900">{request.endDate}</span>
                  </div>

                  {/* Middle: Info */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <Avatar fallback={request.employee} className="h-12 w-12 border border-slate-200 bg-white" />
                        <div>
                          <h3 className="font-bold text-lg text-slate-900">{request.employee}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="bg-slate-100 text-slate-600 border border-slate-200">
                              {request.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                              <Clock className="h-3 w-3" /> {request.days} Days
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={
                        request.status === 'approved' ? 'success' : 
                        request.status === 'rejected' ? 'destructive' : 'warning'
                      } className="capitalize hidden md:inline-flex">
                        {request.status}
                      </Badge>
                    </div>
                    
                    <div className="bg-white p-4 rounded-xl text-sm text-slate-600 border border-slate-100 italic">
                      "{request.reason}"
                    </div>

                    <div className="mt-4 flex items-center justify-between md:hidden">
                       <Badge variant={
                        request.status === 'approved' ? 'success' : 
                        request.status === 'rejected' ? 'destructive' : 'warning'
                      } className="capitalize">
                        {request.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  {request.status === 'pending' && (
                    <div className="p-6 flex md:flex-col gap-3 justify-center border-t md:border-t-0 md:border-l border-slate-200 bg-slate-50/50">
                      <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-white w-full shadow-sm">
                        <CheckCircle className="h-4 w-4 mr-2" /> Approve
                      </Button>
                      <Button size="sm" variant="outline" className="w-full border-slate-300 hover:bg-white text-slate-700">
                        <XCircle className="h-4 w-4 mr-2" /> Reject
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
