
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps & { index: number }> = ({ icon, title, description, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`bg-surface p-8 rounded-lg border border-gray-200/80 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ease-in-out text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-5 transition-transform duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-text-dark mb-2">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  );
};

const Activities: React.FC = () => {
  const activities = [
    {
      icon: <AwarenessIcon />,
      title: 'Awareness Programs',
      description: 'Engaging workshops and community events to spread knowledge and fight stigma.',
    },
    {
      icon: <CounselingIcon />,
      title: 'Counseling Services',
      description: 'Confidential pre and post-test counseling, providing support and guidance.',
    },
    {
      icon: <CommunityIcon />,
      title: 'Community Engagement',
      description: 'Collaborating with local bodies to foster public health and behavioral change.',
    },
    {
      icon: <DevelopmentIcon />,
      title: 'Sustainable Development',
      description: 'Focusing on broader health education and social services for lasting impact.',
    },
  ];

  return (
    <section id="activities" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
            Our Work
          </h2>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            Our work is centered around a multi-pronged approach to create a comprehensive support system for the community.
          </p>
          <div className="mt-6 h-1 w-24 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// SVG Icons
const AwarenessIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" /></svg>;
const CounselingIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.056 3 11.5c0 4.556 4.03 8.25 9 8.25Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25v-4.5m0 4.5c-2.485 0-4.5-1.679-4.5-3.75 0-2.071 2.015-3.75 4.5-3.75s4.5 1.679 4.5 3.75c0 2.071-2.015 3.75-4.5 3.75Z" /></svg>;
const CommunityIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.282 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m7.282 2.72a8.972 8.972 0 0 1-7.282 0M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></svg>;
const DevelopmentIcon = () => <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>;


export default Activities;