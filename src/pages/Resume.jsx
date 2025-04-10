// src/pages/Resume.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceCard from '../components/resume/ExperienceCard';


export default function Resume() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExperienceData() {
      const { data: jobs, error: jobsError } = await supabase
        .from('experience')
        .select('*')
        .order('order', { ascending: true });

      const { data: bullets, error: bulletsError } = await supabase
        .from('experience_bullets')
        .select('*');

      if (jobsError || bulletsError) {
        console.error('Error fetching data:', jobsError || bulletsError);
        return;
      }

      const bulletsByJob = bullets.reduce((acc, bullet) => {
        if (!acc[bullet.experience_id]) acc[bullet.experience_id] = [];
        acc[bullet.experience_id].push(bullet.content);
        return acc;
      }, {});

      const jobsWithBullets = jobs.map(job => ({
        ...job,
        bullets: bulletsByJob[job.id] || [],
      }));

      setExperiences(jobsWithBullets);
      setLoading(false);
    }

    fetchExperienceData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-kg-blue to-kg-gray text-white px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-sunglow">Professional Experience</h1>
          {loading ? (
            <p className="text-center text-gray-300">Loading...</p>
          ) : (
            experiences.map((job) => (
              <ExperienceCard
                key={job.id}
                logo={job.logo_url}
                company={job.company}
                title={job.title}
                location={job.location}
                dates={`${job.start_date} → ${job.end_date || 'Present'}`}
                bullets={job.bullets}
              />
            ))
            
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
