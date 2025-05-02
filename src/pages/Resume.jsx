// src/pages/Resume.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard from '../components/resume/ExperienceCard';
import ResumeDebugger from '../components/resume/ResumeDebugger';

export default function Resume() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchExperienceData() {
      try {
        console.log('Fetching experience data...');
        
        // Fetch all job experiences ordered by their order field
        const { data: jobs, error: jobsError } = await supabase
          .from('experience')
          .select('*')
          .order('order', { ascending: true });

        if (jobsError) throw jobsError;
        
        // Log what we received to help debug
        console.log('Jobs fetched:', jobs?.length || 0);
        
        // Fetch all bullet points
        const { data: bullets, error: bulletsError } = await supabase
          .from('experience_bullets')
          .select('*');

        if (bulletsError) throw bulletsError;
        
        // Log what we received to help debug
        console.log('Bullets fetched:', bullets?.length || 0);

        // Organize bullets by experience_id
        const bulletsByJob = bullets.reduce((acc, bullet) => {
          if (!acc[bullet.experience_id]) acc[bullet.experience_id] = [];
          acc[bullet.experience_id].push(bullet.content);
          return acc;
        }, {});

        // Combine jobs with their bullets
        const jobsWithBullets = jobs.map(job => ({
          ...job,
          bullets: bulletsByJob[job.id] || [],
        }));

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
      <main className="min-h-screen px-6 py-10 text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Hero_BG.jpg')" }}>

        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-kg-yellow">Professional Experience</h1>
          
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
            <>
              {/* Add the debugger component - set isVisible to false in production */}
              <ResumeDebugger experiences={experiences} isVisible={false} />
              
              <div className="space-y-6">
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
                    // Removed order prop since it's no longer used in ExperienceCard
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}