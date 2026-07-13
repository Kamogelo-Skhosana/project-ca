'use client';

import Link from 'next/link';
import { APP_NAME } from '@/lib/config';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from "@/components/ui/Button";

export default function MarketingNav() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          {APP_NAME}
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
            Sign in
          </Link>
          <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <Link href="/signup">Start free</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}