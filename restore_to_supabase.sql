-- KG iQ Portfolio - Supabase Database Restoration Script
-- Generated from backup: db_cluster-12-05-2025@16-24-54.backup
-- 
-- Instructions:
-- 1. Go to your new Supabase project dashboard
-- 2. Navigate to SQL Editor
-- 3. Create a new query
-- 4. Paste this entire file
-- 5. Click "Run" to execute

-- =====================================================
-- STEP 1: CREATE TABLES
-- =====================================================

-- Drop existing tables if they exist (careful in production!)
DROP TABLE IF EXISTS public.experience_bullets CASCADE;
DROP TABLE IF EXISTS public.experience CASCADE;
DROP TABLE IF EXISTS public.projects CASCADE;
DROP TABLE IF EXISTS public.skills CASCADE;

-- Create experience table
CREATE TABLE public.experience (
    id text PRIMARY KEY,
    company text NOT NULL,
    logo_url text,
    title text NOT NULL,
    location text,
    start_date date,
    end_date date,
    "order" integer,
    tools text,
    skills text
);

-- Create experience_bullets table
CREATE TABLE public.experience_bullets (
    id integer PRIMARY KEY,
    experience_id text REFERENCES public.experience(id),
    content text,
    "order" integer
);

-- Create projects table  
CREATE TABLE public.projects (
    id integer PRIMARY KEY,
    title text,
    summary text,
    contributions text,
    techstack text,
    impact text,
    featured boolean DEFAULT false,
    "order" integer
);

-- Create skills table
CREATE TABLE public.skills (
    id integer PRIMARY KEY,
    name text,
    category text,
    "order" integer
);

-- =====================================================
-- STEP 2: INSERT DATA
-- =====================================================

-- Insert experience data
INSERT INTO public.experience (id, company, logo_url, title, location, start_date, end_date, "order", tools, skills) VALUES
('1', 'Trace3', '/src/assets/resume_logos/svg/trace3-logo.svg', 'Sr. Business Intelligence Developer / Data Analyst', 'Remote', '2024-01-01', NULL, 1, 'Power BI (Desktop and Service),Logic Apps,Azure SQL,Azure DevOps,Azure Test Plans,Tabular Editor,DAX Studio,Visual Studio,Fabric,Power Apps', 'T-SQL,DAX,Power Query,M,ETL,RLS,QA,Deployment Pipeline,Data Factory'),
('2', 'Tail Wind Informatics', '/src/assets/resume_logos/svg/tailwind-informatics-logo.svg', 'Sr. Business Intelligence Developer', 'Remote', '2023-03-01', '2024-01-01', 2, 'Power BI (Desktop and Service),Power Automate,Azure SQL,SSMS,Tabular Editor,DAX Studio,Visual Studio', 'T-SQL,DAX,Power Query,M,ETL,RLS,QA,Deployment Pipeline Administration'),
('3', 'QHR Health', '/src/assets/resume_logos/svg/qhr-health-logo.svg', 'Sr. Business Intelligence Developer', 'Remote', '2022-01-01', '2023-02-01', 3, 'Power BI (Desktop and Service),Power Automate,Azure SQL,SSMS,Lucid Chart,JIRA,Confluence,ALM Toolkit,Tabular Editor,DAX Studio,Visual Studio,MediTech,Vantage', 'T-SQL,DAX,Power Query,M,ETL,RLS,QA,Deployment Pipeline Administration'),
('4', 'Advantage DX, Inc.', '/src/assets/resume_logos/svg/adx-data-logo.svg', 'Business Intelligence Developer/Analyst - Consultant', 'Remote', '2021-03-01', '2022-02-01', 4, 'Power BI (Desktop and Service),Power Automate,MySQL,MySQL Workbench,CHARM EHR,Optum,DAX Studio', 'SQL,DAX,Power Query,M,ETL'),
('5', 'Marquis Labs', '/src/assets/resume_logos/svg/marquis-labs-logo.svg', 'Business Intelligence Developer/Analyst + Web Application Developer', 'Oklahoma City, OK', '2014-02-01', '2021-03-01', 5, 'Power BI (Desktop and Service),Power Automate,AWS,Caspio,SSMS,Salesforce,Labgen,Claim MD,Availity,DAX Studio', 'T-SQL,DAX,Power Query,M,HTML,CSS,Bootstrap'),
('6', 'KRG Holding', '/src/assets/resume_logos/svg/krg-holding-logo.svg', 'Field Operations, Technology, Business Intelligence Consultant', 'Remote', '2012-12-01', '2014-01-01', 6, 'MS Office,MS Access,CSG,Oracle Workforce Management,Siebel Analytics,Visio', 'Power Pivot,DAX,Power Query,M,Project Management'),
('7', 'OnProcess Technology', '/src/assets/resume_logos/svg/onprocess-logo.svg', 'Director - Solutions Engineering', 'Remote', '2010-04-01', '2012-12-01', 7, 'Excel,Visio,Powerpoint,MS Project,Salesforce', 'Business Development,Project Management,Process Engineering');

-- Wait for experience data to be inserted before bullets
-- Insert experience_bullets data (extracted from backup)