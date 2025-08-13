# Black Domain Protocol - Marketing Website

## Overview
Marketing website for the Black Domain Protocol - a campaign to encrypt Ethereum's mempool and protect users from MEV extraction.

## Quick Start

1. Fork this repository
2. Enable GitHub Pages in Settings → Pages
3. Select source: Deploy from branch (main, /docs folder)
4. Your site will be live at: `https://[your-username].github.io/black-domain-website`

## Local Development

```bash
# Clone the repository
git clone https://github.com/[your-username]/black-domain-website.git

# Navigate to project
cd black-domain-website

# Open in browser (or use a local server)
open docs/index.html

# For local server (if you have Python)
cd docs
python -m http.server 8000
# Visit http://localhost:8000
```

## Customization

### Colors
Edit CSS variables in `docs/css/style.css`:
```css
:root {
    --dark-forest: #0a0e1a;
    --black-domain: #000000;
    --ethereum-blue: #627eea;
    --danger-red: #ff3366;
    --safe-green: #00d395;
}
```

### Content
- Hero text: Edit `<h1>` and `<h2>` in the hero section
- Statistics: Update `data-value` attributes in stat cards
- Links: Update social links in footer

### MEV Counter
Adjust the counter speed in `animations.js`:
```javascript
setInterval(() => {
    current += Math.floor(Math.random() * 1000) + 100;
    counter.textContent = '$' + current.toLocaleString();
}, 100); // Change interval here
```

## Custom Domain

1. Add a CNAME file to `/docs` with your domain:
```
blackdomain.xyz
```

2. Configure DNS with your domain provider:
- A record: 185.199.108.153
- CNAME: [your-username].github.io

## Analytics

Add your analytics script before `</head>`:
```html
<!-- Plausible -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>

<!-- OR Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimization
- Lazy load images
- Minify CSS/JS for production
- Use WebP format for images
- Enable Gzip compression

## Contributing
Pull requests welcome! Please follow the existing code style.

## License
MIT

## Contact
- Twitter: [@blackdomain](https://twitter.com/blackdomain)
- GitHub: [black-domain-protocol](https://github.com/black-domain-protocol)