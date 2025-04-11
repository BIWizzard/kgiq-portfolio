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
    if (!dateStr) return '';
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-no-repeat bg-center text-white px-6 py-10"
        style={{
          backgroundImage: "url('/images/Hero_BG.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-sunglow">Professional Experience</h1>
          {loading ? (
            <p className="text-center text-gray-300">Loading...</p>
          ) : (
            experiences.map((job) => (
              <div
                key={job.id}
                className="relative rounded-xl p-6 border border-white/10 backdrop-blur-md bg-white/10 shadow-xl transition duration-300 hover:shadow-2xl hover:border-white/20 overflow-hidden"
              >
                {/* Thin 3D edge with glow */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-[#c5e6a6]"></div>
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-blue-500/30 to-transparent blur-sm"></div>

                {/* Soft internal gradient */}
                <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-br from-blue-500/10 to-green-500/10 blur-xl" />
                <div className="absolute inset-0 rounded-lg overflow-hidden opacity-30"
                     style={{ background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.25), transparent 70%)", pointerEvents: "none" }}></div>

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
      <Footer />
    </>
  );
}