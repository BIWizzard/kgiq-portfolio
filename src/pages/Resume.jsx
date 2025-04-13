// src/pages/Resume.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ResumeStyleProvider, useResumeStyle } from '../components/resume/ResumeStyleContext';


function ResumeContent() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const { style, toggleStyle } = useResumeStyle();

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
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <main
      className="min-h-screen bg-cover bg-no-repeat bg-center text-white px-6 py-10"
      style={{ backgroundImage: "url('/images/Hero_BG.jpg')" }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-2 text-center text-sunglow">Professional Experience</h1>

        <div className="text-center mb-6">
          <button
            className="text-xs px-3 py-1 border border-white rounded hover:bg-white/10 transition"
            onClick={toggleStyle}
          >
            Toggle Style: {style === 'thin' ? 'Refined' : 'Beast Mode'}
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : (
          experiences.map((job) => (
            <div
              key={job.id}
              className={`resume-card resume-card-${style}`}
            >
              <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-kg-blue/10 to-kg-green/10 blur-xl" />
              <div className="relative z-10">
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
                  <p className="text-xs text-gray-300">
                    {formatDate(job.start_date)} → {job.end_date ? formatDate(job.end_date) : 'Present'}
                  </p>
                </div>
                <p className="text-sm text-gray-400 mb-3">{job.location || 'Remote'}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-ash-gray">
                  {job.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default function Resume() {
  return (
    <>
      <Navbar />
      <ResumeStyleProvider>
        <ResumeContent />
      </ResumeStyleProvider>
      <Footer />
    </>
  );
}
