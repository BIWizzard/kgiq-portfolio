// src/components/resume/ExperienceCard.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import TechBadge from '../ui/TechBadge';

export default function ExperienceCard({ 
  company, 
  title, 
  location, 
  start_date, 
  end_date, 
  bullets, 
  logo_url, 
  skills, 
  tools 
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format dates to display in the required format (e.g., "Jan 2022 - Present")
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Make sure arrays are properly handled
  const toolsArray = Array.isArray(tools) ? tools : (tools ? tools.split(',').map(t => t.trim()) : []);
  const skillsArray = Array.isArray(skills) ? skills : (skills ? skills.split(',').map(s => s.trim()) : []);

  return (
    <div 
      className={`bg-white/10 backdrop-blur-lg border ${isHovered ? 'border-kg-green/50' : 'border-white/20'} 
                 rounded-xl p-6 shadow-md transition duration-300 text-white mb-6
                 ${isHovered ? 'shadow-lg shadow-kg-green/20 -translate-y-1' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Two-column layout for header */}
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        {/* Left column - MUCH LARGER LOGO */}
        {logo_url && (
          <div className="relative h-40 w-48 flex-shrink-0">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-white/5 rounded-xl blur-md"></div>
            
            {/* Logo container with gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
            
            {/* Logo image */}
            <div className="relative z-10 h-full w-full flex items-center justify-center p-3">
              <img 
                src={logo_url} 
                alt={`${company} logo`} 
                className="max-h-32 max-w-40 object-contain drop-shadow-lg"
              />
            </div>
          </div>
        )}
        
        {/* Right column - Job info */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-kg-green font-medium text-lg">{company}</p>
              {location && <p className="text-sm text-kg-ash2">{location}</p>}
            </div>
            <div className="text-sm text-kg-ash2 whitespace-nowrap mt-2 md:mt-0 md:text-right">
              {formatDate(start_date)} — {formatDate(end_date)}
            </div>
          </div>
          
          {/* Bullets list with improved indentation styling */}
          {bullets && bullets.length > 0 && (
            <ul className="list-none p-0 space-y-2 mb-4 text-kg-ash2 text-sm">
              {bullets.map((bullet, index) => (
                <li key={index} className="relative pl-5 leading-relaxed">
                  <span className="absolute left-0">•</span>
                  <span className="inline-block pl-2">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Tools section with badges */}
      {toolsArray.length > 0 && (
        <div className="flex mt-3 items-start">
          <h6 className="text-sm font-semibold text-kg-ash2 mr-2 flex-shrink-0 pt-1">Tools:</h6>
          <div className="flex flex-wrap gap-2">
            {toolsArray.map((tool, index) => (
              <TechBadge key={index} tech={tool} />
            ))}
          </div>
        </div>
      )}

      {/* Skills section with badges */}
      {skillsArray.length > 0 && (
        <div className="flex mt-2 items-start">
          <h6 className="text-sm font-semibold text-kg-ash2 mr-2 flex-shrink-0 pt-1">Skills:</h6>
          <div className="flex flex-wrap gap-2">
            {skillsArray.map((skill, index) => (
              <TechBadge key={index} tech={skill} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  logo_url: PropTypes.string,
  skills: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  tools: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};