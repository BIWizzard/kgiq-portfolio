// src/pages/Resume.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard from '../components/resume/ExperienceCard';

export default function Resume() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExperienceData() {
      try {
        // Fetch experience data
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

        // Process data
        const bulletsByJob = bullets.reduce((acc, bullet) => {
          if (!acc[bullet.experience_id]) acc[bullet.experience_id] = [];
          acc[bullet.experience_id].push(bullet.content);
          return acc;
        }, {});

        const jobsWithBullets = jobs.map(job => {
          // Process tools and skills as arrays
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
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchExperienceData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "linear-gradient(rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.95)), url('/images/Hero_BG.jpg')" }}>
        
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-white">Professional Experience</h1>
            
            {loading && <p className="text-center text-gray-300">Loading experience data...</p>}
            {error && <p className="text-center text-red-500">Error loading data: {error}</p>}
            
            <div className="max-w-4xl mx-auto">
              {experiences.map((job) => (
                <ExperienceCard
                  key={job.id}
                  company={job.company}
                  title={job.title}
                  location={job.location}
                  startDate={job.start_date}
                  endDate={job.end_date}
                  bullets={job.bullets}
                  logo={job.logo_url}
                  tools={job.tools}
                  skills={job.skills}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}