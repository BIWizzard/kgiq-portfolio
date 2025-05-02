// src/components/ui/TechBadge.jsx
import PropTypes from 'prop-types';

export default function TechBadge({ tech }) {
  // Tech-specific color mapping
  const techColors = {
    'React': 'bg-kg-blue text-white hover:bg-kg-blue/90',
    'Supabase': 'bg-kg-gray text-white hover:bg-kg-gray/90',
    'Vite': 'bg-kg-yellow text-black hover:bg-kg-yellow/90',
    'Bootstrap': 'bg-kg-ash text-black hover:bg-kg-ash/90',
    'Tailwind': 'bg-kg-green2 text-black hover:bg-kg-green2/90',
    'Node': 'bg-kg-wine text-white hover:bg-kg-wine/90',
    'TypeScript': 'bg-kg-blue text-white hover:bg-kg-blue/90',
    'JavaScript': 'bg-kg-yellow text-black hover:bg-kg-yellow/90',
    'Python': 'bg-kg-gray text-white hover:bg-kg-gray/90',
    'SQL': 'bg-kg-ash2 text-black hover:bg-kg-ash2/90',
    'Next': 'bg-kg-wine text-white hover:bg-kg-wine/90',
    'GitHub': 'bg-kg-ash2 text-black hover:bg-kg-ash2/90',
    'OpenAI API': 'bg-kg-green text-black hover:bg-kg-green/90',
    'SCSS': 'bg-kg-wine text-white hover:bg-kg-wine/90',
    'Chart.js': 'bg-kg-yellow text-black hover:bg-kg-yellow/90',
    'D3': 'bg-kg-blue text-white hover:bg-kg-blue/90',
    'GPT-4': 'bg-kg-wine text-white hover:bg-kg-wine/90',
    'Tailwind CSS': 'bg-kg-green2 text-black hover:bg-kg-green2/90',
    'Power BI': 'bg-kg-blue text-white hover:bg-kg-blue/90',
    'Azure': 'bg-kg-blue text-white hover:bg-kg-blue/90',
    'DAX': 'bg-kg-gray text-white hover:bg-kg-gray/90',
    'Power Query': 'bg-kg-green text-black hover:bg-kg-green/90',
    'M': 'bg-kg-green2 text-black hover:bg-kg-green2/90',
    'ETL': 'bg-kg-ash text-black hover:bg-kg-ash/90',
    'RLS': 'bg-kg-gray text-white hover:bg-kg-gray/90',
  };
  
  // Default style if no specific color found
  const badgeClass = techColors[tech] || 'bg-kg-ash2 text-black hover:bg-kg-ash2/90';

  return (
    <span 
      className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 
                 ${badgeClass} hover:scale-105 hover:shadow-sm border border-white/10`}
    >
      {tech}
    </span>
  );
}

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired
};