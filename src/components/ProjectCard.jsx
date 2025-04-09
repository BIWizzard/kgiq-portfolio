// src/components/ProjectCard.jsx
import PropTypes from 'prop-types';

export default function ProjectCard({ title, summary, techstack, image, githuburl, demourl }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{summary}</p>
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
