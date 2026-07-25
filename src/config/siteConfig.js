/**
 * Jadoo. Travel Agency — Site Configuration
 * 
 * Edit this file to customize the template for any travel agency.
 * All branding, contact info, and social links are centralized here.
 */

const siteConfig = {
  // ===== Brand =====
  agencyName: 'Jadoo.',
  tagline: 'Travel, Enjoy and Live a New Life',
  description: 'Book your trip in minutes, get full control for much longer.',
  
  // ===== Contact =====
  phone: '+91 98765 43210',
  email: 'hello@jadootravel.in',
  address: '123 MG Road, Bengaluru, Karnataka 560001',
  
  // ===== WhatsApp =====
  whatsappNumber: '919876543210', // without + sign
  whatsappDefaultMessage: 'Hello, I would like to know more about your travel packages.',
  whatsappDestinationMessage: (destination) => 
    `Hello, I am interested in the ${destination} travel package. Please share more details.`,
  
  // ===== Social Media =====
  social: {
    facebook: 'https://facebook.com/jadootravel',
    instagram: 'https://instagram.com/jadootravel',
    twitter: 'https://twitter.com/jadootravel',
    youtube: 'https://youtube.com/jadootravel',
    linkedin: 'https://linkedin.com/company/jadootravel',
  },
  
  // ===== Navigation =====
  navLinks: [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Hotels', href: '#hotels' },
    { label: 'Flights', href: '#flights' },
    { label: 'Bookings', href: '#bookings' },
  ],
  
  // ===== Colors (reference — actual colors in tailwind.config.js) =====
  colors: {
    primary: '#F1A501',     // Orange/Yellow
    secondary: '#DF6951',   // Coral
    navy: '#14183E',        // Dark navy text
    purple: '#747DEF',      // Accent purple
    cream: '#FFF1DA',       // Light cream
  },
  
  // ===== Footer Links =====
  footerLinks: {
    company: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Mobile', href: '#' },
    ],
    contact: [
      { label: 'Help / FAQ', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Affiliates', href: '#' },
    ],
    more: [
      { label: 'Airlinefees', href: '#' },
      { label: 'Airline', href: '#' },
      { label: 'Low fare tips', href: '#' },
    ],
  },
  
  // ===== Trip Types =====
  tripTypes: [
    'Honeymoon',
    'Family Vacation',
    'Adventure',
    'International',
    'Domestic',
    'Weekend Getaway',
    'Business Travel',
  ],
};

export default siteConfig;
