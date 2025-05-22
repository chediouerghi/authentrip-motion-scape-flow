
import { useEffect, useState } from 'react';

const ValueSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('value-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: '🌍',
      title: 'Expériences Authentiques',
      description: 'Découvrez des lieux uniques avec des guides locaux passionnés'
    },
    {
      icon: '🤝',
      title: 'Communauté Locale',
      description: 'Soutenez directement les communautés que vous visitez'
    },
    {
      icon: '🌱',
      title: 'Tourisme Durable',
      description: 'Voyagez de manière responsable et respectueuse de l\'environnement'
    }
  ];

  return (
    <section id="value-section" className="py-20 bg-nature-forest text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-nature-ocean to-nature-forest" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}>
            Nos Valeurs
          </h2>
          <p className={`text-xl opacity-90 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
          }`}>
            Ce qui nous rend différents et authentiques
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-1000 hover:bg-white/20 hover:transform hover:scale-105 ${
                isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${(index + 1) * 300}ms` }}
            >
              <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 500}ms` }}>
                {value.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-lg opacity-90">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
