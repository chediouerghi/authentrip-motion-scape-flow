
import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-nature-sunset font-semibold">GET IN TOUCH</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                Ready to start your authentic journey?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our travel experts are ready to create a personalized experience just for you. Reach out today and let's begin planning your next adventure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-nature-sand/20 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nature-sunset" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600">contact@authentrip.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-nature-sand/20 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nature-sunset" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                      focusedField === 'name'
                        ? 'border-nature-sunset shadow-sm'
                        : 'border-gray-200'
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-nature-sunset shadow-sm'
                        : 'border-gray-200'
                    }`}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-lg transition-all duration-300 resize-none focus:outline-none ${
                      focusedField === 'message'
                        ? 'border-nature-sunset shadow-sm'
                        : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your travel plans..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-nature-sunset hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
