
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [leftColRef, isLeftColVisible] = useIntersectionObserver({ triggerOnce: true });
  const [rightColRef, isRightColVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
            Our Commitment to Goa
          </h2>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            For over two decades, we've dedicated ourselves to fostering a healthy, stigma-free society with access to essential HIV/AIDS services.
          </p>
          <div className="mt-6 h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            ref={leftColRef} 
            className={`transition-all duration-700 ease-out group ${isLeftColVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Community Support" className="object-cover w-full h-[32rem] lg:h-[40rem] transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>

          <div 
            ref={rightColRef}
            className={`space-y-8 transition-all duration-700 ease-out delay-200 ${isRightColVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-surface p-8 rounded-lg border border-gray-200/80">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <ul className="space-y-3 text-text-light">
                <ListItem>Promote sustainable development with a focus on HIV/AIDS education.</ListItem>
                <ListItem>Provide community-based interventions for HIV prevention.</ListItem>
                <ListItem>Raise awareness and combat stigma related to HIV/AIDS.</ListItem>
              </ul>
            </div>
            <div className="bg-surface p-8 rounded-lg border border-gray-200/80">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <ul className="space-y-3 text-text-light">
                <ListItem>A healthy, stigma-free society with universal access to HIV/AIDS services.</ListItem>
                <ListItem>Empowered communities through comprehensive education and awareness.</ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <svg className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>{children}</span>
  </li>
);

export default About;