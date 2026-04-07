'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="relative flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:bg-muted/80 transition-colors" disabled>
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-full text-primary hover:bg-muted/80 hover:text-primary transition-all duration-300"
      aria-label="Toggle Theme"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${
          resolvedTheme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${
          resolvedTheme === 'dark' ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
}