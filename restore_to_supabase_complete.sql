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
    category text,
    name text,
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

-- Insert experience_bullets data
INSERT INTO public.experience_bullets (experience_id, content, id) VALUES
('1', 'Acted as lead BI consultant for Fortune 100 clients across construction, insurance, and retail sectors.', 20),
('1', 'Delivered scalable Power BI solutions, redesigned semantic models, and automated Invoice Aging and other key workflows using Azure Data Factory and Logic Apps.', 21),
('1', 'Led UI/UX revamp for reporting interfaces and facilitated stakeholder workshops to align KPIs with strategic goals.', 22),
('2', 'Led the modernization of legacy BI architecture during enterprise-wide EDW rebuild.', 23),
('2', 'Migrated over 100 reports to Power BI, enforced best practices for data modeling, RLS, and performance tuning.', 24),
('2', 'Championed use of Tabular Editor, DAX Studio, and deployment pipelines.', 25),
('3', 'Designed and deployed a suite of Power BI dashboards for Revenue Cycle, Quality, and Supply Chain departments across rural hospitals.', 26),
('3', 'Embedded reports into Vantage application and optimized for cross-role access with row-level security.', 27),
('3', 'Collaborated with leadership to define KPIs, automated cyclical reporting, and reduced manual processing time by 40%.', 28),
('4', 'Designed and deployed tailored Power BI dashboards for 5 medical practices and 20+ healthcare providers.', 29),
('4', 'Conducted deep-dive data analysis to identify operational bottlenecks and revenue leakage.', 30),
('4', 'Collaborated with Billing Managers to define KPIs, automate forecasting, and enable proactive revenue management.', 31),
('5', 'Created and maintained Power BI dashboards for internal and external stakeholders.', 32),
('5', 'Led automation of COVID-19/Infectious Disease reporting for 38 state agencies.', 33),
('5', 'Reduced manual workload through automated scheduling and validation processes.', 34),
('5', 'Spearheaded development of Marquis Logic™, an enterprise web platform integrating internal systems.', 35),
('5', 'Built modular architecture with role-based access and Power BI Embedded analytics.', 36),
('5', 'Deployed COVID-19 variant tracking dashboards for public health departments.', 37),
('6', 'Delivered BI and operations consulting for Field Service organizations.', 38),
('6', 'Built Power BI dashboards for real-time KPI tracking and decision-making.', 39),
('6', 'Deployed reporting leveraging Power Pivot from Excel and Access databases.', 40),
('7', 'Managed portfolio of solutions engineering projects for enterprise clients.', 41),
('7', 'Collaborated with Fortune 500 businesses including AT&T, Verizon, and Cox Automotive.', 42),
('7', 'Led vendor relations with OEMs, driving strategic partnerships and process improvements.', 43);

