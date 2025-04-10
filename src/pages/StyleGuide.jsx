// src/pages/StyleGuide.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function StyleGuide() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">🎨 Style Guide</h1>

        {/* Color Palette */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'YInMn Blue', color: '#304c72' },
              { name: "Payne's Gray", color: '#59708e' },
              { name: 'Sunglow', color: '#ffd166' },
              { name: 'Tea Green', color: '#c5e6a6' },
              { name: 'Ash Gray', color: '#b9bea5' },
              { name: 'Wine', color: '#733041' },
            ].map(({ name, color }) => (
              <div key={name} className="rounded shadow text-center p-2">
                <div className="w-full h-16 rounded" style={{ backgroundColor: color }} />
                <div className="text-xs mt-2">{name}</div>
                <div className="text-xs text-gray-500">{color}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <p className="text-xs mb-1">Text XS</p>
          <p className="text-sm mb-1">Text SM</p>
          <p className="text-base mb-1">Text BASE</p>
          <p className="text-lg mb-1">Text LG</p>
          <p className="text-xl mb-1 font-semibold">Text XL</p>
          <p className="text-2xl font-bold">Text 2XL</p>
        </section>

        {/* Buttons */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#304c72] text-white px-4 py-2 rounded shadow hover:bg-[#456ca4]">Primary</button>
            <button className="bg-[#ffd166] text-black px-4 py-2 rounded shadow hover:bg-yellow-400">Accent</button>
            <button className="border border-gray-600 px-4 py-2 rounded shadow hover:bg-gray-100">Outline</button>
          </div>
        </section>

        {/* Pills */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Pills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Supabase', 'Tailwind', 'Node', 'GPT-4'].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-sm font-medium bg-[#304c72] text-white hover:opacity-80 transition">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
