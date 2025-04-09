// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';

export default function ProjectCard({ title, summary, techStack, image, githubUrl, demoUrl }) {
  const techs = techStack ? techStack.split(',').map(t => t.trim()) : [];

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-img-top bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center text-center" style={{ height: '180px' }}>
        <h5 className="text-muted">{image || title}</h5>
      </div>
      <div className="card-body d-flex flex-column">
        <h6 className="fw-bold">{title}</h6>
        <p className="text-muted small mb-3">{summary}</p>
        <div className="mb-3">
          {techs.map((tech, index) => (
            <span key={index} className="badge bg-light text-dark border me-1 mb-1">{tech}</span>
          ))}
        </div>
        <div className="mt-auto d-flex gap-2">
          {githubUrl && (
            <a href={githubUrl} className="btn btn-sm btn-outline-dark" target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
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
  techStack: PropTypes.string,
  image: PropTypes.string,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};
