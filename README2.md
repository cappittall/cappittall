# 🚀 Portfolio Website - Hakan Çetin

Modern, responsive, full-featured portfolio website showcasing my work as a Full Stack Developer and AI Specialist.

## 🌟 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes
- **Fully Responsive**: Optimized for all devices
- **Interactive Animations**: Smooth transitions and engaging interactions
- **GitHub Integration**: Live stats from GitHub API
- **Project Showcase**: Filterable project gallery
- **Contact Form**: Easy way to get in touch
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (CSS Custom Properties, Grid, Flexbox)
- **JavaScript**: Vanilla JS (ES6+, Classes, Async/Await)
- **APIs**: GitHub REST API v3
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Icons**: Font Awesome 6
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
portfolio-website/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # All styles (7000+ lines)
│   ├── js/
│   │   ├── main.js          # Main JavaScript functionality
│   │   └── projects-data.js  # Project data & configuration
│   └── images/
│       ├── hero-bg.jpg
│       ├── profile.jpg
│       ├── about-workspace.jpg
│       ├── favicon.png
│       ├── og-image.png
│       ├── icons/            # Technology icons
│       └── projects/         # Project screenshots
├── AI_IMAGE_PROMPTS.md       # Guide for generating images with AI
└── README.md                 # This file
```

## 🎨 AI Image Generation

All required images can be generated using AI tools like Midjourney, DALL-E 3, or Stable Diffusion.

### Required Images:
- Hero background (1920x1080)
- Profile photo (800x800)
- Workspace photo (1200x800)
- Favicon (512x512)
- OG Image (1200x630)
- 18 Project screenshots (700x450 each)

**See `AI_IMAGE_PROMPTS.md` for detailed prompts and instructions.**

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/cappittall/portfolio-website.git
cd portfolio-website
```

### 2. Generate Images

Follow the guide in `AI_IMAGE_PROMPTS.md` to create all required images using AI tools.

Or use placeholder images temporarily:

```bash
# Create placeholder images
mkdir -p assets/images/projects assets/images/icons
# Use any placeholder image service or create simple colored rectangles
```

### 3. Customize Content

**Edit `index.html`:**
- Update personal information
- Modify sections as needed

**Edit `assets/js/projects-data.js`:**
- Update project list
- Add/remove projects
- Modify GitHub username

**Edit `assets/js/main.js`:**
- Update GitHub username in CONFIG object
- Optionally add GitHub token for higher API rate limits

### 4. Test Locally

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or just open index.html in browser
```

Visit: `http://localhost:8000`

### 5. Deploy to GitHub Pages

```bash
# Create new repo on GitHub: portfolio-website
git init
git add .
git commit -m "Initial commit - Modern portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main

# Enable GitHub Pages
# Go to repo Settings → Pages
# Source: Deploy from branch "main" / root
# Save
```

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-website/`

### 6. Custom Domain (Optional)

To use custom domain (e.g., `yourname.com`):

1. Create `CNAME` file in root with your domain:
```bash
echo "yourname.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

2. Add DNS records at your domain provider:
```
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

## 🎨 Customization Guide

### Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #ec4899;    /* Accent color */
    --accent-color: #14b8a6;       /* Secondary accent */
}
```

### Typography

Change fonts in `index.html` (Google Fonts) and CSS:

```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}
```

### Projects

Edit `assets/js/projects-data.js`:

```javascript
const projects = [
    {
        id: 1,
        title: "Your Project",
        description: "Project description...",
        image: "./assets/images/projects/your-project.jpg",
        tags: ["Python", "AI"],
        category: ["ai", "web"],
        github: "https://github.com/...",
        demo: "https://...",
        stars: 0,
        language: "Python"
    },
    // Add more projects...
];
```

### Typing Animation

Edit `assets/js/main.js`:

```javascript
const texts = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3',
];
```

## 📊 GitHub API Integration

The site fetches live data from GitHub API. For better rate limits:

1. Create GitHub Personal Access Token:
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select scopes: `public_repo`, `read:user`
   - Copy token

2. Add token to `assets/js/main.js`:

```javascript
const CONFIG = {
    githubUsername: 'your-username',
    githubToken: 'your_token_here',  // Optional but recommended
};
```

**Note:** Don't commit tokens to public repos! Use environment variables or GitHub Secrets for production.

## 🔧 Optimization

### Image Optimization

```bash
# Install ImageMagick
sudo apt install imagemagick

# Optimize all JPGs
find assets/images -name "*.jpg" -exec mogrify -quality 85 -strip {} \;

# Optimize PNGs (install pngquant)
find assets/images -name "*.png" -exec pngquant --ext .png --force {} \;
```

### Minification (Optional)

For production, minify CSS and JS:

```bash
# Install minifiers
npm install -g csso-cli terser

# Minify CSS
csso assets/css/style.css -o assets/css/style.min.css

# Minify JS
terser assets/js/main.js -o assets/js/main.min.js
terser assets/js/projects-data.js -o assets/js/projects-data.min.js

# Update index.html to use .min files
```

## 🧪 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Android

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome:

1. Fork the repo
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📞 Contact

**Hakan Çetin**
- Email: netcat16@gmail.com
- GitHub: [@cappittall](https://github.com/cappittall)
- LinkedIn: [cappittall](https://www.linkedin.com/in/cappittall/)
- Website: [cappittall.github.io](https://cappittall.github.io/cappittall/)

---

## 🗺️ Roadmap

- [ ] Generate all AI images
- [x] Complete HTML structure
- [x] Complete CSS styling
- [x] Complete JavaScript functionality
- [ ] Add blog section (optional)
- [ ] Add testimonials
- [ ] Analytics integration (Google Analytics)
- [ ] Performance optimization
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO optimization

---

## 📚 Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [Midjourney](https://www.midjourney.com/) - For AI image generation
- [TinyPNG](https://tinypng.com/) - Image compression

---

**Built with ❤️ by Hakan Çetin**

_Last updated: February 17, 2026_
