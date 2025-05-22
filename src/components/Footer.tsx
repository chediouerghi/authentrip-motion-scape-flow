
import { Facebook, Instagram, Youtube, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Top section with form */}
        <div className="py-16 border-b border-gray-800">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-400 mb-2">
                Get the latest travel tips and exclusive offers right in your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-wrap md:flex-nowrap gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow min-w-0 px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-sunset"
                />
                <button className="px-6 py-3 bg-nature-sunset hover:bg-orange-600 text-white rounded-lg whitespace-nowrap transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-nature-sunset">Authen</span>Trip
            </div>
            <p className="text-gray-400 mb-8 max-w-xs">
              Discover authentic experiences and connect with local communities around the world.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-nature-sunset transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Destinations', 'Experiences', 'Local Guides', 'Travel Reviews', 'Travel Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-nature-sunset transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-xs">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              {['Help Center', 'Contact', 'Privacy Policy', 'Terms & Conditions', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-nature-sunset transition-colors duration-300 flex items-center">
                    <span className="mr-2 text-xs">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-nature-sunset flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Travel Street, Suite 100<br />Destination City, DT 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-nature-sunset flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-nature-sunset flex-shrink-0" />
                <span className="text-gray-400">contact@authentrip.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright section */}
        <div className="py-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500">
            © {currentYear} AuthenTrip. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
