// src/components/resume/EducationSection.jsx
import PropTypes from 'prop-types';

export default function EducationSection({ education }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
        
        <div className="max-w-2xl mx-auto">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 mb-4 transition duration-300 hover:shadow-lg hover:border-kg-green/30"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{edu.institution}</h3>
              <p className="text-kg-ash2 mb-1">{edu.location}</p>
              <p className="text-kg-green mb-1"><em>{edu.focus}</em></p>
              <p className="text-sm text-kg-ash2">{edu.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

EducationSection.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      institution: PropTypes.string.isRequired,
      location: PropTypes.string,
      focus: PropTypes.string,
      dates: PropTypes.string
    })
  ).isRequired
};