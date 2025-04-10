// src/components/resume/ExperienceCard.jsx
import PropTypes from 'prop-types';

export default function ExperienceCard({ logo, company, title, location, dates, bullets }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 text-white">
      <div className="flex items-center space-x-4 mb-2">
        {logo && <img src={logo} alt={`${company} logo`} className="h-10 w-10 object-contain rounded" />}
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-sm text-kg-green">{title}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm text-kg-ash2 mb-3">
        <span>{location}</span>
        <span>{dates}</span>
      </div>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {bullets.map((item, index) => (
          <li key={index} className="text-kg-ash2">{item}</li>
        ))}
      </ul>
    </div>
  );
}

ExperienceCard.propTypes = {
  logo: PropTypes.string,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  dates: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired
};
