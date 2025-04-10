// src/pages/Resume.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#1f2a38] via-[#1a222f] to-[#131a22] text-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-kg-yellow">Résumé</h1>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-300">
              Experienced BI Developer and Certified Data Geek with a passion for crafting beautiful, functional tools powered by React, Supabase, and AI.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              <li>SQL, DAX, Power BI, semantic modeling</li>
              <li>React, Tailwind, Supabase</li>
              <li>REST APIs, OpenAI API, Git & GitHub</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <h3 className="text-xl text-kg-yellow font-semibold">Data Solutions Architect @ ACME Corp</h3>
              <p className="text-sm text-gray-400">2022–Present</p>
              <p className="text-gray-300 mt-2">
                Leading data product development using Power BI, SQL, and React-based tooling to support strategic insights and operational efficiency.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-xl text-kg-yellow font-semibold">BI Developer @ XYZ Inc</h3>
              <p className="text-sm text-gray-400">2018–2022</p>
              <p className="text-gray-300 mt-2">
                Designed and maintained enterprise dashboards, integrated disparate data sources, and trained analysts in advanced Power BI techniques.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
