// src/resume-main.jsx - Entry point for standalone resume
import React from 'react'
import ReactDOM from 'react-dom/client'
import ResumeOnly from './ResumeOnly.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeOnly />
  </React.StrictMode>,
)