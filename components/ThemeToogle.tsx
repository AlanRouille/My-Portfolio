'use client';
import { cn } from '@/lib/utils';
import { Menu } from '@headlessui/react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { buttonVariants } from './ui/button';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Menu as="div" className="relative inline-block text-left mx-2">
      <Menu.Button
        className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-foreground" />
        ) : (
          <Sun size={12} className="text-foreground" />
        )}
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-card dark:bg-card border border-border dark:border-border divide-y divide-border dark:divide-border rounded-md shadow-lg outline-none">
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme('system')}
                className={`${
                  active ? 'bg-muted dark:bg-muted' : ''
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-geist`}
              >
                <Monitor size={12} className="mr-2" />
                Automatic
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme('light')}
                className={`${
                  active ? 'bg-muted dark:bg-muted' : ''
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-geist`}
              >
                <Sun size={12} className="mr-2 text-primary" />
                Light
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setTheme('dark')}
                className={`${
                  active ? 'bg-muted dark:bg-muted' : ''
                } group flex rounded-md items-center w-full px-2 py-2 text-sm font-geist`}
              >
                <Moon size={12} className="mr-2 text-primary" />
                Dark
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
