export const employees = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    position: 'Senior Developer', 
    department: 'Engineering',
    email: 'sarah.j@company.com',
    phone: '+1 234-567-8901',
    joinDate: 'Jan 15, 2020',
    status: 'active',
    avatar: 'SJ',
    salary: '$95,000',
    attendance: 96
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    position: 'Marketing Manager', 
    department: 'Marketing',
    email: 'michael.c@company.com',
    phone: '+1 234-567-8902',
    joinDate: 'Mar 20, 2019',
    status: 'active',
    avatar: 'MC',
    salary: '$105,000',
    attendance: 98
  },
  { 
    id: 3, 
    name: 'Emily Davis', 
    position: 'UI/UX Designer', 
    department: 'Design',
    email: 'emily.d@company.com',
    phone: '+1 234-567-8903',
    joinDate: 'Jul 10, 2021',
    status: 'active',
    avatar: 'ED',
    salary: '$85,000',
    attendance: 94
  },
  { 
    id: 4, 
    name: 'James Wilson', 
    position: 'HR Specialist', 
    department: 'HR',
    email: 'james.w@company.com',
    phone: '+1 234-567-8904',
    joinDate: 'Sep 05, 2020',
    status: 'active',
    avatar: 'JW',
    salary: '$75,000',
    attendance: 99
  },
  { 
    id: 5, 
    name: 'Lisa Anderson', 
    position: 'Sales Executive', 
    department: 'Sales',
    email: 'lisa.a@company.com',
    phone: '+1 234-567-8905',
    joinDate: 'Feb 12, 2022',
    status: 'active',
    avatar: 'LA',
    salary: '$70,000',
    attendance: 92
  },
  { 
    id: 6, 
    name: 'Robert Taylor', 
    position: 'Backend Developer', 
    department: 'Engineering',
    email: 'robert.t@company.com',
    phone: '+1 234-567-8906',
    joinDate: 'Nov 25, 2021',
    status: 'leave',
    avatar: 'RT',
    salary: '$90,000',
    attendance: 89
  }
];

export const attendanceRecords = [
  { date: 'Feb 17, 2026', checkIn: '08:45', checkOut: '17:30', status: 'present', hours: '8h 45m' },
  { date: 'Feb 16, 2026', checkIn: '08:52', checkOut: '17:25', status: 'present', hours: '8h 33m' },
  { date: 'Feb 15, 2026', checkIn: '-', checkOut: '-', status: 'sick', hours: '-' },
  { date: 'Feb 14, 2026', checkIn: '08:40', checkOut: '17:35', status: 'present', hours: '8h 55m' },
  { date: 'Feb 13, 2026', checkIn: '09:15', checkOut: '17:20', status: 'late', hours: '8h 5m' }
];

export const leaveRequests = [
  { 
    id: 1, 
    employee: 'Sarah Johnson', 
    type: 'Annual Leave', 
    startDate: 'Feb 24, 2026',
    endDate: 'Feb 28, 2026',
    days: 5, 
    status: 'pending',
    reason: 'Family vacation',
    submittedDate: 'Feb 10, 2026'
  },
  { 
    id: 2, 
    employee: 'Robert Taylor', 
    type: 'Sick Leave', 
    startDate: 'Feb 15, 2026',
    endDate: 'Feb 16, 2026',
    days: 2, 
    status: 'approved',
    reason: 'High fever',
    submittedDate: 'Feb 14, 2026'
  },
  { 
    id: 3, 
    employee: 'Emily Davis', 
    type: 'Emergency Leave', 
    startDate: 'Feb 20, 2026',
    endDate: 'Feb 20, 2026',
    days: 1, 
    status: 'rejected',
    reason: 'Urgent family matter',
    submittedDate: 'Feb 19, 2026'
  }
];

export const payrollData = [
  {
    id: 1,
    employee: 'Sarah Johnson',
    baseSalary: 95000,
    allowance: 5000,
    deduction: 2500,
    netSalary: 97500,
    status: 'paid',
    payDate: 'Feb 01, 2026'
  },
  {
    id: 2,
    employee: 'Michael Chen',
    baseSalary: 105000,
    allowance: 7000,
    deduction: 3000,
    netSalary: 109000,
    status: 'paid',
    payDate: 'Feb 01, 2026'
  },
  {
    id: 3,
    employee: 'Emily Davis',
    baseSalary: 85000,
    allowance: 4000,
    deduction: 2000,
    netSalary: 87000,
    status: 'pending',
    payDate: '-'
  }
];

export const performanceData = [
  { employee: 'Sarah Johnson', productivity: 92, quality: 88, teamwork: 95, overall: 91.7 },
  { employee: 'Michael Chen', productivity: 95, quality: 93, teamwork: 90, overall: 92.7 },
  { employee: 'Emily Davis', productivity: 88, quality: 91, teamwork: 87, overall: 88.7 },
  { employee: 'James Wilson', productivity: 90, quality: 92, teamwork: 94, overall: 92.0 }
];

export const attendanceTrendData = [
  { date: 'Mon', present: 230, leave: 10, absent: 8 },
  { date: 'Tue', present: 235, leave: 8, absent: 5 },
  { date: 'Wed', present: 228, leave: 12, absent: 8 },
  { date: 'Thu', present: 240, leave: 5, absent: 3 },
  { date: 'Fri', present: 234, leave: 9, absent: 5 }
];

export const departmentData = [
  { name: 'Engineering', value: 45, color: '#9CA3AF' },
  { name: 'Marketing', value: 25, color: '#B8A5C7' },
  { name: 'Sales', value: 20, color: '#C4B5A0' },
  { name: 'HR', value: 10, color: '#A8B8C7' }
];

export const recentActivities = [
  { user: 'Sarah Johnson', action: 'checked in this morning', time: '10 minutes ago' },
  { user: 'Michael Chen', action: 'submitted leave request', time: '1 hour ago' },
  { user: 'Emily Davis', action: 'completed training module', time: '2 hours ago' },
  { user: 'James Wilson', action: 'updated profile information', time: '3 hours ago' }
];
