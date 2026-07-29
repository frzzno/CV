# Cyberpunk Portfolio Website

A professional portfolio website with Terminal Green cyberpunk aesthetic, designed to showcase design skills and sample works.

## Features

- **Terminal Green Cyberpunk Design**: Dark theme with green accents, monospace fonts, and scanline effects
- **Hard Skills Showcase**: Grid layout featuring Adobe Creative Suite and Figma skills with icons
- **Portfolio Gallery**: Display of sample works with hover effects
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover animations, glitch effects, and smooth transitions

## Project Structure

```
.
├── index.html                # Main HTML file
├── styles.css                # Cyberpunk CSS styling
├── script.js                 # Interactive JavaScript
├── verify.html               # Asset verification page
├── README.md                 # This file
├── src/
│   ├── skillicons/           # Skill icons (Photoshop, Illustrator, etc.)
│   └── sampleworks/          # Portfolio sample images
└── assets/                   # Additional assets (fonts, etc)
```

## Deployment to GitHub Pages

### Option 1: Simple Deployment (Recommended)

1. **Create a GitHub repository** for this project
2. **Push all files** to the main branch
3. **Enable GitHub Pages**:
   - Go to Repository Settings > Pages
   - Select "main" branch and "/root" folder
   - Click Save
4. **Access your site**: Your portfolio will be available at `https://[username].github.io/[repository-name]/`

### Option 2: Using docs folder

1. Create a `docs` folder in your repository
2. Move all files into the `docs` folder
3. Enable GitHub Pages with the `docs` folder as the source

## Customization

### Update Personal Information

Edit the following sections in `index.html`:

- **Hero Section**: Update name and title (lines 14-15)
- **About Section**: Update bio text (lines 40-43)
- **Contact Section**: Update email and social links (lines 145-158)
- **Footer**: Update copyright info (lines 168-169)

### Add More Skills

Add additional skill cards in the skills section (around line 50):

```html
<div class="skill-card">
    <img src="path/to/icon.png" alt="Skill Name" class="skill-icon">
    <h3>SKILL NAME</h3>
    <p>Description of your expertise</p>
</div>
```

### Add More Portfolio Items

Add additional portfolio items in the portfolio section (around line 90):

```html
<div class="portfolio-item">
    <img src="path/to/image.png" alt="Project Name" class="portfolio-image">
    <div class="portfolio-overlay">
        <h3>PROJECT NAME</h3>
        <p>Project description</p>
    </div>
</div>
```

## Design Customization

Edit `styles.css` to modify:

- **Color Scheme**: Update CSS variables at the top (lines 1-12)
- **Fonts**: Change the font-family in the body selector
- **Animations**: Modify or remove glitch effects, scanlines, etc.
- **Layout**: Adjust grid layouts and spacing

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Responsive design supported

## License

This project is open source and available under the MIT License. Feel free to use, modify, and distribute as needed.

## Credits

- Design: Ulyana
- Cyberpunk Aesthetic: Terminal Green Theme
- Icons: Adobe Creative Suite & Figma

---

**Enjoy your cyberpunk portfolio!** 🚀