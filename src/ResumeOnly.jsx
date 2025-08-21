// src/ResumeOnly.jsx - Standalone Resume Application
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import ExperienceCard from './components/resume/ExperienceCard';
import ResumeHero from './components/resume/ResumeHero';
import SkillsSection from './components/resume/SkillsSection';
import ProjectsSection from './components/resume/ProjectsSection';
import CertificationsSection from './components/resume/CertificationsSection';
import EducationSection from './components/resume/EducationSection';
import ContactSection from './components/resume/ContactSection';
import './index.css';

export default function ResumeOnly() {
  const [experiences, setExperiences] = useState([]);
  const [skillsByCategory, setSkillsByCategory] = useState({});
  const [projects, setProjects] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch experiences
        const { data: jobs, error: jobsError } = await supabase
          .from('experience')
          .select('*')
          .order('order', { ascending: true });

        if (jobsError) throw jobsError;

        // Fetch experience bullets
        const { data: bullets, error: bulletsError } = await supabase
          .from('experience_bullets')
          .select('*');

        if (bulletsError) throw bulletsError;

        // Fetch skills
        const { data: skillsData, error: skillsError } = await supabase
          .from('skills')
          .select('*')
          .order('category');

        // Process skills data
        if (!skillsError && skillsData) {
          const skillsByCategory = skillsData.reduce((acc, skill) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill.name);
            return acc;
          }, {});
          setSkillsByCategory(skillsByCategory);
        } else {
          // Fallback skills data
          setSkillsByCategory({
            'BI & Analytics': ['Power BI (Desktop)', 'Power BI (Service)', 'Power BI (Embedded)', 'DAX Studio', 'Tabular Editor', 'Fabric'],
            'Languages & Scripting': ['T-SQL', 'DAX', 'M (Power Query Language)', 'HTML/CSS'],
            'Cloud & Automation': ['Azure Data Factory', 'Azure Logic Apps', 'Power Automate', 'Azure SQL', 'Azure DevOps'],
            'Data Modeling': ['Semantic Models', 'Relational Modeling', 'Dimensional Modeling', 'RLS (Row-Level Security)', 'KPI Development', 'ETL Process'],
            'Workflow & Collaboration': ['Visual Studio', 'JIRA', 'Confluence', 'Lucidchart', 'Azure DevOps Boards'],
            'Supporting Tools': ['SSMS', 'MySQL Workbench', 'Salesforce', 'Siebel', 'Labgen']
          });
        }

        // Fetch projects
        const { data: projectsData, error: projectsError } = await supabase
          .from('projects')
          .select('*')
          .order('order');

        // Process projects data
        if (!projectsError && projectsData) {
          setProjects(projectsData);
        } else {
          // Fallback projects data
          setProjects([
            {
              id: 1,
              title: 'EDW Modernization & Power BI Migration',
              summary: 'Modernized legacy BI architecture during an enterprise-wide EDW rebuild.',
              contributions: 'Led migration of over 100 legacy reports to Power BI infrastructure.|Enforced best practices for semantic data modeling, Row-Level Security (RLS), and performance tuning.|Championed adoption of advanced tools like Tabular Editor and DAX Studio.|Established standardized deployment pipelines for BI assets.',
              techstack: 'Power BI,DAX,Tabular Editor,DAX Studio,Data Modeling,RLS,Deployment Pipelines',
              impact: 'Streamlined BI infrastructure and improved report performance and maintainability.',
              featured: true
            },
            {
              id: 2,
              title: 'Revenue Cycle Dashboard Suite',
              summary: 'Developed a comprehensive suite of Power BI dashboards for rural hospital departments.',
              contributions: 'Designed and deployed dashboards covering Revenue Cycle, Quality, and Supply Chain metrics.|Embedded reports securely into the Vantage application using Row-Level Security.|Collaborated with leadership on KPI definition and reporting requirements.|Implemented automated cyclical reporting processes.',
              techstack: 'Power BI,Power Automate,DAX,RLS,ETL,Vantage,MediTech,Azure SQL',
              impact: 'Reduced manual processing time by 40% and enhanced cross-departmental data visibility.',
              featured: true
            }
          ]);
        }

        // Process certifications
        setCertifications([
          {
            id: 1,
            title: 'Microsoft Certified: Power BI Data Analyst Associate',
            number: '45Y1DA-B2C16C',
            badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
            verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/KenGraham-7404/1DFEFA0DA6C7420B?sharingId=E4D8B57667DD7D08'
          }
        ]);
        
        // Process education
        setEducation([
          {
            id: 1,
            institution: 'University of Kentucky',
            location: 'Lexington, KY',
            focus: 'Business Administration',
            dates: '1988 - 1991'
          },
          {
            id: 2,
            institution: 'Central Michigan University',
            location: 'Mount Pleasant, MI',
            focus: 'Finance/Business Administration',
            dates: '1994 - 1996'
          }
        ]);

        // Process experience data
        const bulletsByJob = bullets.reduce((acc, bullet) => {
          if (!acc[bullet.experience_id]) acc[bullet.experience_id] = [];
          acc[bullet.experience_id].push(bullet.content);
          return acc;
        }, {});

        const jobsWithBullets = jobs.map(job => {
          let toolsArray = [];
          let skillsArray = [];
          
          if (job.tools) {
            toolsArray = job.tools.split(',').map(tool => tool.trim());
          }
          
          if (job.skills) {
            skillsArray = job.skills.split(',').map(skill => skill.trim());
          }
          
          return {
            ...job,
            bullets: bulletsByJob[job.id] || [],
            tools: toolsArray,
            skills: skillsArray
          };
        });

        setExperiences(jobsWithBullets);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.95)), url('/images/Hero_BG.jpg')" }}>

      {/* Resume Hero Section */}
      <ResumeHero />
      
      {/* Experience Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Professional Experience</h2>
          
          {loading ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-300 mb-2">Loading experience data...</p>
              <div className="animate-pulse w-24 h-24 bg-kg-blue/50 rounded-full mx-auto"></div>
            </div>
          ) : error ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-red-500/50">
              <h3 className="text-red-400 font-semibold mb-2">Error Loading Data</h3>
              <p className="text-white/80">{error}</p>
              <p className="mt-4 text-sm">Please check your connection and try again.</p>
            </div>
          ) : experiences.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <p className="text-center text-kg-ash2">No experience entries found.</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              {experiences.map((job) => (
                <ExperienceCard
                  key={job.id}
                  logo_url={job.logo_url} 
                  company={job.company}
                  title={job.title}
                  location={job.location}
                  start_date={job.start_date}
                  end_date={job.end_date}
                  bullets={job.bullets}
                  tools={job.tools}
                  skills={job.skills}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection skillsByCategory={skillsByCategory} loading={loading} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} loading={loading} />

      {/* Certifications Section */}
      <CertificationsSection certifications={certifications} />

      {/* Education Section */}
      <EducationSection education={education} />
      
      {/* Contact Section */}
      <ContactSection />

      {/* Simple Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-kg-ash2 text-sm">
            © 2025 Kenneth Graham. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}