import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import siteConfig from '../config/siteConfig';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose, IoSendSharp } from 'react-icons/io5';

export default function TravelEnquiryForm() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',
    travelers: '2',
    budget: '',
    tripType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
      setFormData({
        name: '', phone: '', email: '', destination: '', travelDate: '',
        travelers: '2', budget: '', tripType: '', message: '',
      });
    }, 2500);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <>
      <section className="py-20 lg:py-28" id="enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="section-heading mb-6">
                Ready to Plan Your Next Adventure?
              </h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Tell us where you want to go and we'll help you create the perfect trip.
                Our travel experts are ready to craft your dream vacation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-orange text-white font-semibold px-10 py-4 rounded-xl shadow-button hover:shadow-button-hover hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Plan My Trip
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-semibold px-10 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-volkhov text-2xl font-bold text-navy">Plan Your Trip</h3>
                <p className="text-sm text-gray-400 mt-1">Fill in your details and we'll get back to you</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <IoClose className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                  <IoSendSharp className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-navy mb-2">Enquiry Sent!</h4>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Destination *</label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Travel Date</label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Travellers</label>
                    <input
                      type="number"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      min="1"
                      max="20"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Budget (₹)</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      placeholder="e.g., ₹50,000"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-500 mb-1 block">Trip Type</label>
                    <select
                      name="tripType"
                      value={formData.tripType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all bg-white"
                    >
                      <option value="">Select type</option>
                      {siteConfig.tripTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-1 block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all resize-none"
                    placeholder="Tell us about your dream trip..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange text-white font-semibold py-4 rounded-xl shadow-button hover:shadow-button-hover hover:bg-orange-600 transition-all duration-300"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
