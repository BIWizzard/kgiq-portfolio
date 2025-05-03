// src/components/resume/SkillsSection.jsx
import PropTypes from 'prop-types';
import TechBadge from '../ui/TechBadge';
import { getCategoryColorClasses } from '../../lib/techCategoryUtils';

export default function SkillsSection({ skillsByCategory, loading }) {
  return (
    <section className="py-12 bg-kg-blue/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Technical Skills</h2>
        
        {loading ? (
          <p className="text-center text-gray-300">Loading skills data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, skillList]) => {
              // Get the color style for this category's underline
              const categoryColorClasses = getCategoryColorClasses(category);
              const [bgColorClass] = categoryColorClasses.split(' '); // Just get the bg color class
              
              return (
                <div key={category} className="skills-category bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-kg-green relative inline-block pb-2">
                    {category}
                    <span className={`absolute bottom-0 left-0 w-12 h-1 ${bgColorClass}`}></span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <TechBadge key={index} tech={skill} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

SkillsSection.propTypes = {
  skillsByCategory: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

SkillsSection.defaultProps = {
  loading: false
};