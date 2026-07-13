import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Get started with behavioral insights.',
    features: [
      '5 most recent sessions visible',
      'Basic Thrashing Index score',
      'Non-intrusive ads (outside editor)',
      'No exports, no trend charts, no AI debrief',
    ],
    cta: 'Get started free',
    href: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$15',
    period: '/month',
    description: 'Unlock full analytics and remove ads.',
    features: [
      'Everything in Free',
      'No ads',
      'Full session history',
      'Full behavioral analytics (tape, pause, trends)',
      'Exportable progress dashboard',
      'AI-generated session debrief',
    ],
    cta: 'Start Pro',
    href: '/signup?plan=pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Coming Soon',
    period: '',
    description: 'For teams and organizations.',
    features: [
      'Everything in Pro',
      'Aggregate cohort dashboards (no individual surveillance)',
      'Admin console and team management',
      'Custom exercise library',
      'Onboarding acceleration reports',
    ],
    cta: 'Join the waitlist',
    href: 'mailto:enterprise@projectca.dev?subject=Enterprise%20Interest',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Simple, transparent pricing</h1>
        <p className="text-lg text-muted-foreground">
          Start free, upgrade when you need more. No hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`p-6 flex flex-col ${
              tier.highlighted
                ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/30'
                : ''
            }`}
          >
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{tier.name}</h2>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-extrabold">{tier.price}</span>
                <span className="ml-1 text-muted-foreground">{tier.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              asChild
              className={`mt-8 w-full ${
                tier.highlighted
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
              }`}
              variant={tier.highlighted ? 'default' : 'outline'}
            >
              <Link href={tier.href}>{tier.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>

      {/* Bootcamp & University Licensing */}
      <div className="max-w-3xl mx-auto mt-16 p-6 bg-muted/30 rounded-xl text-center border border-border/40">
        <h3 className="text-xl font-semibold mb-2">Bootcamp & University Licensing</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Special pricing for educational institutions. Bulk accounts, instructor dashboards, and curriculum integration.
        </p>
        <Button asChild variant="outline">
          <Link href="mailto:education@projectca.dev?subject=Education%20Interest">
            Express interest →
          </Link>
        </Button>
      </div>
    </div>
  );
}