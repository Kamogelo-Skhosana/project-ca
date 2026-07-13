import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  appInfo: {
    name: 'Project CA',
    version: '0.1.0',
  },
});

export const PRICE_IDS = {
  pro_monthly: process.env.STRIPE_PRO_MONTHLY_PRICE_ID!,
  pro_yearly: process.env.STRIPE_PRO_YEARLY_PRICE_ID!,
};