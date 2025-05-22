
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
          ? 'bg-black/70 backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-nature-sunset">Authen</span>Trip
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Accueil', 'Destinations', 'Expériences', 'À propos', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative font-medium transition-all duration-300 text-white hover:text-nature-sunset after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nature-sunset after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
            Commencer
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
