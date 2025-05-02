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
  bullets,
  order // Added order prop to help with debugging
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
      <div className="flex items-center space-x-4 mb-2">
        {logoPath && !logoError ? (
          <div className="flex items-center justify-center h-14 w-14 bg-white rounded-lg p-2 shadow-sm">
            <img
              src={logoPath}
              alt={`${displayCompany} logo`}
              className="max-h-full max-w-full object-contain drop-shadow"
              onError={handleLogoError}
            />
          </div>
        ) : null}
        <div>
          <h3 className="text-lg font-semibold">{displayCompany}</h3>
          <p className="text-sm text-kg-green">{title}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-kg-ash2 mb-3">
        <span>{location || 'Remote'}</span>
        <span>{formatDate(start_date)} – {formatDate(end_date)}</span>
      </div>
      
      {bullets && bullets.length > 0 ? (
        <ul className="list-disc list-inside space-y-1 text-sm">
          {bullets.map((item, index) => (
            <li key={index} className="text-kg-ash2">{item}</li>
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
  bullets: PropTypes.arrayOf(PropTypes.string),
  order: PropTypes.number
};