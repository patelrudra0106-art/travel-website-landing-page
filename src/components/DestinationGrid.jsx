import ScrollReveal from './ScrollReveal';
import DestinationCard from './DestinationCard';
import destinations from '../data/destinations';

export default function DestinationGrid() {
  return (
    <section className="py-20 lg:py-28" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label">Top Selling</p>
            <h2 className="section-heading">Top Destinations</h2>
          </div>
        </ScrollReveal>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <ScrollReveal key={dest.id} delay={index * 150}>
              <DestinationCard destination={dest} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {destinations.map((dest) => (
            <div key={dest.id} className="snap-center">
              <DestinationCard destination={dest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
