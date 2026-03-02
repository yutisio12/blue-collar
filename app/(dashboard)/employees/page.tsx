import { EmployeeService } from '@/lib/services/employee.service';
import EmployeeList from './employee-list';
import { Suspense } from 'react';

// This is a Server Component
// It provides top performance by fetching data on the server
export default async function EmployeesPage() {
  // Initial data fetch
  // Even if BE is not ready, our Axios instance will return mock data!
  const initialEmployees = await EmployeeService.getAll();

  return (
    <Suspense fallback={<div className="p-8 text-center font-mono text-slate-400 animate-pulse">Loading Employees Data...</div>}>
      <EmployeeList initialData={initialEmployees} />
    </Suspense>
  );
}
