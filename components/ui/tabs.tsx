'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}
const TabsContext = createContext<TabsContextType | null>(null);

export function Tabs({ defaultValue, children, className = '' }: { defaultValue: string; children: ReactNode; className?: string }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, onValueChange: setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, children, className = '' }: { value: string; children: ReactNode; className?: string }) {
  const ctx = useContext(TabsContext);
  const isActive = ctx?.value === value;
  return (
    <button
      onClick={() => ctx?.onValueChange(value)}
      className={className}
      data-state={isActive ? 'active' : 'inactive'}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: { value: string; children: ReactNode }) {
  const ctx = useContext(TabsContext);
  if (ctx?.value !== value) return null;
  return <>{children}</>;
}
