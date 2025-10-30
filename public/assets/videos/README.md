# Video Assets Folder

## 📁 Purpose
This folder contains video files used in the portfolio application, specifically for the Advertisement section.

## 🎥 Current Usage
The video is used in the `AdSection.jsx` component to showcase product demos or promotional content.

## 📋 Setup Instructions

### 1. Add Your Video Files
Place your video files in this folder with these recommended names:
- `demo-video.mp4` (Primary format)
- `demo-video.webm` (Alternative format for better compression)

### 2. Supported Formats
- **MP4**: Best compatibility across all browsers
- **WebM**: Better compression, supported by modern browsers
- **MOV**: Can be converted to MP4 for web use

### 3. Optimization Guidelines
- **File Size**: Keep under 10MB for fast loading
- **Resolution**: 1280x720 (720p) recommended for web
- **Duration**: 30-60 seconds for advertisement content
- **Compression**: Use web-optimized encoding

### 4. File Naming Convention
```
demo-video.mp4          # Main product demo
promotional-video.mp4   # Marketing content
tutorial-video.mp4      # How-to content
```

## 🔧 Technical Implementation

The video is implemented in `src/components/AdSection.jsx`:

```jsx
<video autoPlay muted loop playsInline>
  <source src="/assets/videos/demo-video.mp4" type="video/mp4" />
  <source src="/assets/videos/demo-video.webm" type="video/webm" />
</video>
```

## 📱 Features
- **Auto-play**: Starts automatically (muted for browser policies)
- **Loop**: Continuous playback
- **Responsive**: Scales with container
- **Fallback**: Shows animated placeholder if video fails to load
- **Mobile Friendly**: Uses `playsInline` for iOS compatibility

## 🛠 Adding New Videos

1. **Convert your video** to web-optimized format:
   ```bash
   # Using FFmpeg (recommended)
   ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k demo-video.mp4
   ```

2. **Place the file** in this folder

3. **Update the component** if using a different filename:
   ```jsx
   <source src="/assets/videos/your-video-name.mp4" type="video/mp4" />
   ```

## 📊 Current File Structure
```
public/assets/videos/
├── README.md           # This file
├── .gitkeep           # Keeps folder in git
├── demo-video.mp4     # Your main video (add this)
└── demo-video.webm    # Alternative format (optional)
```

## 🚀 Quick Start
1. Add your `demo-video.mp4` file to this folder
2. The video will automatically appear in the Advertisement section
3. If the video doesn't load, a fallback animation will display

## 💡 Tips
- Test your video in different browsers
- Ensure video is muted for auto-play to work
- Consider adding captions for accessibility
- Use tools like HandBrake for easy video compression