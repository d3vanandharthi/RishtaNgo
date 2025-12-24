
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center animate-kenburns" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 
          className={`font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg leading-tight transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Building a Healthier Goa, <span className="text-primary-light">Together.</span>
        </h1>
        <p 
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-gray-200 drop-shadow-md transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Since 1998, Rishta has been at the forefront of HIV/AIDS prevention, awareness, and community support in North Goa.
        </p>
        <div 
          className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <a href="#get-involved" onClick={(e) => { e.preventDefault(); document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-primary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-primary-dark transition-transform transform hover:scale-105 duration-300 shadow-xl">
            Join Our Mission
          </a>
          <a href="#about" onClick={scrollToAbout} className="bg-white/10 border border-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-white/20 transition-all transform hover:scale-105 duration-300 shadow-xl">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
