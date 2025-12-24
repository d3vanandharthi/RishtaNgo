
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-serif text-xl font-bold text-text-dark">{title}</h4>
      <div className="text-text-light">{children}</div>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [leftColRef, isLeftColVisible] = useIntersectionObserver({ triggerOnce: true });
  const [rightColRef, isRightColVisible] = useIntersectionObserver({ triggerOnce: true });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-dark">
            Get In Touch
          </h2>
          <p className="text-lg text-text-light mt-4 max-w-3xl mx-auto">
            We are here to help. Reach out for support, information, or partnership opportunities.
          </p>
          <div className="mt-6 h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div 
            ref={leftColRef}
            className={`space-y-10 transition-all duration-700 ease-out ${isLeftColVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <ContactInfo icon={<LocationIcon />} title="Our Office">
              <p>2nd Floor, Zeib Reina Complex, Naika Vaddo, Market, Calangute-403516, Goa, India</p>
            </ContactInfo>
            <ContactInfo icon={<PhoneIcon />} title="Call Us">
              <p>Mobile: <a href="tel:+919822175248" className="hover:text-primary transition-colors">+91 9822175248</a></p>
              <p>Landline: <a href="tel:+918322275843" className="hover:text-primary transition-colors">+91 832-2275843</a></p>
            </ContactInfo>
            <ContactInfo icon={<MailIcon />} title="Email Us">
              <p><a href="mailto:info@rishtango.org" className="hover:text-primary transition-colors">info@rishtango.org</a></p>
              <p className="text-sm">(Email to be confirmed)</p>
            </ContactInfo>
          </div>
          <div
            ref={rightColRef}
            className={`transition-all duration-700 ease-out delay-200 ${isRightColVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-background rounded-lg border border-gray-200/80 p-4">
                <img src="https://images.unsplash.com/photo-1599939563033-5964821c1822?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Map of North Goa" className="rounded-md object-cover w-full h-[28rem]"/>
            </div>
            <div className="mt-6">
                <h4 className="font-serif text-xl font-bold mb-2 text-text-dark">Our Service Areas</h4>
                <p className="text-text-light">We are headquartered in Calangute and actively serve communities across North Goa, including major operations in Mapusa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const LocationIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>;
const PhoneIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>;
const MailIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>;

export default Contact;