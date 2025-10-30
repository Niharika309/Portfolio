# Niharika Patel - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, featuring sophisticated animations and a clean, professional design inspired by contemporary web design trends.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Complete theme switching with localStorage persistence
- **Smooth Animations**: Framer Motion powered animations throughout
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Modern UI**: Clean, minimalistic design with professional aesthetics

### Unique Components
- **Animated Eye Logo**: Custom animated eye with blinking, pupil movement, and rotating text
- **Horizontal Project Cards**: Interactive project showcase with modal expansion
- **Split-Screen Navigation**: Smooth page transitions with loading overlays
- **Sparkle Effects**: Global floating particles and decorative elements
- **Theme Context**: Global state management for dark/light mode

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API
- **Development**: ESLint for code quality

## 📁 Project Structure

```
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── HorizontalCards.jsx    # Project showcase component
│   ├── contexts/
│   │   └── ThemeContext.jsx       # Theme management
│   ├── App.jsx                    # Main application component
│   ├── index.css                  # Global styles and Tailwind
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation
```

## 🎨 Design Features

### Hero Section
- **Animated Eye Logo**: Custom SVG-based eye with realistic blinking and pupil movement
- **Scrolling Text**: Circular text animation around the eye logo
- **Professional Typography**: Clean, modern font hierarchy
- **Responsive Layout**: Adapts beautifully to all screen sizes

### Project Showcase
- **Horizontal Scrolling Cards**: Smooth horizontal project navigation
- **Modal Expansion**: Click to expand project details
- **Technology Tags**: Visual representation of tech stack
- **Interactive Hover Effects**: Engaging user interactions

### Navigation & UX
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Transitions**: Professional page transition effects
- **Theme Toggle**: Instant dark/light mode switching
- **Floating Action Buttons**: Quick access to contact options

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd niharika-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### App.jsx
Main application component containing:
- Hero section with animated eye logo
- Project showcase integration
- Skills and services sections
- Contact information
- Footer with social links

### HorizontalCards.jsx
Interactive project showcase featuring:
- Horizontal scrolling project cards
- Modal expansion functionality
- Project details and technology stacks
- Smooth animations and transitions

### ThemeContext.jsx
Global theme management providing:
- Dark/light mode state
- localStorage persistence
- Theme toggle functionality
- Context provider for app-wide access

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js` and component classes:
- Primary: Blue tones
- Secondary: Purple gradients
- Accent: Green, yellow highlights
- Neutral: Gray scale for text and backgrounds

### Animations
Modify Framer Motion animations in components:
- Duration and easing functions
- Animation triggers and delays
- Hover and interaction effects

### Content
Update personal information in:
- Hero section text and descriptions
- Project data in HorizontalCards
- Skills and services sections
- Contact information and social links

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Vite)
3. Deploy with automatic CI/CD

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🔧 Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tailwind.config.js
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

##  Performance Features

- **Optimized Images**: Responsive image loading
- **Code Splitting**: Lazy loading for better performance
- **Minimal Bundle**: Efficient dependency management
- **Fast Refresh**: Hot module replacement in development

##  Animation Details

### Eye Animation
- **Blinking**: Realistic eyelid animation every 4 seconds
- **Pupil Movement**: Natural eye tracking in 6-second cycles
- **Eyelashes**: Individual animated lashes with staggered timing
- **Rotating Text**: Continuous circular text animation

### Global Effects
- **Sparkle Particles**: Floating animated particles
- **Twinkling Stars**: Rotating star decorations
- **Glowing Orbs**: Pulsing light effects
- **Smooth Transitions**: Page and section transitions

##  Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.





