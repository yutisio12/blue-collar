import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Minimal HR - Modern HRMS Platform',
  description: 'A modern, responsive Human Resource Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground selection:bg-indigo-100 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
