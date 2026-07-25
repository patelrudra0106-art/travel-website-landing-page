import { IoNavigateOutline } from 'react-icons/io5';
import siteConfig from '../config/siteConfig';

export default function DestinationCard({ destination }) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDestinationMessage(destination.name + ', ' + destination.country)
  )}`;

  return (
    <div className="destination-card bg-white rounded-3xl overflow-hidden shadow-card group cursor-pointer flex-shrink-0 w-[280px] sm:w-auto">
      {/* Image */}
      <div className="relative overflow-hidden h-[280px] sm:h-[300px]">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          className="destination-img w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        {destination.popular && (
          <span className="absolute top-4 left-4 bg-coral text-white text-xs font-semibold px-3 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-volkhov text-lg font-bold text-navy">{destination.name}</h3>
            <p className="text-sm text-gray-400">{destination.country}</p>
          </div>
          <p className="text-lg font-bold text-navy">{destination.price}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <IoNavigateOutline className="w-4 h-4" />
            <span className="text-sm">{destination.duration}</span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            Enquire →
          </a>
        </div>
      </div>
    </div>
  );
}
