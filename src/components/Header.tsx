
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-nature-forest">
            <span className="text-nature-ocean">Authen</span>Trip
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Accueil', 'Destinations', 'Expériences', 'À propos', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className={`relative font-medium transition-all duration-300 hover:text-nature-ocean ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nature-ocean after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-nature-ocean text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Commencer
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
