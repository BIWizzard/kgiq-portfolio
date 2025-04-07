import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function TestSupabase() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    async function checkConnection() {
      const { data, error } = await supabase.from('projects').select('*').limit(1);
      if (error) setStatus(`Error: ${error.message}`);
      else setStatus(`✅ Connected: ${data.length} project(s) found`);
    }
    checkConnection();
  }, []);

  return <div>{status}</div>;
}
