
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background font-sans text-text-dark antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Impact />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
