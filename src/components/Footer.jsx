// src/components/Footer.jsx - Enhanced version with glassmorphism
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kg-blue/70 backdrop-blur-md border-t border-white/10 text-kg-ash2 py-6 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Kenneth Graham. All Rights Reserved.</p>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/" className="text-kg-ash2 hover:text-kg-green transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-kg-ash2 hover:text-kg-green transition-colors">
              Projects
            </Link>
            <Link to="/resume" className="text-kg-ash2 hover:text-kg-green transition-colors">
              Resume
            </Link>
            <a 
              href="https://www.linkedin.com/in/kennethrgraham" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-kg-ash2 hover:text-kg-green transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}