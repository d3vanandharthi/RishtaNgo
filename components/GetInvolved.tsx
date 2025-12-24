
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const GetInvolved: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="get-involved" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
            You Can Make a Difference
          </h2>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            Your support is vital to our mission. Discover how you can contribute to a healthier future for Goa.
          </p>
          <div className="mt-6 h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          {/* Donate */}
          <div className={`bg-surface p-8 rounded-lg border border-gray-200/80 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <HeartIcon />
            <h3 className="font-serif text-2xl font-bold my-4">Donate</h3>
            <p className="text-text-light mb-8">
              Every contribution helps us continue our awareness programs and counseling services.
            </p>
            <a href="#" className="bg-primary text-white font-bold py-3 px-8 rounded-md hover:bg-primary-dark transition duration-300">
              Give Today
            </a>
          </div>

          {/* Volunteer */}
          <div className={`bg-surface p-8 rounded-lg border border-gray-200/80 transition-all duration-500 ease-out delay-200 hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <UsersIcon />
            <h3 className="font-serif text-2xl font-bold my-4">Volunteer</h3>
            <p className="text-text-light mb-8">
              Lend your time and skills to community outreach, event organization, and awareness campaigns.
            </p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-text-dark/90 text-white font-bold py-3 px-8 rounded-md hover:bg-text-dark transition duration-300">
              Contact Us
            </a>
          </div>

          {/* Careers */}
          <div className={`bg-surface p-8 rounded-lg border border-gray-200/80 transition-all duration-500 ease-out delay-400 hover:-translate-y-2 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <BriefcaseIcon />
            <h3 className="font-serif text-2xl font-bold my-4">Careers</h3>
            <p className="text-text-light mb-2">
              Join our passionate team and build a rewarding career in social service.
            </p>
            <div className="text-left bg-background p-4 rounded-md mt-6">
              <p className="font-semibold text-primary">Now Hiring: Counselor</p>
              <p className="text-sm text-text-light">Salary: Rs. 10,000-12,000/month. Make a direct impact in the community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const HeartIcon = () => <div className="flex justify-center"><svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg></div>;
const UsersIcon = () => <div className="flex justify-center"><svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.282 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m7.282 2.72a8.972 8.972 0 0 1-7.282 0M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg></div>;
const BriefcaseIcon = () => <div className="flex justify-center"><svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 0 1-2.25 2.25H6.002a2.25 2.25 0 0 1-2.25-2.25v-4.098m16.5 0a2.25 2.25 0 0 0-2.25-2.25H6.002a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-4.098a2.25 2.25 0 0 0-2.25-2.25H6.002a2.25 2.25 0 0 0-2.25 2.25v4.098" /></svg></div>;

export default GetInvolved;