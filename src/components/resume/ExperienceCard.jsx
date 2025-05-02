// src/components/resume/ExperienceCard.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ExperienceCard({ company, title, location, startDate, endDate, bullets, logo, skills, tools }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format dates to display in the required format (e.g., "Jan 2022 - Present")
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Generate tech badge styles based on technology name
  const getTechBadgeStyle = (tech) => {
    // Comprehensive mapping of technologies to colors
    const techColors = {
      // Power BI ecosystem
      'Power BI': 'bg-kg-blue text-white',
      'Power BI (Desktop and Service)': 'bg-kg-blue text-white',
      'Power BI (Desktop)': 'bg-kg-blue text-white',
      'Power BI (Service)': 'bg-kg-blue text-white',
      'Power BI (Embedded)': 'bg-kg-blue text-white',
      'Power Automate': 'bg-kg-blue text-white',
      'Power Apps': 'bg-kg-blue text-white',
      'Power Pivot': 'bg-kg-blue text-white',
      'Power Query': 'bg-kg-green text-black',
      'M': 'bg-kg-green2 text-black',
      'DAX': 'bg-kg-gray text-white',
      'DAX Studio': 'bg-kg-gray text-white',
      'Tabular Editor': 'bg-kg-gray text-white',
      
      // Azure ecosystem
      'Azure': 'bg-kg-blue text-white',
      'Azure SQL': 'bg-kg-blue text-white',
      'Azure DevOps': 'bg-kg-blue text-white',
      'Azure Test Plans': 'bg-kg-wine text-white',
      'Azure Data Factory': 'bg-kg-wine text-white',
      'Data Factory': 'bg-kg-wine text-white',
      'Fabric': 'bg-kg-yellow text-black',
      'Logic Apps': 'bg-kg-yellow text-black',
      
      // Database & SQL
      'SQL': 'bg-kg-ash2 text-black',
      'T-SQL': 'bg-kg-ash2 text-black',
      'MySQL': 'bg-kg-ash2 text-black',
      'MySQL Workbench': 'bg-kg-ash2 text-black',
      'SSMS': 'bg-kg-ash2 text-black',
      'RLS': 'bg-kg-ash text-black',
      
      // Tools & IDE
      'Visual Studio': 'bg-kg-wine text-white',
      'JIRA': 'bg-kg-blue text-white',
      'Confluence': 'bg-kg-blue text-white',
      'ALM Toolkit': 'bg-kg-gray text-white',
      'Lucid Chart': 'bg-kg-yellow text-black',
      'Visio': 'bg-kg-blue text-white',
      'Excel': 'bg-kg-green text-black',
      'Powerpoint': 'bg-kg-yellow text-black',
      'MS Project': 'bg-kg-wine text-white',
      'MS Office': 'bg-kg-blue text-white',
      'MS Access': 'bg-kg-wine text-white',
      
      // Processes & Methodologies
      'ETL': 'bg-kg-green2 text-black',
      'QA': 'bg-kg-yellow text-black',
      'Deployment Pipeline': 'bg-kg-wine text-white',
      'Deployment Pipeline Administration': 'bg-kg-wine text-white',
      'Project Management': 'bg-kg-gray text-white',
      'Business Development': 'bg-kg-gray text-white',
      'Process Engineering': 'bg-kg-gray text-white',
      
      // Third-party tools
      'MediTech': 'bg-kg-blue text-white',
      'Vantage': 'bg-kg-blue text-white',
      'CHARM EHR': 'bg-kg-green text-black',
      'Optum': 'bg-kg-yellow text-black',
      'AWS': 'bg-kg-yellow text-black',
      'Caspio': 'bg-kg-blue text-white',
      'Salesforce': 'bg-kg-blue text-white',
      'Labgen': 'bg-kg-green text-black',
      'Claim MD': 'bg-kg-green text-black',
      'Availity': 'bg-kg-blue text-white',
      'CSG': 'bg-kg-yellow text-black',
      'Oracle Workforce Management': 'bg-kg-wine text-white',
      'Siebel Analytics': 'bg-kg-yellow text-black',
      
      // Web technologies
      'HTML': 'bg-kg-yellow text-black',
      'CSS': 'bg-kg-blue text-white',
      'Bootstrap': 'bg-kg-wine text-white',
      
      // React ecosystem (for future use)
      'React': 'bg-kg-blue text-white',
      'Supabase': 'bg-kg-gray text-white',
      'Vite': 'bg-kg-yellow text-black',
      'Tailwind': 'bg-kg-green2 text-black',
      'Tailwind CSS': 'bg-kg-green2 text-black',
      'Node': 'bg-kg-wine text-white',
      'TypeScript': 'bg-kg-blue text-white',
      'JavaScript': 'bg-kg-yellow text-black'
    };
    
    // Default style if no specific color found
    return techColors[tech] || 'bg-kg-ash2 text-black';
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
        {logo && (
          <div className="relative h-40 w-48 flex-shrink-0">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-white/5 rounded-xl blur-md"></div>
            
            {/* Logo container with gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
            
            {/* Logo image */}
            <div className="relative z-10 h-full w-full flex items-center justify-center p-3">
              <img 
                src={logo} 
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
              {formatDate(startDate)} — {formatDate(endDate)}
            </div>
          </div>
          
          {/* Bullets list */}
          {bullets && bullets.length > 0 && (
            <ul className="list-disc list-inside space-y-2 mb-4 text-kg-ash2 text-sm">
              {bullets.map((bullet, index) => (
                <li key={index} className="leading-relaxed">{bullet}</li>
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
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 ${getTechBadgeStyle(tool)} 
                          hover:scale-105 hover:shadow-sm border border-white/10`}
              >
                {tool}
              </span>
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
              <span 
                key={index}
                className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 ${getTechBadgeStyle(skill)} 
                          hover:scale-105 hover:shadow-sm border border-white/10`}
              >
                {skill}
              </span>
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
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  logo: PropTypes.string,
  skills: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  tools: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};