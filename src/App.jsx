// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestSupabase from './pages/TestSupabase';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/supabase-test" element={<TestSupabase />} />
      <Route path="/projects" element={<Projects />} />

    </Routes>
  );
}
