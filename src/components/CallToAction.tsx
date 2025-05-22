
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-nature-ocean to-nature-forest relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 -left-12 w-40 h-40 rounded-full bg-white/10 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 rounded-full bg-nature-sunset/10 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-reveal-up leading-tight">
            Begin Your
            <span className="text-nature-sunset block mt-2">Authentic Adventure</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto animate-reveal-up">
            Join thousands of travelers who have discovered unforgettable experiences with AuthenTrip
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white hover:bg-white/90 text-gray-900 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 group">
              <span className="flex items-center">
                Discover Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-nature-sunset mb-4">500+</div>
            <div className="text-white text-lg">Unique Experiences</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-nature-sunset mb-4">50+</div>
            <div className="text-white text-lg">Destinations</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-nature-sunset mb-4">4.9★</div>
            <div className="text-white text-lg">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
