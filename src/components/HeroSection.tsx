
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop',
      title: 'UKRAINIAN CARPATHIANS',
      subtitle: 'Travel to the Carpathians is the most popular tourist destination in Ukraine, as this region is very beautiful. It's also one of the year-round resorts of Ukraine. Here guests can find picturesque mountain landscapes, ski resorts, medieval castles and fortresses, wine cellars and thermal springs.',
      location: 'Carpathes, Ukraine'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop',
      title: 'IMMERSION CULTURELLE',
      subtitle: 'Vivez des expériences locales inoubliables hors des sentiers battus dans des lieux préservés et authentiques.',
      location: 'Kyoto, Japon'
    },
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
      title: 'AVENTURES AUTHENTIQUES',
      subtitle: 'Voyagez de manière durable et soutenez les communautés locales tout en découvrant des paysages à couper le souffle.',
      location: 'Alpes Françaises'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black/10 flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Background Images with overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        </div>
      ))}
      
      {/* Main rounded container */}
      <div className="w-full max-w-[1400px] h-[85vh] rounded-[40px] overflow-hidden border border-white/20 backdrop-blur-sm bg-black/20 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        
        {/* Header navigation inside container */}
        <div className="relative z-20 p-6 md:p-8 flex justify-between items-center">
          <div className="text-white text-xl font-bold">Travel</div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Contact', 'Explore'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white/80 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-20 h-full flex flex-col p-6 sm:p-8 md:p-12 pt-12">
          {/* Vertical Navigation Indicators */}
          <div className="absolute left-6 sm:left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-12">
            {[0, 1, 2].map((index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)}
                className="flex items-center group"
              >
                <div className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/40'} transition-all duration-300`}></div>
              </button>
            ))}
          </div>
          
          {/* Main Content */}
          <div className="flex flex-col justify-between h-full">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white uppercase tracking-wide animate-slide-fade">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-8 max-w-lg animate-slide-fade">
                {slides[currentSlide].subtitle}
              </p>
              
              <button className="border border-white text-white hover:bg-white/10 w-36 py-2 px-6 rounded-full font-medium flex items-center justify-center group transition-all duration-300 transform hover:scale-105">
                Explore
              </button>
            </div>
            
            {/* Bottom section */}
            <div className="flex flex-col md:flex-row justify-between items-end pt-10 md:pt-0">
              {/* Social icons */}
              <div className="flex space-x-6 mb-6 md:mb-0">
                <Facebook size={18} className="text-white/80 hover:text-white cursor-pointer" />
                <Twitter size={18} className="text-white/80 hover:text-white cursor-pointer" />
                <Instagram size={18} className="text-white/80 hover:text-white cursor-pointer" />
              </div>
              
              {/* Popular Destinations Preview */}
              <div className="w-full md:w-auto">
                <div className="mb-3">
                  <span className="text-white/80 text-sm">Popular</span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-4">
                  {slides.map((slide, index) => (
                    <div 
                      key={index} 
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 rounded-xl overflow-hidden w-24 h-16 sm:w-28 sm:h-20 cursor-pointer transition-all duration-300 ${
                        index === currentSlide ? 'ring-2 ring-white' : 'ring-1 ring-white/30'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
