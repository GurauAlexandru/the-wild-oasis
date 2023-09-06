import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://fmavfezwmkyflhfltsec.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtYXZmZXp3bWt5ZmxoZmx0c2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM3MzAwODIsImV4cCI6MjAwOTMwNjA4Mn0.PlXvYDxrmQluG-Wbi99sb2B-HWda-MFkj_UsHfuuec0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
