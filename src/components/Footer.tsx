
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-nature-forest text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-nature-sunset">Authen</span>Trip
            </div>
            <p className="text-lg opacity-90 mb-6 max-w-md">
              Découvrez des expériences authentiques et connectez-vous avec les communautés locales du monde entier.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-nature-sunset transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Découvrir</h3>
            <ul className="space-y-3">
              {['Destinations', 'Expériences', 'Guides Locaux', 'Avis Voyageurs'].map((item) => (
                <li key={item}>
                  <a href="#" className="opacity-90 hover:opacity-100 hover:text-nature-sunset transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {['Centre d\'aide', 'Contact', 'Sécurité', 'Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="opacity-90 hover:opacity-100 hover:text-nature-sunset transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="opacity-75">
            © 2024 AuthenTrip. Tous droits réservés. Créé avec passion pour les voyageurs authentiques.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
