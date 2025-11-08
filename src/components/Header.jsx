import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'Safety', href: '#safety' },
    { label: 'Community', href: '#community' },
    { label: 'Parents', href: '#parents' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/50 dark:bg-neutral-900/50 border-b border-white/20 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-white text-lg">AIBI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#signin" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">Sign in</a>
            <a href="#get-started" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-xl active:scale-[0.98] transition">
              Get Started
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 fade-in">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a href="#signin" className="rounded-lg px-3 py-2 text-sm font-medium bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white text-center">Sign in</a>
                <a href="#get-started" className="rounded-lg px-3 py-2 text-sm font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-center">Get Started</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
