// src/components/ProjectCard.jsx
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ title, summary, techstack, image, githuburl, demourl }) {
  const techList = techstack?.split(',').map(t => t.trim()) || []

  const techColors = {
    React: 'bg-[#304c72] text-white', // YInMn Blue
    Supabase: 'bg-[#59708e] text-white', // Payne's Gray
    Vite: 'bg-[#ffd166] text-black', // Sunglow
    Bootstrap: 'bg-[#b9bea5] text-black', // Ash Gray
    Tailwind: 'bg-[#bdd2a6] text-black', // Tea Green 2
    Node: 'bg-[#733041] text-white', // Wine
    TypeScript: 'bg-[#304c72] text-white',
    JavaScript: 'bg-[#ffd166] text-black',
    Python: 'bg-[#59708e] text-white',
    SQL: 'bg-[#a7aaa4] text-black', // Ash Gray 2
    Next: 'bg-[#733041] text-white',
    GitHub: 'bg-[#a7aaa4] text-black',
    'OpenAI API': 'bg-[#c5e6a6] text-black', // Tea Green
    SCSS: 'bg-[#733041] text-white',
    'Chart.js': 'bg-[#ffd166] text-black',
    D3: 'bg-[#304c72] text-white',
    'GPT-4': 'bg-[#733041] text-white',
    'Tailwind CSS': 'bg-[#bdd2a6] text-black',
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-kg-blue/50">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{summary}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techList.map((tech, index) => {
            const badgeClass = techColors[tech] || 'bg-gray-300 text-black'
            return (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded-full font-medium transition-colors duration-200 ${badgeClass} hover:brightness-110 hover:scale-105 hover:shadow-md`}
              >
                {tech}
              </span>
            )
          })}
        </div>

        <div className="mt-auto flex gap-3 justify-start">
          {githuburl && (
            <a
              href={githuburl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 border border-gray-700 text-gray-700 rounded hover:bg-gray-100 transition flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>
          )}
          {demourl && (
            <a
              href={demourl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 bg-[#3B82F6] text-white rounded hover:bg-blue-600 transition flex items-center gap-2"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  techstack: PropTypes.string,
  image: PropTypes.string,
  githuburl: PropTypes.string,
  demourl: PropTypes.string,
}
