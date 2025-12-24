
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useCountUp from '../hooks/useCountUp';

const ImpactStat: React.FC<{ value: number; label: string; suffix: string; delay: string; isVisible: boolean }> = ({ value, label, suffix, delay, isVisible }) => {
  const count = useCountUp(value, isVisible);
  return (
    <div className={`text-center transition-all duration-500 ease-out ${delay} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
      <p className="font-serif text-4xl md:text-5xl font-bold text-primary">{count}{suffix}</p>
      <p className="text-lg text-gray-300 font-medium mt-2">{label}</p>
    </div>
  );
};

const Impact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.5 });

  return (
    <section id="impact" className="relative py-24 lg:py-32 bg-text-dark bg-fixed bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1618218173489-70a1a8e8f853?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className="absolute inset-0 bg-text-dark/80"></div>
      <div className="container relative mx-auto px-6 text-white text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Our Impact, By The Numbers
        </h2>
        <p className="text-lg text-gray-200 mt-4 max-w-3xl mx-auto mb-20">
          We believe in transparent, measurable results. Our long-standing presence in the community has allowed us to touch thousands of lives.
        </p>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <ImpactStat isVisible={isVisible} value={25} suffix="+" label="Years of Service" delay="delay-0" />
          <ImpactStat isVisible={isVisible} value={5000} suffix="+" label="People Reached Annually" delay="delay-200" />
          <ImpactStat isVisible={isVisible} value={100} suffix="+" label="Community Programs" delay="delay-400" />
        </div>
      </div>
    </section>
  );
};

export default Impact;