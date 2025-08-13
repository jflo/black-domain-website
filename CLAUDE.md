# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a static marketing website for the Black Domain Protocol - a campaign to encrypt Ethereum's mempool and protect users from MEV extraction. The project uses "Dark Forest" and "Black Domain" metaphors from Liu Cixin's Three Body Problem.

## Development Setup
This is a static website project that runs entirely in the browser with no build process required.

```bash
# Serve locally (if Python is available)
cd docs
python -m http.server 8000
# Visit http://localhost:8000

# Or simply open the HTML file
open docs/index.html
```

## Architecture
- **Static Site**: Pure HTML/CSS/JavaScript with no framework dependencies
- **GitHub Pages**: Deployed from the `/docs` folder
- **Single Page**: All content on one scrolling page with smooth navigation
- **Responsive**: Mobile-first design with CSS Grid and Flexbox

## Key Components
- **Hero Section**: Animated canvas with glitch text effects and MEV counter
- **Problem Section**: Interactive wallet scanner and MEV statistics
- **Solution Section**: Before/after transaction flow visualization 
- **Timeline**: Step-by-step explanation with scroll animations
- **CTA Section**: Three audience-specific call-to-action cards

## File Structure
```
docs/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles with CSS custom properties
├── js/
│   ├── animations.js  # Canvas animations and scroll effects
│   └── mev-calculator.js # Mock wallet scanning functionality
└── assets/            # Images and icons (to be added)
```

## Styling Guidelines
- **CSS Variables**: All colors and common values defined in `:root`
- **Dark Theme**: Black gradient background throughout
- **Color Palette**: 
  - Dark Forest: `#0a0e1a`
  - Black Domain: `#000000` 
  - Ethereum Blue: `#627eea`
  - Danger Red: `#ff3366`
  - Safe Green: `#00d395`

## JavaScript Features
- **Canvas Animation**: Particle system showing MEV bots hunting transactions
- **Counter Animations**: Live-updating MEV extraction amounts
- **Intersection Observer**: Trigger animations when sections enter viewport  
- **Smooth Scrolling**: Navigation between sections
- **Mock API**: Simulated wallet scanning with generated results

## Deployment
- **GitHub Pages**: Automatically deploys from `/docs` folder on main branch
- **Custom Domain**: Add CNAME file to `/docs` directory
- **No Build Process**: Direct deployment of static files

## Content Updates
- Statistics: Update `data-value` attributes in HTML
- MEV Counter: Modify starting value and increment logic in `animations.js`
- Social Links: Update footer links with actual URLs
- Copy: All marketing text is in the HTML file

## Performance Notes
- Vanilla JavaScript for minimal bundle size
- CSS animations over JavaScript for better performance
- Responsive images should be added to `/docs/assets/`
- Consider lazy loading for production deployment