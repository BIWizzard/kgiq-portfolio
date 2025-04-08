// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';

export default function ProjectCard({ title, summary, techStack, image, githubUrl, demoUrl }) {
  return (
    <div className="card h-100 shadow-sm">
      {image && <img src={image} className="card-img-top" alt={title} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{summary}</p>

        <div className="mt-auto">
          {techStack?.length > 0 && (
            <div className="mb-3">
              {techStack.map((tech) => (
                <span key={tech} className="badge bg-secondary me-1">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div>
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2">
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
};
