'use client';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabaseClient';

export function useUserTier() {
  const [tier, setTier] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTier = async () => {
      try {
        const supabase = getSupabaseClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('tier')
            .eq('id', user.id)
            .single();
          setTier(profile?.tier || 'free');
        } else {
          setTier(null);
        }
      } catch (error) {
        console.error('Error fetching user tier:', error);
        setTier(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTier();
  }, []);

  return { tier, isLoading };
}