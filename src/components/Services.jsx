import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import servicesData from '../data/services';

const ServiceIcon = ({ type, color }) => {
  const icons = {
    weather: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 6C20 6 24 14 24 20C24 26 20 34 20 34C20 34 16 26 16 20C16 14 20 6 20 6Z" fill={color} opacity="0.8"/>
        <circle cx="20" cy="20" r="6" fill={color}/>
        <path d="M10 12L14 16M30 12L26 16M10 28L14 24M30 28L26 24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 2V8M20 32V38M2 20H8M32 20H38" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    flight: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L8 18H16L12 36L32 16H22L28 4H20Z" fill={color} opacity="0.85"/>
      </svg>
    ),
    events: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="10" width="28" height="24" rx="4" fill={color} opacity="0.2"/>
        <rect x="6" y="10" width="28" height="8" rx="4" fill={color} opacity="0.8"/>
        <circle cx="15" cy="26" r="2" fill={color}/>
        <circle cx="25" cy="26" r="2" fill={color}/>
        <path d="M14 6V12M26 6V12" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    customization: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L4 14V26L20 36L36 26V14L20 4Z" fill={color} opacity="0.15"/>
        <path d="M20 8L8 16V24L20 32L32 24V16L20 8Z" fill={color} opacity="0.35"/>
        <path d="M20 14L14 18V22L20 26L26 22V18L20 14Z" fill={color} opacity="0.7"/>
      </svg>
    ),
  };
  return icons[type] || null;
};

export default function Services() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="py-20 lg:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label">Category</p>
            <h2 className="section-heading">We Offer Best Services</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <div
                className={`service-card relative bg-white rounded-3xl p-8 text-center cursor-pointer group ${
                  activeCard === service.id ? 'shadow-card-hover -translate-y-1.5' : 'shadow-none hover:shadow-card'
                }`}
                onMouseEnter={() => setActiveCard(service.id)}
              >
                {/* Decorative accent */}
                {activeCard === service.id && (
                  <div
                    className="service-accent absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full transition-opacity duration-300"
                    style={{ backgroundColor: service.color, opacity: 1 }}
                  />
                )}

                {/* Icon */}
                <div
                  className="w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.bgColor }}
                >
                  <ServiceIcon type={service.icon} color={service.color} />
                </div>

                {/* Title */}
                <h3 className="font-volkhov text-lg font-bold text-navy mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Decorative coral shape */}
      <div className="relative">
        <div className="absolute -top-20 left-0 w-24 h-48 bg-coral/5 rounded-r-full hidden lg:block" />
      </div>
    </section>
  );
}
