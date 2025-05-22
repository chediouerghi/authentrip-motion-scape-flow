
import { useState } from 'react';

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
    <section className="py-20 bg-gradient-to-br from-nature-sand/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-nature-forest mb-6 animate-reveal-up">
              Contactez-Nous
            </h2>
            <p className="text-xl text-gray-600 animate-reveal-up">
              Prêt à commencer votre aventure authentique ?
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-reveal-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                      focusedField === 'name'
                        ? 'border-nature-ocean shadow-lg transform scale-105'
                        : 'border-gray-300'
                    }`}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-nature-ocean shadow-lg transform scale-105'
                        : 'border-gray-300'
                    }`}
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className={`w-full px-4 py-4 border-2 rounded-xl transition-all duration-300 resize-none ${
                    focusedField === 'message'
                      ? 'border-nature-ocean shadow-lg transform scale-105'
                      : 'border-gray-300'
                  }`}
                  placeholder="Parlez-nous de votre projet de voyage..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-nature-ocean hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
