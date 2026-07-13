import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function useUserTier() {
  const [tier, setTier] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTier = async () => {
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
      setIsLoading(false);
    };
    fetchTier();
  }, []);

  return { tier, isLoading };
}