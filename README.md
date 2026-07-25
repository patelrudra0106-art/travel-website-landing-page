# ✈️ Jadoo — Premium Travel Agency Website Template

<div align="center">

![Jadoo Banner](https://img.shields.io/badge/Status-GitHub%20Ready-success?style=for-the-badge&logo=github)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

*A state-of-the-art, responsive, and customizable travel agency landing page built with React, Vite, and Tailwind CSS.*

---

</div>

## 🌟 Overview

**Jadoo** is a modern, premium travel agency website landing page designed with best-in-class UI/UX aesthetics inspired by contemporary Figma design systems. Built specifically as a reusable, agency-grade template, it features clean typography (Google Fonts **Poppins** & **Volkhov**), vibrant color palettes, smooth micro-animations, glassmorphism accents, and interactive booking workflows.

Whether you are building for a boutique travel startup, a luxury vacation agency, or an adventure tour operator, Jadoo provides an immaculate foundation that can be customized in minutes.

---

## ✨ Key Features

- **🎨 Premium Modern Design:** Curated color palette featuring dark navy typography, warm yellow/orange primary CTAs, and coral accent gradients.
- **📱 Fully Responsive:** Perfectly scaled across mobile, tablet, laptop, and desktop viewports using Tailwind CSS utility workflows.
- **⚡ Lightning Fast Performance:** Powered by Vite 6 and React 18 for instantaneous hot-module replacement (HMR) and optimal production bundle sizes.
- **🏝️ Dynamic Destinations & Packages:** Interactive cards with hover zoom animations, detailed pricing, rating badges, and itinerary highlights.
- **📅 Interactive Booking & Enquiry Flows:** Built-in modal dialogs and forms for instant trip reservations and general travel inquiries.
- **💬 Direct WhatsApp Integration:** Custom floating action button and booking triggers that connect customers directly to travel agents via WhatsApp web-intents.
- **✨ Micro-Animations & Glassmorphism:** Subtle floating element animations, glowing shadows, and backdrop blur effects for a truly state-of-the-art feel.
- **📂 Clean Modular Architecture:** Structured separation of concerns with centralized data (`src/data/`), configuration (`src/config/`), and reusable UI components (`src/components/`).

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
| :--- | :--- | :--- |
| **React** | Component-driven UI library | `^18.3.1` |
| **Vite** | Next-generation frontend build tool | `^6.0.5` |
| **Tailwind CSS** | Utility-first CSS framework for rapid styling | `^3.4.17` |
| **Lucide / React Icons** | Premium vector iconography | `^5.7.0` |
| **Google Fonts** | Typography hierarchy (*Poppins* & *Volkhov*) | Web Fonts |

---

## 📁 Project Structure

```text
Travel Website Landing Page/
│
├── public/                 # Static assets and favicons
├── src/
│   ├── components/         # Reusable UI & section components
│   │   ├── Navbar.jsx            # Sticky responsive navigation header
│   │   ├── Hero.jsx              # High-impact hero section with CTA & stats
│   │   ├── Services.jsx          # Category & service offerings grid
│   │   ├── DestinationGrid.jsx   # Top destinations grid layout
│   │   ├── DestinationCard.jsx   # Interactive destination card with hover zoom
│   │   ├── TravelPackage.jsx     # Featured travel packages & pricing details
│   │   ├── BookingSteps.jsx      # Step-by-step booking process preview
│   │   ├── WhyChooseUs.jsx       # Value proposition & highlights
│   │   ├── Testimonials.jsx      # Interactive client reviews carousel
│   │   ├── Partners.jsx          # Airline & hospitality partner logos
│   │   ├── Newsletter.jsx        # Email subscription call-to-action
│   │   ├── TravelEnquiryForm.jsx # General travel inquiry modal & form
│   │   ├── WhatsAppButton.jsx    # Direct floating WhatsApp chat trigger
│   │   ├── ScrollReveal.jsx      # Smooth scroll animation wrapper
│   │   └── Footer.jsx            # Comprehensive sitemap, social & copyright
│   │
│   ├── config/             # Centralized site configurations & constants
│   ├── data/               # Mock travel destinations, packages & copy
│   ├── App.jsx             # Main application layout wrapper
│   ├── main.jsx            # Application entry point & DOM root
│   └── index.css           # Tailwind base directives & custom utilities
│
├── .gitignore              # Configured for GitHub (excludes node_modules, dist, .env)
├── index.html              # HTML Document template with SEO meta tags
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Exact dependency lockfile (committed for parity)
├── tailwind.config.js      # Tailwind theme extensions, fonts & custom colors
└── vite.config.js          # Vite bundler configuration
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### 1. Prerequisites
Ensure you have **Node.js** (version 18+ recommended) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Installation
Clone or navigate to the repository directory and install dependencies:
```bash
cd "Travel Website Landing Page"
npm install
```

### 3. Running Development Server
Start the local Vite development server with instant HMR:
```bash
npm run dev
```
Open your browser and navigate to the URL displayed in the terminal (typically `http://localhost:5173`).

### 4. Building for Production
To create an optimized, minified production build:
```bash
npm run build
```
The compiled static assets will be generated in the `dist/` directory, ready to be deployed to Vercel, Netlify, GitHub Pages, or AWS Amplify.

### 5. Previewing Production Build
To test the production build locally before deployment:
```bash
npm run preview
```

---

## 🎨 Customization Guide

This template is built specifically for web agencies and developers to easily rebrand and customize for different clients:

1. **Brand Colors & Theme:** Open `tailwind.config.js` to modify primary/secondary theme colors, custom box shadows, and font families.
2. **Site Copy & Navigation:** Update navigation links, company details, and social URLs in `src/config/`.
3. **Destinations & Packages:** Add or edit trip itineraries, pricing, image URLs, and highlights in `src/data/`.
4. **WhatsApp Phone Number:** In your configuration or form handler components, update the destination phone number string to route WhatsApp booking inquiries to your client's sales team.

---

## 🤝 Contributing & License

This project is open-source and ready for commercial customization. 
Feel free to fork, enhance, and submit pull requests!

**License:** MIT License — Free for personal and commercial use.
