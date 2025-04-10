import React from 'react';

// GradientBackground Component with tech-inspired pattern
const GradientBackground = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Tech grid pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>
      
      {/* Tech circles pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 30%, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            radial-gradient(circle at 75% 70%, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 70px 70px',
        }}
      ></div>
      
      {/* Diagonal tech lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.04) 75%),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.04) 75%)
          `,
          backgroundSize: '120px 120px',
        }}
      ></div>
      
      {/* Vibrant accent spots - more visible to enhance contrast with transparent cards */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(100, 200, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
          transform: 'translate(25%, -25%)'
        }}
      ></div>
      
      <div 
        className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-50 blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(120, 120, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
          transform: 'translate(-15%, 25%)'
        }}
      ></div>
      
      <div 
        className="absolute top-1/2 left-1/4 w-1/4 h-1/4 opacity-40 blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 180, 100, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
          transform: 'translateY(-50%)'
        }}
      ></div>
      
      {/* Digital circuit-like pattern elements */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M20 0 V200 M40 0 V200 M60 20 H200 M60 40 H200 M80 60 H200 M120 80 H200 M140 100 H200 M0 120 H60 M0 140 H80 M0 160 H100 M0 180 H120" 
                    stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
              <circle cx="60" cy="20" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="60" cy="40" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="80" cy="60" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="120" cy="80" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="140" cy="100" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="60" cy="120" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="80" cy="140" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="100" cy="160" r="3" fill="rgba(255,255,255,0.2)" />
              <circle cx="120" cy="180" r="3" fill="rgba(255,255,255,0.2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};

// CaseStudyCard Component with more pronounced glassmorphic effect
const CaseStudyCard = ({ 
  category, 
  year, 
  title, 
  description, 
  image, 
  stats = [], 
  buttonText = "View Case Study"
}) => {
  return (
    <div className="flex rounded-lg overflow-hidden p-6 mb-8 relative backdrop-blur-xl" style={{
      backgroundColor: 'rgba(30, 41, 59, 0.5)', // More transparent background
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.12)'
    }}>
      {/* Enhanced inner glow */}
      <div className="absolute inset-0 rounded-lg overflow-hidden opacity-40"
        style={{
          background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), transparent 70%)',
          pointerEvents: 'none'
        }}
      ></div>
      
      {/* Highlight accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-transparent"></div>

      <div className="flex-1 pr-4 relative z-10">
        <div className="mb-6">
          <span className="uppercase text-xs tracking-wider text-blue-100 mr-3">{category}</span>
          <span className="text-xs text-gray-400">• {year}</span>
        </div>
        
        <h3 className="text-white text-2xl font-medium mb-4">{title}</h3>
        
        <p className="text-gray-200 text-sm mb-6">{description}</p>
        
        {stats.length > 0 && (
          <div className="space-y-2 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5"/>
                    <path d="M5 8L7 10L11 6" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-200">{stat}</span>
              </div>
            ))}
          </div>
        )}
        
        <button className="inline-flex items-center text-sm text-white border border-white/30 rounded px-4 py-2 hover:bg-white/15 transition-colors backdrop-blur-sm bg-white/5">
          {buttonText}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="w-64 flex-shrink-0 relative">
        <div className="absolute inset-0 rounded-lg" style={{ 
          boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.15)'
        }}></div>
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

// Main Case Studies Page Component
const CaseStudiesPage = () => {
  const caseStudies = [
    {
      category: "ANIBAR",
      year: "2023",
      title: "Curating AR experiences while travelling",
      description: "Comprehensive exploration of augmented reality features across varied locations.",
      image: "/api/placeholder/300/400",
      stats: [
        "Online buy increased by 15%",
        "New users engaged increased by 32%",
        "Engagement rate increased by 28%"
      ]
    },
    {
      category: "SHOPIFY",
      year: "2023",
      title: "Building profitable dropshipping dashboard",
      description: "Making it simple for new merchants to start and grow profitable businesses to get to their first order, then complete thousands of orders in a few months.",
      image: "/api/placeholder/300/400"
    },
    {
      category: "DELIVERY",
      year: "2023",
      title: "Terrific: An app that helps you find a home tutor",
      description: "Terrific makes it simple to connect with experienced homeschool parents or find a home tutor.",
      image: "/api/placeholder/300/400"
    },
    {
      category: "HEADOUT",
      year: "2023",
      title: "Enhancing the payment flow of Headout",
      description: "Improving the checkout experience for travelers booking experiences.",
      image: "/api/placeholder/300/400",
      stats: [
        "Conversion rate increased by 16%",
        "User usage upgraded increased by 22%",
        "New users upgrade increased by 24%"
      ]
    }
  ];

  return (
    <GradientBackground>
      <div className="text-center mb-16">
        <h5 className="text-gray-300 text-sm uppercase tracking-wider mb-2">SELECTED WORK</h5>
        <h2 className="text-white text-4xl font-semibold mb-3">Featured Case Studies</h2>
        <p className="text-gray-300">Compilation of case studies that endure by various brands</p>
      </div>
      
      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard
            key={index}
            category={study.category}
            year={study.year}
            title={study.title}
            description={study.description}
            image={study.image}
            stats={study.stats || []}
          />
        ))}
      </div>
    </GradientBackground>
  );
};

export default CaseStudiesPage;