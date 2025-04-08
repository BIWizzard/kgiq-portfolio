// src/pages/Home.jsx
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container-fluid px-0">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
