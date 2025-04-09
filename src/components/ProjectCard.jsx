// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';

export default function ProjectCard({ title, summary, techstack, image, githuburl, demourl }) {
  const techList = techstack?.split(',').map(t => t.trim()) || [];

  const techColors = {
    React: 'primary',
    Supabase: 'success',
    Vite: 'warning',
    Bootstrap: 'success',
    Tailwind: 'dark',
    Node: 'dark',
    TypeScript: 'primary',
    JavaScript: 'warning',
    Python: 'primary',
    SQL: 'dark',
    Next: 'dark',
    GitHub: 'secondary',
    "OpenAI API": 'success',
    SCSS: 'dark',
    "Chart.js": 'warning',
    D3: 'primary',
    "GPT-4": 'danger',
    "Tailwind CSS": 'dark'
    // Add more tech colors as needed
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      {image && (
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ objectFit: 'cover', height: '200px' }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text text-muted mb-3">{summary}</p>
        <div className="mb-3 d-flex flex-wrap gap-2">
          {techList.map((tech, index) => {
            const colorClass = techColors[tech] || 'secondary';
            return (
              <span key={index} className={`badge bg-${colorClass}`}>
                {tech}
              </span>
            );
          })}
        </div>
        <div className="mt-auto d-flex gap-2">
          {githuburl && (
            <a href={githuburl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
              GitHub
            </a>
          )}
          {demourl && (
            <a href={demourl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  techstack: PropTypes.string,
  image: PropTypes.string,
  githuburl: PropTypes.string,
  demourl: PropTypes.string
};
