# Images Folder Structure

This folder contains all images used in the portfolio website. Images are organized by section for easy management.

## Folder Structure

```
images/
├── hero/              # Hero section images
│   └── (polaroid photo, logo variations)
├── projects/          # Project showcase images
│   ├── iswarah-blob.png
│   ├── asteria-blob.png
│   └── deepfake-blob.png
├── about/             # About section images
│   ├── roots-blob.png      # Nepal/heritage image
│   ├── discipline-blob.png # Martial arts image
│   └── inspiration-blob.png # Art/anime image
├── decoration/        # Decorative elements
│   └── (hand-drawn elements, flags, badges)
└── logos/             # Logo files
    └── (logo variations, icons)
```

## Image Requirements

### Hero Section
- **Polaroid Photo**: Recommended size: 800x1000px (4:5 aspect ratio)
  - Should show you coding/working
  - Will be displayed in a polaroid-style frame
  - Place in: `hero/`

### Projects
- **Project Images**: Recommended size: 1200x800px (3:2 aspect ratio)
  - High-quality screenshots or mockups
  - Currently using blob placeholders
  - Place in: `projects/`
  - Naming: `[project-name]-blob.png` (replace blob with actual image)

### About Section
- **Roots Image**: Recommended size: 800x600px
  - Nepal/heritage themed
  - Place in: `about/roots-blob.png`
  
- **Discipline Image**: Recommended size: 800x600px
  - Martial arts themed
  - Place in: `about/discipline-blob.png`
  
- **Inspiration Image**: Recommended size: 800x600px
  - Art/anime themed
  - Place in: `about/inspiration-blob.png`

## Current Status

All images are currently using blob placeholders (gradient backgrounds). Replace these with your actual images following the naming conventions above.

## Notes

- Use PNG format for images with transparency
- Optimize images for web (use tools like TinyPNG or ImageOptim)
- Maintain aspect ratios as specified
- Images will be automatically optimized by Next.js Image component

