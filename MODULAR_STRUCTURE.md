# 📁 Modular Next.js HRMS Structure

## Project Structure

```
hrms-nextjs-app/
├── app/                          # Next.js 14 App Router
│   ├── dashboard/               
│   │   └── page.tsx              # Dashboard module
│   ├── employees/               
│   │   └── page.tsx              # Employees module
│   ├── attendance/              
│   │   └── page.tsx              # Attendance module
│   ├── leave/                   
│   │   └── page.tsx              # Leave management module
│   ├── payroll/                 
│   │   └── page.tsx              # Payroll module
│   ├── performance/             
│   │   └── page.tsx              # Performance module
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home redirect
│   └── globals.css               # Global styles
│
├── components/
│   ├── layouts/
│   │   └── MainLayout.tsx        # Main app layout (sidebar + header)
│   └── ui/
│       └── StatCard.tsx          # Reusable stat card component
│
├── lib/
│   ├── data/
│   │   └── sampleData.ts         # Sample data for all modules
│   └── utils/
│       └── helpers.ts            # Utility functions
│
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## ✨ Features

### Modular Architecture
- **Separated Modules**: Each feature has its own folder
- **Reusable Components**: Shared UI components in `/components`
- **Centralized Data**: All sample data in `/lib/data`
- **Utility Functions**: Helper functions in `/lib/utils`

### Module Organization

1. **Dashboard** (`/dashboard`)
   - Overview statistics
   - Charts and visualizations
   - Recent activities

2. **Employees** (`/employees`)
   - Employee list with search
   - Add/Edit/Delete operations
   - Employee details

3. **Attendance** (`/attendance`)
   - Attendance tracking
   - History records
   - Statistics

4. **Leave** (`/leave`)
   - Leave requests
   - Approval workflow
   - Leave statistics

5. **Payroll** (`/payroll`)
   - Salary management
   - Payroll processing
   - Payment history

6. **Performance** (`/performance`)
   - Performance reviews
   - Leaderboard
   - Score tracking

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📂 How to Add New Modules

### 1. Create Module Folder

```bash
mkdir app/new-module
```

### 2. Create Page Component

```typescript
// app/new-module/page.tsx
'use client'

export default function NewModulePage() {
  return (
    <div>
      <h2>New Module</h2>
      {/* Your content */}
    </div>
  )
}
```

### 3. Add Navigation

Update `components/layouts/MainLayout.tsx`:

```typescript
const navigation = [
  // ... existing items
  { icon: YourIcon, label: 'New Module', href: '/new-module' }
];
```

### 4. Create Sample Data (Optional)

Add to `lib/data/sampleData.ts`:

```typescript
export const newModuleData = [
  // Your data
];
```

## 🎨 Styling

- **Global Styles**: `app/globals.css`
- **Inline Styles**: Component-level styling
- **Tailwind-like**: Utility classes

## 📊 Data Management

All sample data is centralized in `/lib/data/sampleData.ts`.

To connect to real API:
1. Create API routes in `/app/api`
2. Replace sample data imports with API calls
3. Use React hooks for data fetching

Example:
```typescript
// Before
import { employees } from '@/lib/data/sampleData';

// After
const { data: employees } = useSWR('/api/employees');
```

## 🔧 Utility Functions

Located in `/lib/utils/helpers.ts`:
- `formatCurrency(amount)` - Format numbers as currency
- `formatDate(date)` - Format dates
- `cn(classes)` - Conditional class names

## 📱 Responsive Design

- Sidebar collapses on smaller screens
- Tables are scrollable
- Mobile-friendly layout

## 🎯 Best Practices

1. **Keep modules independent** - Each page should work standalone
2. **Use shared components** - Create reusable UI in `/components/ui`
3. **Centralize data** - Keep sample data in one place
4. **Type safety** - Use TypeScript for all components
5. **Clean imports** - Use path aliases (`@/`)

## 🐳 Docker Support

Same Docker setup as before:

```bash
docker-compose up -d
```

Or use quick start scripts:
```bash
./start.sh   # Mac/Linux
start.bat    # Windows
```

## 📄 License

MIT License
