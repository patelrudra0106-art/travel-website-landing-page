import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import siteConfig from '../config/siteConfig';
import { IoMailOutline, IoSendSharp } from 'react-icons/io5';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="newsletter-card relative rounded-3xl lg:rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 right-8 hidden lg:block">
              <IoSendSharp className="w-16 h-16 text-coral/20 rotate-[-20deg]" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-navy/5 rounded-full hidden lg:block" />
            <div className="absolute -bottom-12 -right-2 w-48 h-48 border-2 border-navy/5 rounded-full hidden lg:block" />

            {/* Content */}
            <div className="max-w-xl mx-auto text-center relative z-10">
              <h2 className="font-volkhov text-2xl sm:text-3xl lg:text-[34px] font-bold text-navy leading-tight mb-8">
                Subscribe to get information, latest news and other interesting offers about {siteConfig.agencyName}
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border-0 text-sm text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange/40 shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className={`px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md ${
                    submitted
                      ? 'bg-green-500 text-white'
                      : 'bg-coral text-white hover:bg-coral/90 hover:shadow-lg'
                  }`}
                >
                  {submitted ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
