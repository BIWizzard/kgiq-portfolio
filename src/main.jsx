// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import BlogPost from './pages/BlogPost.jsx';
import TestSupabase from './pages/TestSupabase.jsx'; // ✅ New import
import './index.css';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/blog/first-post" element={<BlogPost />} />
        <Route path="/test-supabase" element={<TestSupabase />} /> {/* ✅ New route */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
