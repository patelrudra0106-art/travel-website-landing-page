import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import siteConfig from '../config/siteConfig';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
      return () => clearTimeout(tooltipTimer);
    }
  }, [visible]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-card-hover p-4 max-w-[220px] animate-fade-in relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-200 transition-colors"
          >
            <IoClose className="w-3 h-3" />
          </button>
          <p className="text-sm text-navy font-medium mb-1">Need help planning? 👋</p>
          <p className="text-xs text-gray-400">Chat with our travel experts on WhatsApp</p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(false)}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
