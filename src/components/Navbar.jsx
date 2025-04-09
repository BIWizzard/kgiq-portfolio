// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/KG_iQ_logo.svg?react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-kg-blue text-white px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-kg-yellow hover:underline">Home</Link>
          <Link to="/projects" className="text-kg-yellow hover:underline">Projects</Link>
          <Link to="/resume" className="text-kg-yellow hover:underline">Resume</Link>
          <Link to="/blog/first-post" className="text-kg-yellow hover:underline">Blog</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-sm">
          <Link to="/" className="block hover:text-kg-yellow">Home</Link>
          <Link to="/projects" className="block hover:text-kg-yellow">Projects</Link>
          <Link to="/resume" className="block hover:text-kg-yellow">Resume</Link>
          <Link to="/blog/first-post" className="block hover:text-kg-yellow">Blog</Link>
        </div>
      )}
    </nav>
  );
}
