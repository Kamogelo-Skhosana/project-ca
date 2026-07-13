import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

// Define prop types for helper components
interface CodePanelProps {
  title: string;
  badge: string;
  code: string;
  className?: string;
}

interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

interface MetricCardProps {
  title: string;
  description: string;
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Same answer. <br className="sm:hidden" />
          <span className="text-emerald-500">Completely different process.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Understand how developers actually code—not just what they ship.
          Track thrashing, pauses, and keystroke patterns to coach teams
          with behavioral data.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <Link href="/signup">Start for free</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#how-it-works">Learn more</Link>
          </Button>
        </div>
      </section>

      {/* Side‑by‑side code panel */}
      <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <CodePanel
          title="Developer A"
          badge="Clean & Fast"
          code={`function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}`}
          className="border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20"
        />
        <CodePanel
          title="Developer B"
          badge="Thrashing"
          code={`function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  // Wait, maybe use reduce?
  // total = arr.reduce((a, b) => a + b, 0);
  // No, loop is fine...
  return total;
}`}
          className="border-red-300/50 bg-red-50/50 dark:bg-red-950/20"
        />
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard number="1" title="Practice" description="Developers solve coding challenges in our sandbox editor." />
          <StepCard number="2" title="Track" description="We capture every keystroke, pause, and revision in real time." />
          <StepCard number="3" title="Improve" description="Get actionable insights to reduce thrashing and boost flow." />
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Core behavioral signals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <MetricCard
            title="Thrashing Index"
            description="Measures how often you rewrite code. High thrashing = low confidence."
          />
          <MetricCard
            title="Pause Detection"
            description="Identifies hesitation points where developers get stuck."
          />
          <MetricCard
            title="Keystroke Tape"
            description="A replayable tape of every edit—see the full journey, not just the final answer."
          />
        </div>
      </section>

      {/* Pricing preview */}
      <section className="max-w-4xl mx-auto text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Free to start</h2>
        <p className="text-muted-foreground">
          Get started with our Free tier. Upgrade to Pro for full analytics and no ads.
        </p>
        <Button asChild variant="outline" className="border-emerald-500 text-emerald-600">
          <Link href="/pricing">See pricing →</Link>
        </Button>
      </section>

      {/* Final CTA */}
      <section className="text-center py-12">
        <Card className="max-w-2xl mx-auto p-8 bg-muted/30 border-border/50">
          <h3 className="text-2xl font-bold mb-2">Ready to see how your team codes?</h3>
          <p className="text-muted-foreground mb-6">Start your free trial today.</p>
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <Link href="/signup">Start for free</Link>
          </Button>
        </Card>
      </section>
    </div>
  );
}

// Helper components with proper typing
function CodePanel({ title, badge, code, className }: CodePanelProps) {
  return (
    <div className={`rounded-xl border p-4 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">{title}</span>
        <Badge variant="outline">{badge}</Badge>
      </div>
      <pre className="text-sm bg-black/5 dark:bg-white/10 p-3 rounded-lg overflow-x-auto font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <Card className="p-6 text-center">
      <div className="text-4xl font-bold text-emerald-500 mb-2">{number}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}

function MetricCard({ title, description }: MetricCardProps) {
  return (
    <Card className="p-6 text-left">
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}