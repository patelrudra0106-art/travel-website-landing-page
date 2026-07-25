import ScrollReveal from './ScrollReveal';

const partners = [
  {
    name: 'Axiom',
    svg: (
      <svg viewBox="0 0 120 36" className="h-8 w-auto">
        <text x="0" y="28" fontFamily="Arial Black, Arial" fontWeight="900" fontSize="28" fill="currentColor">axon</text>
      </svg>
    ),
  },
  {
    name: 'JetStar',
    svg: (
      <svg viewBox="0 0 140 36" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Arial" fontWeight="700" fontSize="24" fill="currentColor">Jetstar</text>
        <text x="90" y="22" fontFamily="Arial" fontWeight="900" fontSize="18" fill="#DF6951">★</text>
      </svg>
    ),
  },
  {
    name: 'Expedia',
    svg: (
      <svg viewBox="0 0 150 36" className="h-8 w-auto">
        <circle cx="14" cy="18" r="8" fill="#F1A501" opacity="0.6"/>
        <text x="28" y="26" fontFamily="Georgia, serif" fontWeight="700" fontSize="24" fill="currentColor">Expedia</text>
      </svg>
    ),
  },
  {
    name: 'Qantas',
    svg: (
      <svg viewBox="0 0 150 36" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="400" fontSize="24" fill="currentColor">Qantas</text>
      </svg>
    ),
  },
  {
    name: 'Alitalia',
    svg: (
      <svg viewBox="0 0 140 36" className="h-8 w-auto">
        <text x="0" y="26" fontFamily="Arial" fontWeight="400" fontSize="24" fill="currentColor">Alitalia</text>
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="partner-logo text-navy flex-shrink-0"
                title={partner.name}
              >
                {partner.svg}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
