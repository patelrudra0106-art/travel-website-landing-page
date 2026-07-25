import { FaPlay } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';

// Hero images — served from Vite's public directory ('reference image/' folder)
const heroImage = '/Image.png';
const decorBlob = '/Decore.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0">
      {/* Decorative Background Blob (Decore.png from Figma reference) */}
      <img
        src={decorBlob}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[55%] h-auto hidden lg:block pointer-events-none select-none"
      />

      {/* Decorative small shapes */}
      <div className="hidden lg:block absolute top-36 right-[40%] animate-float-slow">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 0L35 21H56L39 34L46 56L28 42L10 56L17 34L0 21H21L28 0Z" fill="#DF6951" opacity="0.15" />
        </svg>
      </div>
      <div className="hidden lg:block absolute bottom-28 left-[6%] animate-bounce-gentle">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="18" fill="#747DEF" opacity="0.1" />
        </svg>
      </div>

      {/* Dashed airplane flight path decoration */}
      <div className="hidden lg:block absolute top-[26%] left-[44%] z-10">
        <svg width="260" height="200" viewBox="0 0 260 200" fill="none" className="opacity-40">
          <path d="M5 180C40 120 80 100 120 90C160 80 180 110 200 80C220 50 240 20 255 10" stroke="#DF6951" strokeWidth="2" strokeDasharray="8 6" strokeLinecap="round"/>
          {/* Small airplane at the end of path */}
          <g transform="translate(248, 6) rotate(-40)">
            <path d="M0 6L12 0L12 4L20 4L20 8L12 8L12 12L0 6Z" fill="#DF6951" opacity="0.8"/>
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up z-10">
            {/* Eyebrow */}
            <p className="text-sm font-bold tracking-[0.15em] uppercase text-coral">
              Best Destinations Around The World
            </p>

            {/* Main Heading */}
            <h1 className="font-volkhov text-[42px] sm:text-5xl lg:text-[68px] font-bold text-navy leading-[1.1] tracking-tight">
              Travel, enjoy
              <br />
              and live a new
              <br />
              and full life
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-gray-500 max-w-md leading-relaxed">
              {siteConfig.description} Discover amazing destinations and create unforgettable memories with our handpicked travel experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              {/* Primary CTA */}
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 bg-orange text-white font-medium text-sm px-7 py-4 rounded-xl shadow-button hover:shadow-button-hover hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Find Out More
              </a>

              {/* Play Demo */}
              <button className="flex items-center gap-4 group">
                <span className="w-14 h-14 rounded-full bg-coral flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <FaPlay className="w-4 h-4 text-white ml-0.5" />
                </span>
                <span className="text-sm font-medium text-navy/70 group-hover:text-navy transition-colors">
                  Play Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Image — Traveler on suitcase with airplane decorations */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Main hero traveler image (local reference) */}
              <img
                src={heroImage}
                alt="Happy traveler sitting on suitcase with backpack — ready for adventure"
                className="relative z-10 w-[320px] sm:w-[400px] lg:w-[470px] h-auto object-contain drop-shadow-2xl"
              />

              {/* Floating card — Top Destination */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-card p-4 z-20 animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Top Destination</p>
                    <p className="text-sm font-semibold text-navy">Santorini, Greece</p>
                  </div>
                </div>
              </div>

              {/* Floating card — Rating */}
              <div className="absolute top-16 -right-4 bg-white rounded-xl shadow-card px-4 py-3 z-20 animate-float-slow hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-orange text-lg">★</span>
                  <span className="text-sm font-semibold text-navy">4.8</span>
                  <span className="text-xs text-gray-400">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
