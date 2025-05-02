// src/components/resume/ResumeDebugger.jsx
import PropTypes from 'prop-types';

export default function ResumeDebugger({ experiences, isVisible = false }) {
  // Only render if debugging is enabled
  if (!isVisible) return null;
  
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 mt-6 mb-6">
      <h3 className="text-yellow-300 font-mono text-sm mb-2">Debug Panel</h3>
      <p className="text-green-300 font-mono text-xs mb-2">Found {experiences.length} experience entries</p>
      
      <div className="bg-black/20 p-3 rounded text-xs font-mono overflow-auto max-h-48">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-2 pb-2 border-b border-white/10">
            <p className="text-white/80">
              <span className="text-yellow-300">[{exp.order || 'No order'}]</span> 
              <span className="text-green-300"> {exp.company}</span>
              <span className="text-white/70"> - {exp.title}</span>
            </p>
            <p className="text-xs text-white/50">
              ID: {exp.id} | Bullets: {exp.bullets?.length || 0} | 
              Logo URL: {exp.logo_url ? '✓' : '✗'}
            </p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end">
        <button 
          onClick={() => console.log('Full experience data:', experiences)}
          className="text-xs text-blue-300 mt-2 hover:text-blue-200 underline"
        >
          Log Full Data to Console
        </button>
      </div>
    </div>
  );
}

ResumeDebugger.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
  isVisible: PropTypes.bool
};