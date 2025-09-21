# Hippo Landing Page

A clean, single-page React + Tailwind landing site for Hippo - a permanent solution for temporary memorization.

## Features

- **Clean Design**: Minimal, modern interface with strong visual hierarchy
- **Responsive**: Optimized for all device sizes
- **Fast Loading**: Lightweight and performance-focused
- **Accessible**: Keyboard navigation and high contrast
- **Smooth Animations**: Subtle fade-in effects and smooth scrolling

## Design System

### Colors
- Light: `#cad2c5`
- Medium: `#84a98c` 
- Dark: `#52796f`
- Darker: `#354f52`
- Darkest: `#2f3e46`

### Typography
- **Display Font**: Silom (64px for main title)
- **Body Font**: Inter (clean sans-serif for all other text)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── App.js          # Main landing page component
├── index.js        # React entry point
└── index.css       # Tailwind styles and custom CSS
```

## Sections

1. **Sticky Header**: Hippo wordmark + Join Waitlist button
2. **Hero**: Main headline, subheadline, supporting text, CTA
3. **How & Why**: Section heading + teaser
4. **CTA Banner**: Dark background with call-to-action
5. **Footer**: Logo, copyright, privacy note

## External Links

- Waitlist Form: Opens in new tab to Google Forms
- All CTAs link to the same waitlist form