-- Insert projects data  
INSERT INTO public.projects (id, title, summary, contributions, techstack, impact, featured, "order") VALUES
(1, 'EDW Modernization & Power BI Migration', 'Modernized legacy BI architecture during an enterprise-wide EDW rebuild (at Tail Wind Informatics).', 'Led migration of over 100 legacy reports to Power BI infrastructure.|Enforced best practices for semantic data modeling, Row-Level Security (RLS), and performance tuning.|Championed adoption of advanced tools like Tabular Editor and DAX Studio.|Established standardized deployment pipelines for BI assets.', 'Power BI,DAX,Tabular Editor,DAX Studio,Data Modeling,RLS,Deployment Pipelines', 'Streamlined BI infrastructure and improved report performance and maintainability.', true, 1),
(2, 'Revenue Cycle Dashboard Suite', 'Developed a comprehensive suite of Power BI dashboards for rural hospital departments (at QHR Health).', 'Designed and deployed dashboards covering Revenue Cycle, Quality, and Supply Chain metrics.|Embedded reports securely into the Vantage application using Row-Level Security.|Collaborated with leadership on KPI definition and reporting requirements.|Implemented automated cyclical reporting processes.', 'Power BI,Power Automate,DAX,RLS,ETL,Vantage,MediTech,Azure SQL', 'Reduced manual processing time by 40% and enhanced cross-departmental data visibility.', true, 2),
(3, 'Key Workflow Automation', 'Automated critical business workflows for Fortune 100 clients using Azure cloud services (at Trace3).', 'Designed and implemented automated solutions for Invoice Aging and other key processes.|Utilized Azure Data Factory for data ingestion/transformation and Logic Apps for orchestration.|Redesigned semantic models to support automated workflows.|Led UI/UX improvements for associated reporting interfaces.|Facilitated stakeholder workshops to align KPIs with strategic automation goals.', 'Azure Data Factory,Azure Logic Apps,Azure SQL,Power BI,Data Modeling,UI/UX', 'Significantly reduced manual effort and improved efficiency for client financial processes.', true, 3),
(4, 'Marquis Logic™ Platform & Analytics', 'Spearheaded development of a custom enterprise web platform with integrated analytics (at Marquis Labs).', 'Developed a modular web application integrating Order Management, Inventory, RCM, HR, and Procurement systems.|Implemented role-based access control and workflow automation features.|Powered on-demand analytics within the platform using Power BI Embedded.|Designed and deployed a related COVID-19 variant tracking dashboard for public health use.', 'Power BI Embedded,HTML,CSS,Bootstrap,Caspio,T-SQL,AWS,SSMS,Power Automate', 'Provided integrated operational platform and embedded real-time analytics, improving decision-making.', true, 4);

-- Insert skills data
INSERT INTO public.skills (id, category, name, "order") VALUES
(1, 'BI & Analytics', 'Power BI (Desktop)', 1),
(2, 'BI & Analytics', 'Power BI (Service)', 2),
(3, 'BI & Analytics', 'Power BI (Embedded)', 3),
(4, 'BI & Analytics', 'DAX Studio', 4),
(5, 'BI & Analytics', 'Tabular Editor', 5),
(6, 'BI & Analytics', 'Fabric', 6),
(7, 'Languages & Scripting', 'T-SQL', 1),
(8, 'Languages & Scripting', 'DAX', 2),
(9, 'Languages & Scripting', 'M (Power Query Language)', 3),
(10, 'Languages & Scripting', 'HTML/CSS', 4),
(11, 'Cloud & Automation', 'Azure Data Factory', 1),
(12, 'Cloud & Automation', 'Azure Logic Apps', 2),
(13, 'Cloud & Automation', 'Power Automate', 3),
(14, 'Cloud & Automation', 'Azure SQL', 4),
(15, 'Cloud & Automation', 'Azure DevOps', 5),
(16, 'Data Modeling', 'Semantic Models', 1),
(17, 'Data Modeling', 'Relational Modeling', 2),
(18, 'Data Modeling', 'Dimensional Modeling', 3),
(19, 'Data Modeling', 'RLS (Row-Level Security)', 4),
(20, 'Data Modeling', 'KPI Development', 5),
(21, 'Data Modeling', 'ETL Process', 6),
(22, 'Workflow & Collaboration', 'Visual Studio', 1),
(23, 'Workflow & Collaboration', 'JIRA', 2),
(24, 'Workflow & Collaboration', 'Confluence', 3),
(25, 'Workflow & Collaboration', 'Lucidchart', 4),
(26, 'Workflow & Collaboration', 'Azure DevOps Boards', 5),
(27, 'Supporting Tools', 'SSMS', 1),
(28, 'Supporting Tools', 'MySQL Workbench', 2),
(29, 'Supporting Tools', 'Salesforce', 3),
(30, 'Supporting Tools', 'Siebel', 4),
(31, 'Supporting Tools', 'Labgen', 5);

-- =====================================================
-- STEP 3: VERIFY DATA
-- =====================================================

-- Check record counts
SELECT 'Experience' as table_name, COUNT(*) as count FROM public.experience
UNION ALL
SELECT 'Experience Bullets', COUNT(*) FROM public.experience_bullets
UNION ALL
SELECT 'Projects', COUNT(*) FROM public.projects
UNION ALL
SELECT 'Skills', COUNT(*) FROM public.skills;

-- Success message
SELECT 'Database restoration complete!' as status;
