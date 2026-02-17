# 🚀 WorkFlow - HRMS Platform

Modern Human Resource Management System built with Next.js 14, React, and Recharts.

![HRMS Dashboard](https://via.placeholder.com/1200x600/10b981/ffffff?text=WorkFlow+HRMS+Dashboard)

## ✨ Features

- 📊 **Dashboard** - Real-time statistics and overview
- 👥 **Employee Management** - Comprehensive employee database
- 📅 **Attendance Tracking** - Check-in/out monitoring and history
- 🏖️ **Leave Management** - Leave request approval system
- 💰 **Payroll System** - Salary and allowance management
- 🏆 **Performance Evaluation** - Employee performance tracking

## 🎨 Design Highlights

- Modern gradient color scheme (Emerald → Cyan → Purple → Pink)
- Glass morphism effects with backdrop blur
- Smooth animations and micro-interactions
- Responsive design
- Dark mode ready

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Charts:** Recharts
- **Icons:** Lucide React
- **Styling:** Custom CSS with CSS-in-JS
- **Language:** TypeScript

## 📦 Installation

### Metode 1: Docker (RECOMMENDED) 🐳

**Prerequisites:** Docker Desktop terinstall

1. **Extract project**
```bash
tar -xzf hrms-nextjs-app.tar.gz
cd hrms-nextjs-app
```

2. **Start aplikasi (pilih salah satu)**

**Windows:**
```bash
start.bat
```

**Mac/Linux:**
```bash
./start.sh
```

**Manual:**
```bash
docker-compose up -d
```

3. **Akses aplikasi**
```
http://localhost:3000
```

**Selesai!** 🎉 Lihat `DOCKER_GUIDE.md` untuk detail lengkap.

---

### Metode 2: Traditional (npm install)

**Prerequisites:** Node.js 18+

1. **Extract project**
```bash
cd hrms-nextjs-app
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hrms-nextjs-app/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   └── CompleteHRMS.tsx  # Main HRMS component
├── public/               # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎯 Available Pages

The application includes 6 main sections:

1. **Dashboard** (`/`)
   - Overview statistics
   - Attendance trends
   - Department distribution
   - Recent activity feed

2. **Employees** (Karyawan)
   - Employee list with search & filter
   - Add/Edit/Delete employees
   - Employee details view
   - Export/Import functionality

3. **Attendance** (Kehadiran)
   - Daily attendance tracking
   - Check-in/Check-out records
   - Attendance statistics
   - Monthly reports

4. **Leave Management** (Cuti & Izin)
   - Leave request submission
   - Approval workflow
   - Leave balance tracking
   - Request history

5. **Payroll**
   - Salary management
   - Allowance & deduction tracking
   - Payment processing
   - Payroll reports

6. **Performance** (Performa)
   - Performance evaluation
   - Employee leaderboard
   - Productivity metrics
   - Quality & teamwork scores

## 🔧 Customization

### Colors

Edit the gradient colors in `components/CompleteHRMS.tsx`:

```tsx
// Navigation gradients
{ gradient: 'from-emerald-500 to-teal-600' }    // Dashboard
{ gradient: 'from-cyan-500 to-blue-600' }       // Employees
{ gradient: 'from-violet-500 to-purple-600' }   // Leave
// ... etc
```

### Fonts

Fonts are imported in `app/layout.tsx`:
- **Inter Tight** - Body text
- **Outfit** - Headings

### Data Integration

Replace mock data with API calls:

```tsx
// Example: Fetch employees
const fetchEmployees = async () => {
  const response = await fetch('/api/employees')
  const data = await response.json()
  return data
}
```

## 📊 Charts & Visualizations

The app uses **Recharts** for data visualization:
- Area charts for trends
- Pie charts for distributions
- Bar charts for comparisons
- Line charts for performance tracking

## 🚀 Production Build

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file for environment variables:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_APP_NAME=WorkFlow HRMS
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Charts by [Recharts](https://recharts.org/)
- Built with [Next.js](https://nextjs.org/)

## 📧 Support

For support, email admin@workflow.id or open an issue on GitHub.

---

Made with ❤️ by WorkFlow Team
