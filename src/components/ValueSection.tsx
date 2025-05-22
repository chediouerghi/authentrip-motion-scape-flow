
import { useEffect, useState, useRef } from 'react';
import { Globe, Users, Leaf } from 'lucide-react';

const ValueSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      Icon: Globe,
      title: 'Authentic Experiences',
      description: 'Discover unique places with passionate local guides who share their culture and traditions'
    },
    {
      Icon: Users,
      title: 'Local Community',
      description: 'Support local communities directly and create meaningful connections that last a lifetime'
    },
    {
      Icon: Leaf,
      title: 'Sustainable Tourism',
      description: 'Travel responsibly with eco-friendly options that protect and preserve natural environments'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-nature-sand/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-nature-forest/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-nature-ocean/5 rounded-tr-full"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <span className="inline-block text-nature-sunset font-semibold text-lg mb-3 opacity-0 transform translate-y-10 transition-all duration-700" 
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }}>
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 opacity-0 transform translate-y-10 transition-all duration-1000" 
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)', transitionDelay: '100ms' }}>
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 transform translate-y-10 transition-all duration-1000" 
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)', transitionDelay: '200ms' }}>
            What makes us different and authentic
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden transform transition-all duration-700 hover:shadow-xl hover:shadow-nature-forest/10 hover:-translate-y-2 opacity-0"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 200}ms`
              }}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="mb-6 bg-nature-sand/20 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-nature-sunset/10 transition-all duration-300">
                  <value.Icon size={28} className="text-nature-sunset" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 flex-grow">{value.description}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href="#" className="text-nature-sunset font-medium flex items-center group-hover:text-nature-ocean transition-colors">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
