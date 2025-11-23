# Himalayan Background Images

This folder contains the background images used in the Hero section.

## Current Images
- `himalayan-light.png` - Light mode background (AI-generated)
- `himalayan-dark.png` - Dark mode background (AI-generated)

## How to Replace with Real Photos

To swap these AI-generated images with real photos:

1. **Prepare your images:**
   - Light mode: Use a bright, airy Himalayan mountain photo
   - Dark mode: Use a night/dusk Himalayan mountain photo
   - Recommended size: 1920x1080 or larger
   - Format: PNG or JPG

2. **Replace the files:**
   - Simply replace `himalayan-light.png` with your light mode photo
   - Replace `himalayan-dark.png` with your dark mode photo
   - Keep the same filenames

3. **Adjust opacity (optional):**
   - Edit `src/components/Hero.tsx`
   - Find the background divs (around line 27-38)
   - Adjust `opacity-[0.08]` for light mode
   - Adjust `opacity-[0.12]` for dark mode
   - Use values between 0.05-0.20 for subtle effect

## Current Settings
- Light mode opacity: 0.08 (8%)
- Dark mode opacity: 0.12 (12%)
- Position: `bg-bottom` (anchored to bottom of section)
- Transition: 700ms smooth fade when switching themes
