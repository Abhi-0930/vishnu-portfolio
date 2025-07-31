# How to Add Your Profile Photo

## Quick Steps:

1. **Prepare your photo:**
   - Use a high-quality, professional headshot
   - Recommended size: 400x400 pixels or larger
   - Format: JPG, PNG, or WebP
   - Square aspect ratio works best for the circular frame

2. **Add your photo:**
   - Rename your photo to `profile-photo.jpg`
   - Place it in the `public` folder (same location as this file)
   - The path should be: `public/profile-photo.jpg`

3. **Alternative formats:**
   - If you use a different format, update the src in `src/components/Hero.jsx`:
   - Change `src="/profile-photo.jpg"` to your filename (e.g., `src="/profile-photo.png"`)

## Tips for Best Results:

- **Professional look**: Business casual or formal attire
- **Good lighting**: Natural light or professional lighting
- **Clear background**: Plain or blurred background works best
- **Eye contact**: Look directly at the camera
- **High resolution**: At least 400x400 pixels for crisp display

## Current Fallback:

If no photo is added, the portfolio will show "VP" initials with a purple gradient background.

## File Location:
```
public/
├── profile-photo.jpg  ← Add your photo here
├── vite.svg
└── PHOTO_INSTRUCTIONS.md (this file)
``` 