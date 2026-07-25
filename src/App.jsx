import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DestinationGrid from './components/DestinationGrid';
import BookingSteps from './components/BookingSteps';
import TravelPackage from './components/TravelPackage';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import TravelEnquiryForm from './components/TravelEnquiryForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DestinationGrid />
        <BookingSteps />
        <TravelPackage />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <Newsletter />
        <TravelEnquiryForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
