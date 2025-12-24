
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">Rishta</h3>
            <p className="text-gray-400">
              A registered non-profit organization dedicated to HIV/AIDS prevention and community support in Goa since 1998.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#activities" onClick={(e) => { e.preventDefault(); document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#get-involved" onClick={(e) => { e.preventDefault(); document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-primary transition-colors">Get Involved</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest activities and campaigns.</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialIcon href="#" />
              <SocialIcon href="#" />
              <SocialIcon href="#" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rishta. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ href: string }> = ({ href }) => (
  <a href={href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  </a>
);

export default Footer;
