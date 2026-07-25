import siteConfig from '../config/siteConfig';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <footer className="bg-cream-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" className="font-volkhov text-2xl font-bold text-navy inline-block mb-4">
              {siteConfig.agencyName}
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Book your trip in minutes, get full control for much longer.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1DA1F2] transition-all duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#FF0000] transition-all duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-volkhov font-bold text-navy text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-navy transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-volkhov font-bold text-navy text-lg mb-5">Contact</h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-navy transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-volkhov font-bold text-navy text-lg mb-5">More</h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.more.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-navy transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Downloads */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-volkhov font-bold text-navy text-lg mb-5">Discover our app</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 bg-navy text-white rounded-xl px-4 py-2.5 hover:bg-navy/90 transition-colors group">
                <IoLogoGooglePlaystore className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] opacity-70">GET IT ON</p>
                  <p className="text-xs font-semibold">Google Play</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-navy text-white rounded-xl px-4 py-2.5 hover:bg-navy/90 transition-colors group">
                <IoLogoApple className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-[10px] opacity-70">Download on the</p>
                  <p className="text-xs font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Contact Bar */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat with us on WhatsApp: {siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-400">
            All rights reserved © {siteConfig.agencyName.replace('.', '')} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
