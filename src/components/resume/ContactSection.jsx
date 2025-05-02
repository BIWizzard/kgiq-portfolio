// src/components/resume/ContactSection.jsx
import PropTypes from 'prop-types';

export default function ContactSection() {
  return (
    <section className="py-12 bg-kg-blue/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Contact Method :: Email */}
          <div className="contact-item bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-kg-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-kg-green/10">
            <div className="contact-icon mb-4 text-kg-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h5 className="contact-label text-sm font-semibold uppercase tracking-wider text-white mb-2">Email</h5>
            <a href="mailto:k.kmg@icloud.com" className="contact-link text-kg-ash2 hover:text-kg-green transition-colors">
              k.kmg@icloud.com
            </a>
          </div>

          {/* Contact Method :: Phone */}
          <div className="contact-item bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-kg-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-kg-green/10">
            <div className="contact-icon mb-4 text-kg-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h5 className="contact-label text-sm font-semibold uppercase tracking-wider text-white mb-2">Phone</h5>
            <a href="tel:+16169002601" className="contact-link text-kg-ash2 hover:text-kg-green transition-colors">
              (616) 900-2601
            </a>
          </div>

          {/* Contact Method :: Location */}
          <div className="contact-item bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-kg-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-kg-green/10">
            <div className="contact-icon mb-4 text-kg-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h5 className="contact-label text-sm font-semibold uppercase tracking-wider text-white mb-2">Location</h5>
            <p className="contact-text text-kg-ash2">
              Greater Grand Rapids, MI Area
            </p>
          </div>

          {/* Contact Method :: LinkedIn */}
          <div className="contact-item bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-kg-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-kg-green/10">
            <div className="contact-icon mb-4 text-kg-green">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h5 className="contact-label text-sm font-semibold uppercase tracking-wider text-white mb-2">LinkedIn</h5>
            <a href="https://www.linkedin.com/in/kennethrgraham" target="_blank" rel="noopener noreferrer" className="contact-link text-kg-ash2 hover:text-kg-green transition-colors">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}