'use client';

import { payrollData } from '@/lib/data/sampleData';
import { formatCurrency } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatCard } from '@/components/dashboard/stat-card';
import { DollarSign, CheckCircle, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PayrollPage() {
  const totalPayroll = payrollData.reduce((acc, curr) => acc + curr.netSalary, 0);
  const paidAmount = payrollData.filter(p => p.status === 'paid').reduce((acc, curr) => acc + curr.netSalary, 0);
  const pendingAmount = payrollData.filter(p => p.status === 'pending').reduce((acc, curr) => acc + curr.netSalary, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight font-syne">Payroll</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Salary & Benefits</p>
        </div>
        <Button className="bg-slate-900 text-white shadow-sm">
          Process Payroll
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={DollarSign} label="Total Payroll" value={formatCurrency(totalPayroll)} trend="neutral" delay={0} />
        <StatCard icon={CheckCircle} label="Paid Amount" value={formatCurrency(paidAmount)} trend="up" change="85%" delay={1} />
        <StatCard icon={Clock} label="Pending" value={formatCurrency(pendingAmount)} trend="down" change="15%" delay={2} />
        <StatCard icon={Users} label="Employees" value={payrollData.length.toString()} trend="neutral" delay={3} />
      </div>

      <Card className="border shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle>Payroll History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-mono">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Base Salary</th>
                  <th className="px-6 py-4">Allowance</th>
                  <th className="px-6 py-4">Deduction</th>
                  <th className="px-6 py-4">Net Salary</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payrollData.map((record) => (
                  <tr key={record.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">{record.employee}</td>
                    <td className="px-6 py-4 text-slate-600 font-mono">{formatCurrency(record.baseSalary)}</td>
                    <td className="px-6 py-4 text-slate-600 font-mono">+{formatCurrency(record.allowance)}</td>
                    <td className="px-6 py-4 text-slate-600 font-mono">-{formatCurrency(record.deduction)}</td>
                    <td className="px-6 py-4 font-bold text-slate-900 font-mono bg-slate-50/50">
                      {formatCurrency(record.netSalary)}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={record.status === 'paid' ? 'success' : 'warning'}>
                        {record.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="outline" size="sm" className="h-8 text-xs">
                        Slip
                      </Button>
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
