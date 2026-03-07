'use client';

import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, MoreHorizontal, Mail, Phone } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useState, useMemo } from 'react';
import { Employee } from '@/types';

import { DataTable } from '@/components/ui/DataTable';
import { ColumnDef } from "@tanstack/react-table"

interface EmployeeListProps {
  initialData: Employee[];
}

export default function EmployeeList({ initialData }: EmployeeListProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [searchQuery, setSearchQuery] = useState('');
  const [employees] = useState<Employee[]>(initialData);

  const columns: ColumnDef<Employee>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "position",
      header: "Position",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "joinDate",
      header: "Join Date",
    },
  ]

  // const mappedData: Employee[] = employees.map((item: any) => ({
  //   name: item.name,
  //   position: item.position,
  //   email: item.email,
  //   phone: item.phone,
  //   status: item.status,
  //   joinDate: item.joinDate,
  // }))

  const filteredEmployees = useMemo(() => {
    return employees.filter(emp =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [employees, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight font-syne text-slate-900">Employees</h2>
          <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.2em]">Team Overview • {filteredEmployees.length} Members</p>
        </div>
        <div className="flex w-full sm:w-auto gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name, role or email..."
              className="pl-9 border-slate-200 focus:ring-slate-900 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="shrink-0 border-slate-200 hover:bg-slate-50 transition-colors">
            <Filter className="h-4 w-4 text-slate-600" />
          </Button>
          <Button className="shrink-0 bg-slate-900 text-white hover:bg-slate-800 shadow-sm transition-all hover:translate-y-[-1px] active:translate-y-[0px]">
            Add New
          </Button>
        </div>
      </div>

      {isDesktop ? (
        <div className="border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <DataTable columns={columns} data={employees} />
          {/* <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 border-b border-slate-200 uppercase text-[10px] font-mono text-slate-500 tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold italic">Employee</th>
                <th className="px-6 py-4 font-semibold italic">Role</th>
                <th className="px-6 py-4 font-semibold italic">Contact</th>
                <th className="px-6 py-4 font-semibold italic">Status</th>
                <th className="px-6 py-4 font-semibold italic">Joined</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar fallback={employee.avatar} className="h-10 w-10 bg-slate-100 text-slate-600 rounded-none border border-slate-200" />
                      <div>
                        <div className="font-bold text-slate-900 group-hover:text-black transition-colors">{employee.name}</div>
                        <div className="text-[11px] text-slate-500 font-medium">{employee.department}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 font-medium">{employee.position}</td>
                  <td className="px-6 py-4 text-slate-500">
                    <div className="flex flex-col gap-1 text-[11px]">
                      <div className="flex items-center gap-1.5"><Mail className="h-3 w-3 text-slate-400" /> {employee.email}</div>
                      <div className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-slate-400" /> {employee.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={employee.status === 'active' ? 'success' : 'outline'} className="capitalize border-none shadow-none text-[10px] px-2 py-0.5 font-bold tracking-tight">
                      {employee.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-mono text-[11px]">{employee.joinDate}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-none">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          {filteredEmployees.length === 0 && (
            <div className="p-12 text-center text-slate-400 font-mono text-sm">
              No employees found matching "{searchQuery}"
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredEmployees.map((employee) => (
            <Card key={employee.id} className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 p-4 border-b border-slate-100 bg-slate-50/50">
                  <Avatar fallback={employee.avatar} className="h-12 w-12 bg-white border border-slate-200 text-slate-900 rounded-none" />
                  <div>
                    <h3 className="font-bold text-slate-900 leading-none mb-1">{employee.name}</h3>
                    <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{employee.position}</p>
                  </div>
                  <div className="ml-auto">
                    <Badge variant={employee.status === 'active' ? 'success' : 'outline'} className="text-[10px] border-none shadow-none font-bold">
                      {employee.status}
                    </Badge>
                  </div>
                </div>
                <div className="p-4 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Mail className="h-3.5 w-3.5 text-slate-400" /> {employee.email}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Phone className="h-3.5 w-3.5 text-slate-400" /> {employee.phone}
                  </div>
                </div>
                <div className="p-3 bg-slate-50 border-t border-slate-100 flex gap-2">
                  <Button variant="outline" size="sm" className="w-full text-[11px] h-8 border-slate-200 font-semibold uppercase tracking-wider hover:bg-white">Details</Button>
                  <Button size="sm" className="w-full text-[11px] h-8 bg-slate-900 text-white font-semibold uppercase tracking-wider hover:bg-slate-800">Edit</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredEmployees.length === 0 && (
            <div className="col-span-full p-8 text-center text-slate-400 font-mono text-sm border-2 border-dashed border-slate-100">
              No employees found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
