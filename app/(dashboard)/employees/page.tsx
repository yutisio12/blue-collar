'use client';

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, MoreHorizontal, Mail, Phone, MapPin } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useState } from 'react';

export default function EmployeesPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      email: '',
      phone: '123-456-7890',
      status: 'active',
      joinDate: '2022-01-01',
      avatar: 'JD'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Software Engineer',
      email: '',
      phone: '123-456-7890',
      status: 'active',
      joinDate: '2022-01-01',
      avatar: 'JS'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'Software Engineer',
      email: '',
      phone: '123-456-7890',
      status: 'active',
      joinDate: '2022-01-01',
      avatar: 'BJ'
    },
    {
      id: 4,
      name: 'Alice Williams',
      position: 'Software Engineer',
      email: '',
      phone: '123-456-7890',
      status: 'active',
      joinDate: '2022-01-01',
      avatar: 'AW'
    },
    {
      id: 5,
      name: 'Charlie Brown',
      position: 'Software Engineer',
      email: '',
      phone: '123-456-7890',
      status: 'active',
      joinDate: '2022-01-01',
      avatar: 'CB'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight font-syne">Employees</h2>
          <p className="text-muted-foreground font-mono text-xs uppercase tracking-wider">Team Overview</p>
        </div>
        <div className="flex w-full sm:w-auto gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search employee..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon" className="shrink-0 border-slate-200">
            <Filter className="h-4 w-4" />
          </Button>
          <Button className="shrink-0 bg-slate-900 text-white">
            Add New
          </Button>
        </div>
      </div>

      {isDesktop ? (
        <div className="border border-slate-200 bg-white">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 uppercase text-xs font-mono text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Employee</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Contact</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Joined</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar fallback={employee.avatar} className="bg-slate-100 text-slate-600 rounded-none border border-slate-200" />
                      <div>
                        <div className="font-bold text-slate-900">{employee.name}</div>
                        <div className="text-xs text-slate-500">{employee.department}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{employee.position}</td>
                  <td className="px-6 py-4 text-slate-500">
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center gap-1"><Mail className="h-3 w-3" /> {employee.email}</div>
                      <div className="flex items-center gap-1"><Phone className="h-3 w-3" /> {employee.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={employee.status === 'active' ? 'success' : 'warning'}>
                      {employee.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-xs">{employee.joinDate}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {employees.map((employee) => (
            <Card key={employee.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 p-4 border-b border-slate-100 bg-slate-50/50">
                  <Avatar fallback={employee.avatar} className="h-12 w-12 bg-white border border-slate-200 text-slate-900 rounded-none" />
                  <div>
                    <h3 className="font-bold text-slate-900">{employee.name}</h3>
                    <p className="text-xs text-slate-500">{employee.position}</p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant={employee.status === 'active' ? 'success' : 'warning'}>
                      {employee.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="h-4 w-4 text-slate-400" /> {employee.email}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="h-4 w-4 text-slate-400" /> {employee.phone}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-mono text-xs mt-2">
                    Joined: {employee.joinDate}
                  </div>
                </div>
                <div className="p-3 border-t border-slate-100 flex gap-2">
                  <Button variant="outline" size="sm" className="w-full">Message</Button>
                  <Button size="sm" className="w-full bg-slate-900 text-white">Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
