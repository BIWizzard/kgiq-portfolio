// src/components/resume/ProjectCard.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

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

  // Generate tech badge styles based on technology name
  const getTechBadgeStyle = (tech) => {
    const techColors = {
      'Power BI': 'bg-kg-blue text-white',
      'Azure SQL': 'bg-kg-blue text-white',
      'Logic Apps': 'bg-kg-yellow text-black',
      'DAX': 'bg-kg-gray text-white',
      'Data Modeling': 'bg-kg-green text-black',
      'RLS': 'bg-kg-ash text-black',
      'UI/UX': 'bg-kg-wine text-white',
      'Deployment Pipelines': 'bg-kg-wine text-white',
      'Power BI Embedded': 'bg-kg-blue text-white',
      'HTML': 'bg-kg-yellow text-black',
      'CSS': 'bg-kg-blue text-white',
      'Bootstrap': 'bg-kg-wine text-white',
      'T-SQL': 'bg-kg-ash2 text-black',
      'AWS': 'bg-kg-yellow text-black',
    };
    
    return techColors[tech] || 'bg-kg-ash2 text-black';
  };

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
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 
                          ${getTechBadgeStyle(tech)} hover:scale-105 hover:shadow-sm border border-white/10`}
              >
                {tech}
              </span>
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