import api from '@/lib/axios';
import { DashboardSummary } from '@/types';

export const DashboardService = {
  getSummary: async (): Promise<DashboardSummary> => {
    // We can fetch multiple endpoints or a single summary endpoint
    // Our Axios mock logic handles '/dashboard-summary' if we add it,
    // or we can aggregate here. Let's assume a summary endpoint.
    const response = await api.get('/dashboard-summary');
    return response.data;
  }
};
