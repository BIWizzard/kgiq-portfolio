// src/components/resume/SkillsSection.jsx
import PropTypes from 'prop-types';

export default function SkillsSection({ skillsByCategory, loading }) {
  // Generate badge style based on category
  const getCategoryColorStyle = (category) => {
    const categoryColors = {
      'BI & Analytics': 'bg-kg-blue text-white',
      'Languages & Scripting': 'bg-kg-yellow text-black',
      'Cloud & Automation': 'bg-kg-wine text-white',
      'Data Modeling': 'bg-kg-green text-black',
      'Workflow & Collaboration': 'bg-kg-gray text-white',
      'Supporting Tools': 'bg-kg-ash text-black',
    };
    
    return categoryColors[category] || 'bg-kg-ash2 text-black';
  };

  return (
    <section className="py-12 bg-kg-blue/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Technical Skills</h2>
        
        {loading ? (
          <p className="text-center text-gray-300">Loading skills data...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skillsByCategory).map(([category, skillList]) => {
              // Get the color style for this category
              const badgeStyle = getCategoryColorStyle(category);
              
              return (
                <div key={category} className="skills-category bg-white/5 backdrop-blur-md rounded-lg p-5 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-kg-green relative inline-block pb-2">
                    {category}
                    <span className="absolute bottom-0 left-0 w-12 h-1 bg-kg-green"></span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 
                                  ${badgeStyle} hover:scale-105 hover:shadow-sm border border-white/10`}
                      >
                        {skill}
                      </span>
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