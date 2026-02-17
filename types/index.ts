import { LucideIcon } from 'lucide-react';

export interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'leave';
  avatar: string;
  salary: string;
  attendance: number;
}

export interface AttendanceRecord {
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'present' | 'late' | 'sick';
  hours: string;
}

export interface LeaveRequest {
  id: number;
  employee: string;
  type: string;
  startDate: string;
  endDate: string;
  days: number;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
  submittedDate: string;
}

export interface PayrollEntry {
  id: number;
  employee: string;
  baseSalary: number;
  allowance: number;
  deduction: number;
  netSalary: number;
  status: 'paid' | 'pending';
  payDate: string;
}

export interface PerformanceEntry {
  employee: string;
  productivity: number;
  quality: number;
  teamwork: number;
  overall: number;
}

export interface StatCardData {
  icon: LucideIcon;
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  gradient: string;
}
