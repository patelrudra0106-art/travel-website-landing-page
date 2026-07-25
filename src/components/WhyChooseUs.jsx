import ScrollReveal from './ScrollReveal';
import { IoShieldCheckmarkOutline, IoWalletOutline, IoHeadsetOutline, IoColorPaletteOutline } from 'react-icons/io5';

const benefits = [
  {
    icon: <IoShieldCheckmarkOutline className="w-8 h-8" />,
    color: '#DF6951',
    bgColor: '#FDEAE6',
    title: 'Handpicked Destinations',
    description: 'Every destination in our catalog is personally vetted by our travel experts for quality and safety.',
  },
  {
    icon: <IoWalletOutline className="w-8 h-8" />,
    color: '#F1A501',
    bgColor: '#FFF4DC',
    title: 'Best Price Guarantee',
    description: 'We match any competitor price and offer exclusive deals you won\'t find anywhere else.',
  },
  {
    icon: <IoHeadsetOutline className="w-8 h-8" />,
    color: '#006380',
    bgColor: '#D7F0F7',
    title: '24/7 Travel Support',
    description: 'Our dedicated support team is available round the clock during your entire trip for any assistance.',
  },
  {
    icon: <IoColorPaletteOutline className="w-8 h-8" />,
    color: '#747DEF',
    bgColor: '#E7E9FF',
    title: 'Customized Experiences',
    description: 'No cookie-cutter tours — every itinerary is tailored to your unique preferences and travel style.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label">Why Us</p>
            <h2 className="section-heading">Why Travel With Us?</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="text-center group cursor-pointer p-6 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-card">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: benefit.bgColor, color: benefit.color }}
                >
                  {benefit.icon}
                </div>
                <h3 className="font-volkhov text-lg font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
