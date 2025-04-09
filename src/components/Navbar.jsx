// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoUrl from '../assets/KG_iQ_logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    `text-xl hover:text-kg-green ${
      location.pathname === path
        ? 'text-kg-green'
        : 'text-kg-ash2'
    }`;
  

  return (
    <nav className="bg-kg-blue text-white px-6 py-3 shadow-md">
      <div className="w-full flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logoUrl}
            alt="KG iQ logo"
            className="h-14 w-auto"
          />
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-6 mr-14">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
          <Link to="/resume" className={linkClass('/resume')}>Resume</Link>
          <Link to="/blog/first-post" className={linkClass('/blog/first-post')}>Blog</Link>
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
        <div className="md:hidden mt-2 space-y-2 text-sm px-2">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/projects" className={linkClass('/projects')}>Projects</Link>
          <Link to="/resume" className={linkClass('/resume')}>Resume</Link>
          <Link to="/blog/first-post" className={linkClass('/blog/first-post')}>Blog</Link>
        </div>
      )}
    </nav>
  );
}
