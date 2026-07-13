# Support Playbook – Theme & Styling

## How to add a new brand color

1. Open `app/globals.css`.
2. Inside the `:root` block, define a new CSS custom property:
   ```css
   --color-new: #HEX;

## How to update the pricing page when tiers change

1. Open `app/(marketing)/pricing/page.tsx`.
2. Edit the `tiers` array: update names, prices, descriptions, or features.
3. If you add/remove a tier, adjust the grid layout (`grid-cols-3` etc.).
4. Ensure CTAs point to the correct signup or checkout URLs.
5. Test locally and verify the pricing page displays correctly.

## How to disable ads globally in an emergency

1. Create a feature flag, e.g., `NEXT_PUBLIC_SHOW_ADS=false` in `.env`.
2. In `components/layout/AdBar.tsx`, add a condition early:
   ```tsx
   if (process.env.NEXT_PUBLIC_SHOW_ADS === 'false') return null;