// src/components/resume/ProjectsSection.jsx
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ projects, loading }) {
  // Filter for featured projects only
  const featuredProjects = projects.filter(p => p.featured);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Projects</h2>
        
        {loading ? (
          <p className="text-center text-gray-300">Loading project data...</p>
        ) : featuredProjects.length === 0 ? (
          <p className="text-center text-gray-300">No featured projects available</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                summary={project.summary}
                contributions={project.contributions}
                techstack={project.techstack}
                impact={project.impact}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

ProjectsSection.propTypes = {
  projects: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

ProjectsSection.defaultProps = {
  loading: false
};