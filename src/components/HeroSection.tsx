
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1920&h=1080&fit=crop',
      title: 'DISCOVER EXTRAORDINARY PLACES',
      subtitle: 'Immerse yourself in breathtaking destinations and unforgettable experiences with our premium travel packages.',
      location: 'Santorini, Greece'
    },
    {
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&h=1080&fit=crop',
      title: 'CULTURAL IMMERSION',
      subtitle: 'Connect with local traditions and authentic experiences in carefully curated destinations around the world.',
      location: 'Kyoto, Japan'
    },
    {
      image: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1920&h=1080&fit=crop',
      title: 'LUXURY ADVENTURES',
      subtitle: 'Experience the perfect balance of excitement and comfort with our exclusive premium travel experiences.',
      location: 'Swiss Alps'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

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
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Images with overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}
      
      {/* Main content container */}
      <div className="w-full max-w-[1400px] h-[85vh] rounded-[30px] overflow-hidden border border-white/30 backdrop-blur-sm bg-black/30 relative z-10 flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
        
        {/* Header navigation */}
        <div className="relative z-20 p-6 md:p-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-nature-sunset">Authen</span>Trip
          </div>
          
          <div className="hidden md:flex space-x-10">
            {['Home', 'Destinations', 'Experiences', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-nature-sunset hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-nature-sunset hover:bg-nature-sunset/90 text-white px-5 py-2 rounded-full hidden md:block transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 relative z-20 flex">
          {/* Left content area */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-white animate-hero-fade tracking-wide leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl animate-slide-fade">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              <button className="bg-nature-sunset hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium flex items-center justify-center group transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Explore Destinations
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Watch Video
              </button>
            </div>
            
            <div className="mt-12 md:mt-16 flex items-center">
              <p className="text-white/70 text-sm mr-6">Current Location:</p>
              <p className="text-white font-medium">{slides[currentSlide].location}</p>
            </div>
          </div>
          
          {/* Right side controls area - only visible on larger screens */}
          <div className="hidden lg:flex w-2/5 p-8 items-end justify-end">
            <div className="flex flex-col gap-6 items-end">
              {/* Social icons */}
              <div className="flex space-x-6 mb-10">
                <Facebook size={18} className="text-white/80 hover:text-white cursor-pointer transform hover:scale-110 transition-all" />
                <Twitter size={18} className="text-white/80 hover:text-white cursor-pointer transform hover:scale-110 transition-all" />
                <Instagram size={18} className="text-white/80 hover:text-white cursor-pointer transform hover:scale-110 transition-all" />
              </div>
              
              {/* Navigation controls */}
              <div className="flex gap-6 items-center">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom indicators */}
        <div className="relative z-20 p-6 md:p-8 flex justify-center lg:justify-start lg:px-16">
          <div className="flex space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-16 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-nature-sunset w-24' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
