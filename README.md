# State of Creation — Noah Merriby

> **Awwwards-level personal website** showcasing Noah's journey from immigrant to global educator, author, and Dubai real estate leader. Built with Next.js 16, React Three Fiber, GSAP, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.182-orange?logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-green)](https://greensock.com/gsap/)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:3000 (or 3001 if 3000 is in use)
```

---

## 📋 Features

### ✨ Hero Section
- **Antigravity Particle Portrait**: 5,000+ particles with Perlin noise motion
- **Interactive Cursor**: Mouse proximity effects
- **Custom GLSL Shaders**: WebGL-powered visuals

### 🗺️ Biography Timeline
- **Horizontal Scroll**: GSAP-powered pinned section
- **6 Milestone Nodes**: Lebanon → Ottawa → Toastmasters → Kinetic Pace → Lurnus → Dubai
- **Parallax Animations**: Reveal effects on scroll

### 📖 Book Showcase
- **3D Transform**: Perspective-based book rotation
- **Scroll-Driven**: Progress-based animations
- **"Why The F*ck Do We Exist"**: Featured book with quote

### 🎓 Courses Section
- **Lurnus Academy**: 100k+ students, 170+ countries, 55 languages
- **Featured Courses**: Neuroplasticity, Instagram, LinkedIn
- **Corporate Training**: Mercedes-Benz, Adidas, Pinterest, Lyft

### 🌍 Real Estate Globe
- **Interactive 3D Globe**: WebGL wireframe with auto-rotation
- **Dubai Listings**: Palm Jumeirah, Business Bay, Marina
- **Hover Details**: Price, ROI, location info

### 🎤 Speaking Section
- **Booking Form**: Name, email, event type, message
- **Speaking Topics**: Neuroplasticity, Purpose, Personal Branding
- **Press Kit Download**: Speaker reel and assets

### 💬 Terminal
- **"Vibe Code Your Future"**: Interactive AI-powered terminal
- **Context-Aware Responses**: Purpose, neuroplasticity, courses
- **Simulated Reasoning Model**: Ready for API integration

---

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Void Black | `#050505` | Background |
| Neuron Gold | `#D4AF37` | Primary accents, CTAs |
| Electric Indigo | `#4B0082` | Secondary accents, hover |

### Typography
- **Formula Condensed**: Headlines (uppercase, bold)
- **Satoshi Variable**: Body text (300-900 weight)

### Motion Language
- **Lenis Smooth Scroll**: `lerp: 0.1`, `duration: 1.2s`
- **GPU Acceleration**: `will-change: transform`, `translateZ(0)`
- **Glassmorphism**: `backdrop-filter: blur(10px)`

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS v4
- **Animation**: GSAP 3.14 + ScrollTrigger, Lenis
- **3D**: React Three Fiber, Drei, Three.js
- **Deployment**: Vercel

---

## 📁 Project Structure

```
d:/Project Noah/
├── src/
│   ├── app/
│   │   ├── fonts/               # Font files
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout + SEO
│   │   └── page.tsx             # Main page
│   └── components/
│       ├── hero/                # Particle portrait
│       ├── timeline/            # Horizontal scroll
│       ├── showcase/            # Book + Courses
│       ├── globe/               # Real estate 3D
│       ├── terminal/            # AI terminal
│       ├── sections/            # Speaking + Footer
│       └── SmoothScroll.tsx     # Lenis wrapper
├── public/                      # Static assets
├── next.config.mjs              # Next.js config
├── tailwind.config.ts           # Tailwind theme
└── package.json                 # Dependencies
```

---

## 🔄 Next Steps

### 1. Replace Placeholder Assets
```bash
# Add actual assets to public/assets/
public/assets/Asset_Portrait.jpg      # Hero portrait texture
public/assets/Asset_BookCover.jpg     # Book cover image

# Replace font files
src/app/fonts/formula-condensed.woff2
src/app/fonts/satoshi-variable.woff2
```

### 2. Environment Variables
Create `.env.local`:
```env
# Sanity CMS (when integrated)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# AI Terminal (when integrated)
OPENAI_API_KEY=sk-...
```

### 3. Deploy to Vercel
```bash
# Test production build
npm run build

# Deploy
vercel --prod
```

---

## 🧪 Testing

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

---

## 📊 Performance

### Optimizations
- ✅ React Suspense for 3D loading
- ✅ Device pixel ratio optimization (`dpr={[1, 2]}`)
- ✅ GPU-accelerated transforms
- ✅ Lazy loading for off-screen sections
- ✅ Reduced particle count for low-power devices

### Lighthouse Targets
- **Performance**: 50+ (desktop)
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 100

---

## ♿ Accessibility

- ✅ WCAG 2.1 AA compliance
- ✅ Keyboard navigation
- ✅ `prefers-reduced-motion` support
- ✅ Semantic HTML5
- ✅ ARIA labels

---

## 📄 License

ISC © Noah Merriby

---

## 🙋 Support

For questions or issues:
- **Email**: hello@noahmerriby.com
- **LinkedIn**: [linkedin.com/in/noahmerriby](https://linkedin.com/in/noahmerriby)
- **Instagram**: [@noahmerriby](https://instagram.com/noahmerriby)

---

**Built with ❤️ and cutting-edge web technologies**
