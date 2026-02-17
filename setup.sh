#!/bin/bash
# Portfolio Website Quick Setup Script
# Usage: bash setup.sh

echo "🚀 Portfolio Website Setup"
echo "=========================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Run this script from the portfolio-website directory."
    exit 1
fi

echo "📁 Creating image directories..."
mkdir -p assets/images/projects
mkdir -p assets/images/icons
echo "✅ Directories created"

echo ""
echo "📝 Next steps:"
echo "1. Generate images using AI tools (see AI_IMAGE_PROMPTS.md)"
echo "2. Place images in assets/images/ directory"
echo "3. Update personal information in index.html"
echo "4. Update GitHub username in assets/js/main.js"
echo "5. Test locally: python -m http.server 8000"
echo "6. Deploy to GitHub Pages (see README.md)"

echo ""
echo "🎨 Required images:"
echo "   - assets/images/hero-bg.jpg"
echo "   - assets/images/profile.jpg"
echo "   - assets/images/about-workspace.jpg"
echo "   - assets/images/favicon.png"
echo "   - assets/images/og-image.png"
echo "   - assets/images/projects/*.jpg (18 files)"
echo ""

# Optional: Create placeholder file list
echo "📋 Creating image checklist..."
cat > IMAGE_CHECKLIST.md << 'EOF'
# Image Checklist

## Essential Images
- [ ] hero-bg.jpg (1920x1080)
- [ ] profile.jpg (800x800)
- [ ] about-workspace.jpg (1200x800)
- [ ] favicon.png (512x512)
- [ ] og-image.png (1200x630)

## Project Images (700x450 each)
- [ ] projects/chatbot.jpg
- [ ] projects/callcenter.jpg
- [ ] projects/face-analytics.jpg
- [ ] projects/pycoral.jpg
- [ ] projects/efficientnet.jpg
- [ ] projects/video-analytics.jpg
- [ ] projects/laser.jpg
- [ ] projects/marketplace.jpg
- [ ] projects/assistant-api.jpg
- [ ] projects/lawgpt.jpg
- [ ] projects/motion.jpg
- [ ] projects/match-analytics.jpg
- [ ] projects/recommendations.jpg
- [ ] projects/thermal.jpg
- [ ] projects/bread-counter.jpg
- [ ] projects/ppe-detection.jpg
- [ ] projects/instagram.jpg
- [ ] projects/jpeg2stl.jpg

## Optional
- [ ] Placeholder image for missing projects

## Icons (can use online CDN instead)
Get from: https://devicon.dev/ or https://simpleicons.org/
- python.svg
- javascript.svg
- html.svg
- fastapi.svg
- etc.
EOF

echo "✅ Created IMAGE_CHECKLIST.md"

echo ""
echo "✨ Setup complete!"
echo ""
echo "🌐 To preview locally:"
echo "   python -m http.server 8000"
echo "   Then visit: http://localhost:8000"
echo ""
