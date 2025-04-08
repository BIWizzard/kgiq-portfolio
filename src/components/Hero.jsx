import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-4 bg-light">
      <h1 className="display-3 fw-bold mb-3">Welcome to KG iQ</h1>
      <p className="lead mb-4">
        A modern portfolio app powered by <strong>React</strong> + <strong>Supabase</strong> + <strong>AI</strong>
      </p>
      <Link to="/projects" className="btn btn-primary btn-lg">
        Explore Projects
      </Link>
    </div>
  );
}
