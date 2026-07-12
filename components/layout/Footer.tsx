import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Project CA. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-foreground transition">Privacy</Link>
          <Link href="/terms" className="hover:text-foreground transition">Terms</Link>
          <Link href="/support" className="hover:text-foreground transition">Support</Link>
        </div>
      </div>
    </footer>
  );
}