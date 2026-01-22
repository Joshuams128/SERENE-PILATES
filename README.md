# Serene Pilates

A modern, responsive website for Serene Pilates studio built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Features

- 🎨 Modern, clean design with custom color palette
- 📱 Fully responsive (mobile-first approach)
- ⚡ Fast page loads with Next.js optimizations
- 🔒 Security headers configured
- 🎯 SEO-friendly with metadata
- 🗺️ Google Maps integration on Contact page
- 📅 Hapana booking widget integration
- 🔗 Social media and mobile app links

## Color Palette

- Primary Green: `#606C37`
- Dark Green: `#283517`
- Cream/Off-white: `#FEFAE0`
- Accent Orange: `#DDA05F` / `#BC6C24`

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── booking/
│   │   └── page.tsx
│   ├── classes/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
└── types/
    └── index.ts
```

## Pages

1. **Home (`/`)** - Hero section with CTAs
2. **Classes (`/classes`)** - Class types and descriptions
3. **Book Now (`/booking`)** - Hapana booking widget integration
4. **Pricing (`/pricing`)** - Tabs for Memberships, Class Packs, Drop-Ins
5. **About (`/about`)** - Studio story and instructor bios
6. **Contact (`/contact`)** - Contact form (mailto), Google Maps, location info
7. **FAQ (`/faq`)** - Accordion-style FAQs
8. **404** - Custom error page

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

## Integrations

### Hapana Booking Widget

The booking widget is integrated on the `/booking` page and loads the script from:
```
https://widget.hapana.com/hapana_widget.js
```

### Google Maps

The contact page includes a Google Maps embed showing the studio location.

### Social Media & Apps

Links to social media (Instagram, Facebook, TikTok) and mobile apps (iOS App Store, Google Play) are included in the footer.

## Next Steps

The project structure is ready for Figma design integration. Each page has a placeholder ready to receive the converted design code.

## License

Private - All rights reserved by Serene Pilates