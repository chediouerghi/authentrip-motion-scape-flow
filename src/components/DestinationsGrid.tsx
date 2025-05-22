
import { useState } from 'react';

const DestinationsGrid = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const destinations = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      title: 'Cascades Secrètes',
      location: 'Montagnes du Nord',
      price: '89€',
      rating: 4.9
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      title: 'Lac Mystique',
      location: 'Forêt Enchantée',
      price: '125€',
      rating: 4.8
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop',
      title: 'Sommet Panoramique',
      location: 'Alpes Sauvages',
      price: '156€',
      rating: 4.9
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nature-sand/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-nature-forest mb-6 animate-reveal-up">
            Destinations Recommandées
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-reveal-up">
            Découvrez des lieux extraordinaires sélectionnés par nos experts locaux
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 animate-reveal-up cursor-pointer ${
                hoveredCard === index ? 'animate-card-hover' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">{destination.location}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-sm">{destination.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{destination.price}</span>
                  <button className="bg-nature-sunset hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105">
                    Réserver
                  </button>
                </div>
              </div>

              <div className={`absolute inset-0 bg-nature-ocean/20 transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGrid;
