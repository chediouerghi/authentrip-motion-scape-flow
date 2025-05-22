
const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-nature-ocean to-nature-forest relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-reveal-up">
          Commencez Votre
          <span className="block text-nature-sunset">Aventure Authentique</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-reveal-up">
          Rejoignez des milliers de voyageurs qui ont découvert des expériences inoubliables avec AuthenTrip
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-reveal-up">
          <button className="bg-nature-sunset hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-110 animate-pulse-glow">
            Découvrir Maintenant
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-nature-ocean px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-110">
            En Savoir Plus
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-white animate-reveal-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-nature-sunset mb-2">500+</div>
            <div className="text-sm md:text-base opacity-90">Expériences Uniques</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-nature-sunset mb-2">50+</div>
            <div className="text-sm md:text-base opacity-90">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-nature-sunset mb-2">4.9★</div>
            <div className="text-sm md:text-base opacity-90">Note Moyenne</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
