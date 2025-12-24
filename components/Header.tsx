
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-text-light hover:text-primary transition duration-300 ease-in-out font-medium tracking-wide"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  const navLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#activities', label: 'Our Work' },
    { href: '#get-involved', label: 'Get Involved' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className={`text-2xl font-bold font-serif text-primary transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
            Rishta
          </a>
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className={`transition-all duration-500 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <NavLink href={link.href} onClick={(e) => scrollToSection(e, link.href.substring(1))}>{link.label}</NavLink>
              </div>
            ))}
          </nav>
          <a
            href="#get-involved"
            onClick={(e) => scrollToSection(e, 'get-involved')}
            className={`hidden md:inline-block bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-primary-dark transition-all duration-500 ease-out shadow-sm hover:shadow-md ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
            style={{ transitionDelay: `${100 + navLinks.length * 100}ms` }}
          >
            Donate
          </a>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-surface shadow-lg`}>
        <div className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map(link => (
            <NavLink key={link.href} href={link.href} onClick={(e) => scrollToSection(e, link.href.substring(1))}>{link.label}</NavLink>
          ))}
          <a href="#get-involved" onClick={(e) => scrollToSection(e, 'get-involved')} className="w-4/5 text-center bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition duration-300">
            Donate
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
