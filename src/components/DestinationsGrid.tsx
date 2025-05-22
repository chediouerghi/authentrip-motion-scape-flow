
import { useState } from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';

const DestinationsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const destinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop',
      title: 'Santorini Sunset',
      location: 'Greek Islands',
      price: '€1,299',
      rating: 4.9,
      category: 'Island',
      days: 7
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?w=800&h=500&fit=crop',
      title: 'Ancient Kyoto',
      location: 'Japan',
      price: '€1,899',
      rating: 4.8,
      category: 'Cultural',
      days: 10
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1565604758525-57deeb340a22?w=800&h=500&fit=crop',
      title: 'Alpine Adventure',
      location: 'Switzerland',
      price: '€1,599',
      rating: 4.9,
      category: 'Mountain',
      days: 8
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-nature-sunset font-semibold">EXPLORE THE WORLD</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-xl">
              Extraordinary places selected by our local experts
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <a href="#" className="inline-flex items-center text-nature-sunset hover:text-nature-ocean font-medium transition-colors group">
              View all destinations
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium px-3 py-1 rounded-full">
                  {destination.category}
                </span>
              </div>
              
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location and rating */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-1 text-nature-sunset" />
                    {destination.location}
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{destination.title}</h3>
                
                {/* Duration */}
                <div className="mb-4 text-sm text-gray-500">
                  {destination.days} days / {destination.days - 1} nights
                </div>
                
                {/* Price and button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">From</span>
                    <p className="text-lg font-bold text-nature-forest">{destination.price}</p>
                  </div>
                  <button className="bg-nature-forest hover:bg-nature-forest/90 text-white px-4 py-2 rounded-lg transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View more section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-nature-sand/20 hover:bg-nature-sand/30 px-6 py-3 rounded-full transition-all cursor-pointer group">
            <span className="text-nature-forest font-medium">View more destinations</span>
            <div className="w-6 h-6 rounded-full bg-nature-sunset flex items-center justify-center text-white group-hover:bg-nature-ocean transition-colors">
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;
