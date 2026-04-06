// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Sun
            className={`h-5 w-5 transition-all text-primary ${
              currentTheme === 'dark'
                ? 'rotate-0 scale-100'
                : 'rotate-90 scale-0'
            }`}
          />
          <Moon
            className={`absolute h-5 w-5 transition-all text-primary ${
              currentTheme === 'dark'
                ? 'rotate-90 scale-0'
                : 'rotate-0 scale-100'
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => setTheme('light')} className="gap-2">
          <Sun className="h-4 w-4 text-primary" />
          <span>Light</span>
          {currentTheme === 'light' && theme !== 'system' && (
            <span className="ml-auto font-bold text-accent">✓</span>
          )}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')} className="gap-2">
          <Moon className="h-4 w-4 text-primary" />
          <span>Dark</span>
          {currentTheme === 'dark' && theme !== 'system' && (
            <span className="ml-auto font-bold text-accent">✓</span>
          )}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')} className="gap-2">
          <Monitor className="h-4 w-4 text-primary" />
          <span>System</span>
          {theme === 'system' && <span className="ml-auto font-bold text-accent">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}