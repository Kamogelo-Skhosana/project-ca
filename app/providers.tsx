'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"    // Light mode by default
      enableSystem={false}
      storageKey="project-ca-theme"
    >
      {children}
    </ThemeProvider>
  );
}