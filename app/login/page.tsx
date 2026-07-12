import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="w-full max-w-md p-8 bg-card border border-border/40 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg bg-background" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg bg-background" />
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Sign in</Button>
        </form>
        <p className="mt-4 text-sm text-center text-muted-foreground">
          Don’t have an account? <Link href="/signup" className="text-emerald-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}