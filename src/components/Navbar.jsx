import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoChevronDown } from 'react-icons/io5';
import siteConfig from '../config/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-nav py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-volkhov text-2xl md:text-3xl font-bold text-navy flex-shrink-0">
          {siteConfig.agencyName}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="text-sm font-medium text-navy border border-navy/20 rounded-md px-4 py-2 hover:bg-navy hover:text-white transition-all duration-200"
          >
            Sign Up
          </a>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              EN <IoChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-card py-2 min-w-[100px]">
                {['EN', 'HI', 'FR', 'ES'].map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-4 py-2 text-sm text-navy/70 hover:bg-cream hover:text-navy transition-colors"
                    onClick={() => setLangOpen(false)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 transition-transform duration-500 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-6 mb-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl font-medium text-navy hover:text-orange transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <hr className="border-gray-100 mb-6" />
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-navy/70 hover:text-navy transition-colors">
              Login
            </a>
            <a href="#" className="text-lg font-medium text-navy border border-navy/20 rounded-lg px-6 py-3 text-center hover:bg-navy hover:text-white transition-all">
              Sign Up
            </a>
            <a
              href="#enquiry"
              className="bg-orange text-white font-semibold rounded-lg px-6 py-3 text-center shadow-button hover:shadow-button-hover hover:bg-orange-600 transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Plan Your Trip
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
