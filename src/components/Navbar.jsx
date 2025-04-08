// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4">
      <Link className="navbar-brand" to="/">KG iQ</Link>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/blog/first-post">Blog</Link></li>
      </ul>
    </nav>
  );
}
