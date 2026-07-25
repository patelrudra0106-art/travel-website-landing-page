import { useState, useEffect, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';
import testimonialsData from '../data/testimonials';
import { IoChevronBack, IoChevronForward, IoStar } from 'react-icons/io5';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsData.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const testimonial = testimonialsData[current];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left heading */}
          <ScrollReveal direction="left">
            <div>
              <p className="section-label">Testimonials</p>
              <h2 className="section-heading">
                What People Say<br />About Us.
              </h2>

              {/* Pagination dots */}
              <div className="flex items-center gap-3 mt-8">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-8 h-3 bg-navy'
                        : 'w-3 h-3 bg-navy/15 hover:bg-navy/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right testimonial card */}
          <ScrollReveal direction="right">
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="bg-white rounded-3xl shadow-testimonial p-8 lg:p-10 transition-all duration-500 relative">
                {/* Quote decoration */}
                <div className="absolute -top-4 -left-2 text-6xl text-orange/20 font-volkhov select-none leading-none">"</div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <IoStar
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-orange' : 'text-gray-200'}`}
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-500 leading-relaxed mb-8 text-sm lg:text-base min-h-[80px]">
                  {testimonial.review}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange/20"
                  />
                  <div>
                    <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="absolute -bottom-5 right-8 flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-navy hover:bg-orange hover:text-white transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <IoChevronBack className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full bg-white shadow-card flex items-center justify-center text-navy hover:bg-orange hover:text-white transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <IoChevronForward className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Background shadow card (peek of next testimonial) */}
              <div className="absolute top-6 -right-3 w-full h-full bg-white/50 rounded-3xl shadow-card -z-10 hidden lg:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
