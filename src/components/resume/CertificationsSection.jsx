// src/components/resume/CertificationsSection.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function CertificationsSection({ certifications = [] }) {
  // Default certification with direct URL to Microsoft's badge
  const defaultCertifications = [
    {
      id: 1,
      title: 'Microsoft Certified: Power BI Data Analyst Associate',
      number: '45Y1DA-B2C16C',
      // Direct URL to Microsoft's official badge
      badgeUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
      verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/KenGraham-7404/1DFEFA0DA6C7420B?sharingId=E4D8B57667DD7D08'
    }
  ];

  const certsToDisplay = certifications.length > 0 ? certifications : defaultCertifications;

  return (
    <section className="py-12 bg-kg-blue/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Certifications</h2>
        
        <div className="max-w-md mx-auto">
          {certsToDisplay.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ certification }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Fallback URL for Microsoft certification badge
  const fallbackBadgeUrl = 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg';
  
  return (
    <div 
      className={`certification-item bg-white/10 backdrop-blur-lg rounded-xl p-6 border 
                ${isHovered ? 'border-kg-green/50 shadow-lg shadow-kg-green/20' : 'border-white/20'} 
                transition duration-300 text-center mb-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageError ? fallbackBadgeUrl : certification.badgeUrl || fallbackBadgeUrl}
        alt={`${certification.title} Badge`}
        className="mx-auto mb-4 h-32 w-auto"
        onError={() => setImageError(true)}
      />
      <h3 className="text-xl font-semibold text-white mb-2">{certification.title}</h3>
      {certification.number && (
        <p className="text-sm text-kg-ash2 mb-4">Certification number: {certification.number}</p>
      )}
      {certification.verifyUrl && (
        <a 
          href={certification.verifyUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`inline-block px-4 py-2 text-sm bg-transparent border 
                    ${isHovered ? 'border-kg-green text-kg-green bg-kg-green/10' : 'border-white/30 text-white/80'} 
                    rounded hover:bg-kg-green/10 hover:border-kg-green hover:text-kg-green transition`}
        >
          Verify Certification
        </a>
      )}
    </div>
  );
}

CertificationsSection.propTypes = {
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      number: PropTypes.string,
      badgeUrl: PropTypes.string,
      verifyUrl: PropTypes.string
    })
  )
};

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.string,
    badgeUrl: PropTypes.string,
    verifyUrl: PropTypes.string
  }).isRequired
};