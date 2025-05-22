
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "./ui/carousel";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1920&h=1080&fit=crop',
      title: 'Paysages Naturels',
      subtitle: 'Explorez des destinations uniques avec des guides locaux passionnés',
      location: 'Alpes Françaises'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop',
      title: 'Immersion Culturelle',
      subtitle: 'Vivez des expériences locales inoubliables hors des sentiers battus',
      location: 'Kyoto, Japon'
    },
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
      title: 'Aventures Authentiques',
      subtitle: 'Voyagez de manière durable et soutenez les communautés locales',
      location: 'Carpathes, Ukraine'
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
    <section className="relative h-screen overflow-hidden bg-black/10">
      {/* Background Images */}
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
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
          </div>
        </div>
      ))}
      
      {/* Rounded overlay container */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 z-10 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        
        {/* Content Container */}
        <div className="h-full flex flex-col p-6 sm:p-10 md:p-16">
          
          {/* Vertical Navigation Indicators */}
          <div className="absolute left-6 sm:left-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-20">
            {slides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToSlide(index)}
                className="flex items-center group"
              >
                <div className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/40'} mr-2`}></div>
                <div className={`h-0.5 w-0 group-hover:w-10 transition-all duration-300 ${index === currentSlide ? 'bg-white w-10' : 'bg-white/40'}`}></div>
              </button>
            ))}
          </div>
          
          {/* Main Content */}
          <div className="mt-20 md:mt-16 lg:mt-0 flex-1 flex flex-col justify-center max-w-2xl">
            <div className="mb-4">
              <span className="bg-white/10 backdrop-blur-md text-white/90 px-4 py-1 rounded-full text-sm">
                {slides[currentSlide].location}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white uppercase tracking-wider animate-slide-fade">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-slide-fade">
              {slides[currentSlide].subtitle}
            </p>
            
            <button className="bg-white text-black hover:bg-white/90 w-40 py-3 px-6 rounded-full font-medium flex items-center justify-center group transition-all duration-300 transform hover:scale-105">
              Explore
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          {/* Popular Destinations Preview */}
          <div className="mb-6">
            <div className="mb-4">
              <span className="text-white/80 text-sm">Popular</span>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {slides.map((slide, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 rounded-xl overflow-hidden w-24 h-24 sm:w-32 sm:h-24 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => goToSlide(index)}
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
      
      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-20"
      >
        <ChevronRight size={40} />
      </button>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
