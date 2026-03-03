import { DashboardService } from '@/lib/services/dashboard.service';
import DashboardClient from './dashboard-client';
import { Suspense } from 'react';

// Server Component for Top Performance
export default async function DashboardPage() {
  // Fetch summary from our Axios service
  const summary = await DashboardService.getSummary();

  return (
    <Suspense fallback={<div className="p-8 text-center font-mono text-slate-400 animate-pulse">Loading Analytics...</div>}>
      <DashboardClient summary={summary} />
    </Suspense>
  );
}
