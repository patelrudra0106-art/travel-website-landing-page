import ScrollReveal from './ScrollReveal';
import { IoLocationSharp, IoCardOutline, IoAirplaneOutline } from 'react-icons/io5';
import { FaHeart, FaUserFriends } from 'react-icons/fa';

const steps = [
  {
    icon: <IoLocationSharp className="w-5 h-5" />,
    color: '#F1A501',
    bgColor: '#FFF4DC',
    title: 'Choose Destination',
    description: 'Select your destination, travel dates, and preferred trip type to start planning.',
  },
  {
    icon: <IoCardOutline className="w-5 h-5" />,
    color: '#DF6951',
    bgColor: '#FDEAE6',
    title: 'Make Payment',
    description: 'Confirm your package and complete the secure payment process with flexible options.',
  },
  {
    icon: <IoAirplaneOutline className="w-5 h-5" />,
    color: '#006380',
    bgColor: '#D7F0F7',
    title: 'Reach Airport on Selected Date',
    description: 'Pack your bags, head to the airport, and get ready for an unforgettable journey.',
  },
];

export default function BookingSteps() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden" id="bookings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <p className="section-label">Easy and Fast</p>
                <h2 className="section-heading">
                  Book Your Next Trip<br />In 3 Easy Steps
                </h2>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: step.bgColor, color: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Visual */}
          <ScrollReveal direction="right">
            <div className="relative flex justify-center">
              {/* Main booking card */}
              <div className="bg-white rounded-3xl shadow-card-hover overflow-hidden w-[300px] sm:w-[340px]">
                <div className="relative">
                  <img
                    src="/Rectangle 17.jpg"
                    alt="Trip to Greece"
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                    <FaHeart className="w-4 h-4 text-coral" />
                  </button>
                </div>
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-volkhov font-bold text-navy">Trip To Greece</h3>
                    <span className="text-sm text-gray-400">14-29 June</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span>📍 by Rohith J</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="flex items-center gap-1 text-gray-400">
                      <IoAirplaneOutline className="w-4 h-4" /> Trip to Rome
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">40% completed</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange rounded-full transition-all duration-1000" style={{ width: '40%' }} />
                    </div>
                  </div>

                  {/* People going */}
                  <div className="flex items-center gap-3">
                    <FaUserFriends className="w-4 h-4 text-purple" />
                    <span className="text-sm text-gray-400">24 people going</span>
                  </div>
                </div>
              </div>

              {/* Floating "Trip to Rome" mini card */}
              <div className="absolute -right-4 top-[55%] bg-white rounded-2xl shadow-card p-3 animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=60&h=60&fit=crop&q=80"
                    alt="Rome"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-xs font-semibold text-navy">Ongoing</p>
                    <p className="text-xs text-gray-400">Trip to Rome</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
