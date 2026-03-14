import api from '@/lib/axios';
import { Employee } from '@/types';

export const EmployeeService = {
  getAll: async (): Promise<Employee[]> => {
    const response = await api.get('/employees');
    return response.data;
  },
  
  getById: async (id: number): Promise<Employee> => {
    const response = await api.get(`/employees/${id}`);
    return response.data;
  },
  
  create: async (data: Partial<Employee>): Promise<Employee> => {
    const response = await api.post('/employees', data);
    return response.data;
  },
  
  update: async (id: number, data: Partial<Employee>): Promise<Employee> => {
    const response = await api.put(`/employees/${id}`, data);
    return response.data;
  },
  
  delete: async (id: number): Promise<void> => {
    await api.delete(`/employees/${id}`);
  }
};
