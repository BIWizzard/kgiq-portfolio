-- Verify Data Import - Run this in Supabase SQL Editor

-- Check record counts
SELECT 'Experience' as table_name, COUNT(*) as count FROM public.experience
UNION ALL
SELECT 'Experience Bullets', COUNT(*) FROM public.experience_bullets
UNION ALL
SELECT 'Projects', COUNT(*) FROM public.projects
UNION ALL
SELECT 'Skills', COUNT(*) FROM public.skills;

-- View sample data from each table
SELECT '--- EXPERIENCE SAMPLE ---' as info;
SELECT company, title, start_date FROM public.experience ORDER BY "order" LIMIT 3;

SELECT '--- BULLETS SAMPLE ---' as info;
SELECT e.company, eb.content 
FROM public.experience_bullets eb
JOIN public.experience e ON e.id = eb.experience_id
LIMIT 3;

SELECT '--- PROJECTS SAMPLE ---' as info;
SELECT title, featured FROM public.projects;

SELECT '--- SKILLS BY CATEGORY ---' as info;
SELECT category, COUNT(*) as skill_count 
FROM public.skills 
GROUP BY category 
ORDER BY category;