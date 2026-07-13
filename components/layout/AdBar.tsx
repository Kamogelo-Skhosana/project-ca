'use client';

import { usePathname } from 'next/navigation';
import { useUserTier } from '@/hooks/useUserTier';

export default function AdBar() {
  const pathname = usePathname();
  const { tier, isLoading } = useUserTier();

  // Rule 1: Only show on dashboard, challenges list, and report pages
  const allowedPaths = ['/dashboard', '/challenges', '/report'];
  const isAllowedPath = allowedPaths.some((p) => pathname?.startsWith(p));

  // Rule 2: Never show on the active challenge editor (/challenges/[id])
  const isChallengeEditor = /^\/challenges\/[^/]+$/.test(pathname || '');

  // Rule 3: Only show for Tier 1 (free) users
  const isFree = tier === 'free';

  // Also hide on mobile – handled by CSS (see className)
  if (isLoading || !isAllowedPath || isChallengeEditor || !isFree) {
    return null;
  }

  return (
    <div className="hidden md:block mt-auto pt-4 border-t border-border/40">
      <div className="text-xs text-muted-foreground mb-1">Advertisement</div>
      {/* Carbon Ads container */}
      <div
        id="carbonads"
        className="[&_#carbonads]:max-w-full [&_#carbonads]:overflow-hidden"
      >
        <script
          async
          type="text/javascript"
          src="//cdn.carbonads.com/carbon.js?serve=YOUR_CARBON_SLOT&placement=projectca"
          id="_carbonads_js"
        />
      </div>
    </div>
  );
}