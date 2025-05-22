
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DestinationsGrid from '../components/DestinationsGrid';
import ValueSection from '../components/ValueSection';
import ContactForm from '../components/ContactForm';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-inter bg-black">
      <Header />
      <HeroSection />
      <div className="bg-white">
        <DestinationsGrid />
        <ValueSection />
        <ContactForm />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
