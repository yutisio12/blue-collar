'use client';

import { attendanceRecords } from '@/lib/data/sampleData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/dashboard/stat-card';
import { UserCheck, Clock, AlertTriangle, Calendar } from 'lucide-react';

export default function AttendancePage() {
  // Calculate dynamic stats from records
  const presentCount = attendanceRecords.filter(r => r.status === 'present').length;
  const lateCount = attendanceRecords.filter(r => r.status === 'late').length;
  const absentCount = attendanceRecords.filter(r => r.status === 'sick' || r.status === 'absent').length;
  const workingDays = attendanceRecords.length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-syne">Attendance</h2>
        <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Daily logs</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={UserCheck}
          label="Present Today"
          value={presentCount.toString()}
          trend="up"
          change="+4%"
          delay={0}
        />
        <StatCard
          icon={Clock}
          label="Late Arrivals"
          value={lateCount.toString()}
          trend="down"
          change="-1%"
          delay={1}
        />
        <StatCard
          icon={AlertTriangle}
          label="Absent"
          value={absentCount.toString()}
          trend="neutral"
          change="0%"
          delay={2}
        />
        <StatCard
          icon={Calendar}
          label="Working Days"
          value={workingDays.toString()}
          trend="neutral"
          delay={3}
        />
      </div>

      <Card className="border shadow-none">
        <CardHeader>
          <CardTitle>Attendance History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-mono">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Check In</th>
                  <th className="px-6 py-4">Check Out</th>
                  <th className="px-6 py-4">Hours</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {attendanceRecords.map((record, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-slate-700">{record.date}</td>
                    <td className="px-6 py-4 text-slate-900 font-medium">{record.checkIn}</td>
                    <td className="px-6 py-4 text-slate-900 font-medium">{record.checkOut}</td>
                    <td className="px-6 py-4 text-slate-500">{record.hours}</td>
                    <td className="px-6 py-4">
                      <Badge variant={
                        record.status === 'present' ? 'success' : 
                        record.status === 'late' ? 'warning' : 'destructive'
                      }>
                        {record.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
