// src/components/resume/ResumeHero.jsx
import PropTypes from 'prop-types';

export default function ResumeHero() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold text-white mb-2">Kenneth Graham</h1>
            <p className="text-xl text-kg-green font-medium">Sr. Business Intelligence Developer</p>
            <p className="text-sm text-kg-ash2 mt-2 italic max-w-md">
              Translating Data into Clarity, Action, and Results
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="/Kenneth_Graham_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-kg-green text-gray-900 rounded-md font-medium hover:bg-kg-green/90 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/kennethrgraham" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-transparent border border-kg-green text-kg-green rounded-md font-medium hover:bg-kg-green/10 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}