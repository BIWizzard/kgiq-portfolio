// src/components/resume/ExperienceCard.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getLogoPath, formatCompanyName } from '../../lib/logoUtils';

export default function ExperienceCard({ 
  logo_url, 
  company, 
  title, 
  location, 
  start_date, 
  end_date, 
  bullets
}) {
  const [logoError, setLogoError] = useState(false);
  
  // Format dates for display
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  // Determine the correct logo path
  const logoPath = logo_url || getLogoPath(company);
  
  // Format company name if needed
  const displayCompany = formatCompanyName(company);

  // Handle logo loading errors
  const handleLogoError = () => {
    console.log(`Failed to load logo for ${company} from path: ${logoPath}`);
    setLogoError(true);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 text-white mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-4">
          {logoPath && !logoError ? (
            <div className="relative h-28 w-32 flex-shrink-0">
              <img
                src={logoPath}
                alt={`${displayCompany} logo`}
                className="h-28 w-auto max-w-[180px] object-contain drop-shadow-md relative z-10 pl-1"
                onError={handleLogoError}
              />
            </div>
          ) : null}
          <div>
            <h2 className="text-xl font-semibold text-white">{displayCompany}</h2>
            <p className="text-sm text-kg-green">{title}</p>
            <p className="text-xs text-gray-400 mt-1">{location || 'Remote'}</p>
          </div>
        </div>
        <p className="text-xs text-gray-300 text-right whitespace-nowrap">
          {formatDate(start_date)} – {formatDate(end_date)}
        </p>
      </div>

      {bullets && bullets.length > 0 ? (
        <ul className="job-description">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

ExperienceCard.propTypes = {
  logo_url: PropTypes.string,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string)
};