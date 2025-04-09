import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) setError(error.message);
      else setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-6">Projects</h1>

  {loading && <p>Loading...</p>}
  {error && <p className="text-red-500">❌ {error}</p>}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </div>
</main>

      <Footer />
    </>
  );
}
