// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import BlogPost from './pages/BlogPost';
import StyleGuide from './pages/StyleGuide';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog/first-post" element={<BlogPost />} />
      <Route path="/styleguide" element={<StyleGuide />} />
    </Routes>
  );
}
