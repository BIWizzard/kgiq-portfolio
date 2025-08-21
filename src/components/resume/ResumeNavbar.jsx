// src/components/resume/ResumeNavbar.jsx - Resume-only navbar with logo only
import logoUrl from '../../assets/KG_iQ_logo.svg';

export default function ResumeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-kg-blue/70 backdrop-blur-md border-b border-white/10 text-white px-6 py-3 shadow-lg">
      <div className="w-full flex items-center justify-between h-16">
        {/* Logo - exact same as main site */}
        <div className="flex items-center space-x-2">
          <img
            src={logoUrl}
            alt="KG iQ logo"
            className="h-14 w-auto"
          />
        </div>
        
        {/* Tagline on the right */}
        <div className="hidden md:block text-kg-yellow text-sm font-medium tracking-wide">
          Clarity | Action | Results
        </div>
      </div>
    </nav>
  );
}