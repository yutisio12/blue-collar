import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import * as sampleData from './data/sampleData';

// Configuration for Mocking
// You can set NEXT_PUBLIC_MOCK_API=true in .env to force use mock data
const SHOULD_MOCK = process.env.NEXT_PUBLIC_MOCK_API === 'true';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock Logic Mapping
const mockRoutes: Record<string, any> = {
  '/employees': sampleData.employees,
  '/attendance': sampleData.attendanceRecords,
  '/leave-requests': sampleData.leaveRequests,
  '/payroll': sampleData.payrollData,
  '/performance': sampleData.performanceData,
  '/attendance-trend': sampleData.attendanceTrendData,
  '/departments': sampleData.departmentData,
  '/recent-activities': sampleData.recentActivities,
  '/dashboard-summary': {
    totalEmployees: sampleData.employees.length,
    activeEmployees: sampleData.employees.filter(e => e.status === 'active').length,
    onLeaveEmployees: sampleData.employees.filter(e => e.status === 'leave').length,
    attendanceRate: Math.round(sampleData.employees.reduce((acc, curr) => acc + curr.attendance, 0) / sampleData.employees.length),
    attendanceTrend: sampleData.attendanceTrendData,
    departmentDistribution: sampleData.departmentData,
    recentActivities: sampleData.recentActivities,
  }
};


// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Force mock if configured
    if (SHOULD_MOCK) {
      console.log(`[MOCK] Requesting: ${config.url}`);
    }
    
    // Add Token or other logic here
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor with Fallback to Mock Data
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const { config, response } = error;
    
    // Check if we should fallback to mock data
    // Fallback if: 
    // 1. SHOULD_MOCK is true
    // 2. Response is 404 (Endpoint not found/not created yet)
    // 3. Network Error (Backend not running)
    const isMockable = SHOULD_MOCK || 
                      !response || 
                      response.status === 404 || 
                      response.status === 502 || 
                      response.status === 503;

    if (isMockable && config?.url) {
      // Clean the URL to match our mapping (remove baseURL and query params)
      let urlPath = config.url.replace(config.baseURL || '', '').split('?')[0];
      if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;

      if (mockRoutes[urlPath]) {
        console.warn(`[Axios Fallback] Endpoint "${urlPath}" not found or BE down. Returning mock data instead.`);
        
        // Return simulated successful response
        return {
          ...error,
          data: mockRoutes[urlPath],
          status: 200,
          statusText: 'OK',
          headers: {},
          config: config,
        };
      }
    }

    return Promise.reject(error);
  }
);

export default api;
