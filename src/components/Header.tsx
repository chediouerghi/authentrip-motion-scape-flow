
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'bg-black/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-nature-sunset">Authen</span>Trip
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative font-medium transition-all duration-300 text-white hover:text-nature-sunset after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-nature-sunset after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </div>

          <div>
            <button className="hidden md:block bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
            
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 bg-black/95 z-50 transition-all duration-300 transform ${
        mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
        <div className="flex flex-col h-full justify-center items-center">
          <button 
            className="absolute top-6 right-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col space-y-8 items-center">
            {['Home', 'Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-medium text-white hover:text-nature-sunset transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            
            <button className="mt-8 bg-nature-sunset text-white px-8 py-3 rounded-full hover:bg-nature-sunset/90 transition-all duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
