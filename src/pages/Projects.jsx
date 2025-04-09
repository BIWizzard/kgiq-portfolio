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
      <main className="container py-5">
        <h1 className="mb-4">Projects</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">❌ {error}</p>}
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
