import ScrollReveal from './ScrollReveal';
import siteConfig from '../config/siteConfig';
import packagesData from '../data/packages';
import { FaWhatsapp, FaHotel, FaPlane, FaHiking, FaCheck } from 'react-icons/fa';

export default function TravelPackage() {
  const pkg = packagesData[0];
  if (!pkg) return null;

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDestinationMessage(pkg.destination)
  )}`;

  return (
    <section className="py-20 lg:py-28 bg-cream-light" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label">Featured Package</p>
            <h2 className="section-heading">Premium Travel Experience</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-white rounded-3xl shadow-card overflow-hidden lg:flex">
            {/* Image */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {pkg.days} Days / {pkg.nights} Nights
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="font-volkhov text-2xl lg:text-3xl font-bold text-navy mb-2">
                {pkg.name}
              </h3>
              <p className="text-gray-400 mb-6">{pkg.destination}</p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-sm text-gray-400">Starting from</span>
                <span className="text-3xl font-bold text-orange">{pkg.startingPrice}</span>
                <span className="text-sm text-gray-400">per person</span>
              </div>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {pkg.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <FaCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="grid grid-cols-3 gap-4 mb-8 border-t border-gray-100 pt-6">
                <div className="text-center">
                  <FaHotel className="w-5 h-5 mx-auto mb-2 text-coral" />
                  <p className="text-xs text-gray-400">Hotel</p>
                  <p className="text-xs font-semibold text-navy mt-1">5 Star</p>
                </div>
                <div className="text-center">
                  <FaPlane className="w-5 h-5 mx-auto mb-2 text-orange" />
                  <p className="text-xs text-gray-400">Flights</p>
                  <p className="text-xs font-semibold text-navy mt-1">Emirates</p>
                </div>
                <div className="text-center">
                  <FaHiking className="w-5 h-5 mx-auto mb-2 text-purple" />
                  <p className="text-xs text-gray-400">Activities</p>
                  <p className="text-xs font-semibold text-navy mt-1">4 Included</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#enquiry"
                  className="flex-1 bg-orange text-white font-medium text-center py-3.5 rounded-xl shadow-button hover:shadow-button-hover hover:bg-orange-600 transition-all duration-300"
                >
                  View Package
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white font-medium text-center py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-md"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
