'use client';

import * as React from 'react';

interface SidebarContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);
  const [isInitialized, setIsInitialized] = React.useState(false);

  // Initialize from localStorage
  React.useEffect(() => {
    const stored = localStorage.getItem('sidebar-open');
    if (stored !== null) {
      setOpen(JSON.parse(stored));
    }
    setIsInitialized(true);
  }, []);

  // Persist to localStorage
  React.useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('sidebar-open', JSON.stringify(open));
    }
  }, [open, isInitialized]);

  const toggle = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  // Avoid hydration mismatch by waiting for init, or just render (it might flicker)
  // For simplicity in this layout, we just render. The flicker is acceptable or we can hide sidebar initially.
  
  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
