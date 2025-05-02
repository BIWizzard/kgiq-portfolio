// src/components/ui/TechBadge.jsx
import PropTypes from 'prop-types';
import { getTechColorClasses } from '../../lib/techCategoryUtils';

export default function TechBadge({ tech }) {
  // Get the appropriate color classes for this tech
  const colorClasses = getTechColorClasses(tech);

  return (
    <span 
      className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 
                 ${colorClasses} hover:scale-105 hover:shadow-sm border border-white/10`}
    >
      {tech}
    </span>
  );
}

TechBadge.propTypes = {
  tech: PropTypes.string.isRequired
};