-- Fix logo paths in Supabase to match deployed file structure
-- Run this in Supabase SQL Editor

UPDATE public.experience 
SET logo_url = REPLACE(logo_url, '/src/assets/resume_logos/', '/resume_logos/')
WHERE logo_url LIKE '/src/assets/%';

-- Verify the update
SELECT id, company, logo_url FROM public.experience ORDER BY "order";