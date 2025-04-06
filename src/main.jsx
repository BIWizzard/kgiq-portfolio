// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BlogPost from './pages/BlogPost.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/blog/first-post" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)