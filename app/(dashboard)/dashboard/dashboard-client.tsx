'use client';

import { StatCard } from '@/components/dashboard/stat-card';
import { ActivityFeed } from '@/components/dashboard/activity-feed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, Clock, AlertCircle } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { DashboardSummary } from '@/types';

interface DashboardClientProps {
  summary: DashboardSummary;
}

export default function DashboardClient({ summary }: DashboardClientProps) {
  // Monochrome colors
  const COLORS = ['#0f172a', '#475569', '#94a3b8', '#cbd5e1'];

  return (
    <div className="space-y-6 pb-8">
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Users}
          label="Total Employees"
          value={summary.totalEmployees.toString()}
          change="+12%"
          trend="up"
          delay={0}
        />
        <StatCard
          icon={UserCheck}
          label="On Time Today"
          value={summary.activeEmployees.toString()}
          change="+4%"
          trend="up"
          delay={1}
        />
        <StatCard
          icon={Clock}
          label="On Leave"
          value={summary.onLeaveEmployees.toString()}
          change="-2%"
          trend="down"
          delay={2}
        />
        <StatCard
          icon={AlertCircle}
          label="Avg Attendance"
          value={`${summary.attendanceRate}%`}
          change="+1%"
          trend="up"
          delay={3}
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border shadow-none">
          <CardHeader>
            <CardTitle>Attendance Trends</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={summary.attendanceTrend}>
                <defs>
                  <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f172a" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    borderRadius: '0px',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'none'
                  }}
                  itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                />
                <Area
                  type="monotone"
                  dataKey="present"
                  stroke="#0f172a"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorPresent)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border shadow-none">
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={summary.departmentDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {summary.departmentDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', boxShadow: 'none' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-3">
              {summary.departmentDistribution.map((dept, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3"
                      style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    />
                    <span className="text-sm text-slate-600 font-mono">{dept.name}</span>
                  </div>
                  <span className="font-bold text-slate-900">{dept.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <ActivityFeed activities={summary.recentActivities} />
    </div>
  );
}
