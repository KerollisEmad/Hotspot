'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeMode } from '@/types/menu';

const STORAGE_KEY = 'hotspot_theme';

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('standard');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (saved === 'standard' || saved === 'inverted') {
      setThemeState(saved);
    }
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const next = prev === 'standard' ? 'inverted' : 'standard';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore localStorage write failures
      }
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
