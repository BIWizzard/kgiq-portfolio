// src/pages/Resume.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-10 text-white bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Hero_BG.jpg')" }}>

        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-sunglow">Professional Experience</h1>
          {loading ? (
            <p className="text-center text-gray-300">Loading...</p>
          ) : (
            experiences.map((job) => (
              <div
                key={job.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    {job.logo_url && (
                      <div className="relative h-28 w-32 flex-shrink-0">
                        <img
                          src={job.logo_url}
                          alt={`${job.company} logo`}
                          className="h-28 w-auto max-w-[180px] object-contain drop-shadow-md relative z-10 pl-1"
                        />
                      </div>
                    )}
                    <div>
                      <h2 className="text-xl font-semibold text-white">{job.company}</h2>
                      <p className="text-sm text-kg-green">{job.title}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 text-right whitespace-nowrap">
                    {formatDate(job.start_date)} → {formatDate(job.end_date)}
                  </p>
                </div>
                <p className="text-sm text-gray-400 mb-3">{job.location || 'Remote'}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-ash-gray">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
