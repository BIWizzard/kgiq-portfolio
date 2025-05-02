// src/components/resume/ProjectCard.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import TechBadge from '../ui/TechBadge';

export default function ProjectCard({ title, summary, contributions, techstack, impact }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Split contributions by pipe character if it's a string
  const contributionsList = typeof contributions === 'string' 
    ? contributions.split('|').map(item => item.trim()) 
    : Array.isArray(contributions) ? contributions : [];
  
  // Split techstack by comma if it's a string
  const techList = typeof techstack === 'string' 
    ? techstack.split(',').map(tech => tech.trim()) 
    : Array.isArray(techstack) ? techstack : [];

  return (
    <div 
      className={`bg-white/10 backdrop-blur-lg border ${isHovered ? 'border-kg-green/50' : 'border-white/20'} 
                 rounded-xl p-6 shadow-md transition duration-300 h-full flex flex-col
                 ${isHovered ? 'shadow-lg shadow-kg-green/20 -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm italic text-kg-ash2 mb-4">{summary}</p>
      
      {contributionsList.length > 0 && (
        <>
          <h4 className="text-sm font-semibold text-kg-ash2 mb-2">Contributions:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4 text-kg-ash2 text-sm">
            {contributionsList.map((contrib, i) => (
              <li key={i} className="leading-relaxed">{contrib}</li>
            ))}
          </ul>
        </>
      )}
      
      {techList.length > 0 && (
        <div className="flex mt-3 items-start">
          <h6 className="text-sm font-semibold text-kg-ash2 mr-2 flex-shrink-0 pt-1">Tech:</h6>
          <div className="flex flex-wrap gap-2">
            {techList.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </div>
      )}
      
      {impact && (
        <p className="mt-auto pt-4 text-sm text-kg-green font-medium">
          <span className="inline-block w-5 h-5 bg-green-500/20 rounded-full mr-2 text-center">✓</span>
          {impact}
        </p>
      )}
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  contributions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  techstack: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  impact: PropTypes.string
};