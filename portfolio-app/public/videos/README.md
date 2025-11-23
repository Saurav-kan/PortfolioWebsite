# Adding Videos to Your Projects

Your portfolio now supports hover video previews! Here's how to add videos to your projects.

## Quick Start

1. **Record your demo video** (10-20 seconds showing key features)
2. **Optimize the video**:
   - Format: MP4
   - Size: Under 3-5MB
   - Resolution: 1280x720 or 1920x1080
3. **Place video in** `/public/videos/`
4. **Add to project data** in `Projects.tsx`

## Example

```tsx
{
  name: "Iswarah",
  tech_stack: "React, Django, PostgreSQL",
  image: "/images/projects/iswarah-blob.png",
  video_url: "/videos/iswarah-demo.mp4", // Add this line
  // ... rest of project data
}
```

## Video Optimization Tips

### Using FFmpeg (Recommended)
```bash
# Compress video to ~3MB with good quality
ffmpeg -i input.mov -vcodec h264 -acodec aac -vf scale=1280:720 -b:v 1M output.mp4
```

### Using HandBrake (GUI Tool)
1. Open your screen recording
2. Preset: "Web" → "Gmail Large 3 Minutes 720p30"
3. Adjust quality slider to target 3-5MB
4. Export

## How It Works

- **Desktop**: Video plays on hover (muted, looping)
- **Mobile**: Shows static poster image (no autoplay)
- **No Video**: Falls back to static image automatically
- **Performance**: Videos lazy load as you scroll

## Current Status

All projects currently use static images. Add `video_url` to any project when you have demo videos ready!
