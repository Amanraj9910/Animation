# FOLLOW.ART FRONTEND CLONE - DETAILED ARCHITECTURE & PLAN

## 📋 PROJECT OVERVIEW

**Objective**: Clone the exact frontend of follow.art with all animations, transitions, and scroll effects

**Video Analysis**: 
- Duration: 33.9 seconds
- Resolution: 1912x942 (widescreen)
- Shows smooth page transitions, scroll interactions, and UI animations

---

## 🎨 VISUAL DESIGN ANALYSIS

### Color Palette
```css
/* Primary Colors */
--background: #0a0a0a;          /* Deep black */
--background-secondary: #1a1a1a; /* Slightly lighter black */
--text-primary: #ffffff;         /* Pure white */
--text-secondary: #999999;       /* Light gray */
--accent-purple: #8b5cf6;        /* Vibrant purple */
--accent-blue: #3b82f6;          /* Electric blue */
--accent-pink: #ec4899;          /* Hot pink */

/* Gradients */
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-accent: linear-gradient(to right, #8b5cf6, #ec4899);
--gradient-subtle: linear-gradient(180deg, transparent, rgba(0,0,0,0.8));
```

### Typography
```css
/* Based on follow.art's aesthetic */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Cal Sans', 'Inter', sans-serif; /* For headings */

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px - timestamps */
--text-sm: 0.875rem;   /* 14px - secondary text */
--text-base: 1rem;     /* 16px - body text */
--text-lg: 1.125rem;   /* 18px - card titles */
--text-xl: 1.25rem;    /* 20px - section headers */
--text-2xl: 1.5rem;    /* 24px - page titles */
--text-3xl: 2rem;      /* 32px - hero headings */
--text-4xl: 3rem;      /* 48px - large display */
```

---

## 🏗️ TECHNICAL ARCHITECTURE

### Tech Stack Recommendations

#### Core Framework (Choose One):
```
Option 1: REACT (Recommended for this project)
✓ Vite for fast development
✓ React Router for page transitions
✓ Framer Motion for animations
✓ TailwindCSS for styling

Option 2: NEXT.JS (For production/SEO)
✓ App Router
✓ Image optimization
✓ Better performance

Option 3: VANILLA JS (If you want lightweight)
✓ GSAP for animations
✓ No framework overhead
```

**Recommended Stack:**
```javascript
{
  "framework": "React 18 + Vite",
  "styling": "TailwindCSS + CSS Modules",
  "animations": "Framer Motion + GSAP ScrollTrigger",
  "routing": "React Router v6",
  "state": "Zustand (lightweight)",
  "images": "Unsplash API (for samples)",
  "fonts": "Google Fonts (Inter)",
  "icons": "Lucide React"
}
```

### Project Structure
```
follow-art-clone/
├── public/
│   ├── fonts/
│   │   ├── Inter/
│   │   └── CalSans/
│   └── images/
│       └── placeholders/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navigation.jsx
│   │   ├── feed/
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostGrid.jsx
│   │   │   ├── PostModal.jsx
│   │   │   └── FeedLayout.jsx
│   │   ├── profile/
│   │   │   ├── ProfileHeader.jsx
│   │   │   ├── ProfileGrid.jsx
│   │   │   └── ProfileStats.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Avatar.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   └── animations/
│   │       ├── PageTransition.jsx
│   │       ├── ScrollReveal.jsx
│   │       └── HoverEffect.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   ├── useMousePosition.js
│   │   └── useIntersectionObserver.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Feed.jsx
│   │   ├── Profile.jsx
│   │   ├── Explore.jsx
│   │   └── Post.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── transitions.css
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎬 ANIMATION & TRANSITION DETAILS

### Key Animations to Implement

#### 1. Page Transitions
```javascript
// Smooth page transitions with Framer Motion
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};
```

#### 2. Card Hover Effects
```javascript
// Magnetic hover effect
const cardVariants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
  },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};
```

#### 3. Scroll Animations
```javascript
// GSAP ScrollTrigger for cards appearing on scroll
gsap.utils.toArray('.post-card').forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      end: 'top 50%',
      scrub: 1,
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 100,
    scale: 0.9,
    duration: 0.8,
    ease: 'power3.out',
    delay: i * 0.1
  });
});
```

#### 4. Modal Animations
```javascript
// Modal open/close with spring physics
const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3
    }
  }
};
```

#### 5. Image Gallery Transitions
```javascript
// Shared element transitions (like iOS photos)
const imageVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};
```

#### 6. Parallax Scrolling
```javascript
// Background elements move at different speeds
const parallaxRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = 
        `translateY(${scrollY * 0.5}px)`;
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 🖼️ UI COMPONENTS BREAKDOWN

### 1. Navigation Header
```
Features:
- Sticky header with blur backdrop
- Logo on the left
- Navigation menu (Feed, Explore, Profile)
- Search bar (expandable)
- User avatar on the right
- Smooth color transition on scroll

Animations:
- Slide down on page load
- Hide/show on scroll direction
- Smooth backdrop blur transition
```

### 2. Feed Layout
```
Layout Type: Masonry Grid (like Pinterest)

Features:
- Responsive columns (1-4 based on screen size)
- Variable height cards
- Lazy loading images
- Infinite scroll

Grid Configuration:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Wide: 4 columns

Spacing: 16px gap
```

### 3. Post Card Component
```
Structure:
┌─────────────────────┐
│   [Image]           │
│   (aspect ratio)    │
├─────────────────────┤
│ [Avatar] User Name  │
│ Caption text...     │
│ ❤️ 234  💬 12       │
│ 2h ago              │
└─────────────────────┘

Hover States:
- Scale up slightly (1.02)
- Add glow shadow
- Show overlay with like count
- Cursor: pointer

Animations:
- Fade in from bottom on scroll
- Image zoom on hover
- Smooth shadow transition
```

### 4. Modal/Lightbox
```
Layout:
┌────────────────────────────────────────┐
│  ←  [Large Image]       [Details Panel]│
│                         [User info]    │
│                         [Caption]      │
│                         [Comments]     │
│                         [Actions]      │
└────────────────────────────────────────┘

Features:
- Full screen backdrop (95% opacity black)
- Large image on left (60% width)
- Details sidebar on right (40% width)
- Close button (top right)
- Arrow navigation
- Keyboard support (ESC, arrows)
- Click outside to close

Animations:
- Backdrop fade in
- Modal scale + fade (spring physics)
- Image fade + slide
- Details slide from right
```

### 5. Profile Page
```
Layout:
[Profile Header]
  - Large avatar
  - Name + username
  - Bio
  - Stats (Posts, Followers, Following)
  - Follow button

[Tab Navigation]
  - Posts | Saved | Tagged

[Grid Layout]
  - Same masonry grid as feed
  - Only user's posts
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
```css
/* Mobile First Approach */
--mobile: 0px;      /* < 640px */
--tablet: 640px;    /* 640px - 1024px */
--desktop: 1024px;  /* 1024px - 1440px */
--wide: 1440px;     /* > 1440px */
```

### Layout Adjustments
```
Mobile (< 640px):
- 1 column grid
- Full width cards
- Bottom navigation
- Simplified header
- Stack modal vertically

Tablet (640px - 1024px):
- 2 column grid
- Side navigation
- Larger cards
- Split modal layout

Desktop (1024px+):
- 3-4 column grid
- Full navigation
- Larger images
- Side-by-side modal
```

---

## 🎭 SPECIFIC EFFECTS TO IMPLEMENT

### 1. Smooth Scroll
```javascript
// Using Lenis for smooth scrolling
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  smoothTouch: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
```

### 2. Cursor Following Effect
```javascript
// Custom cursor that follows mouse
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  window.addEventListener('mousemove', updateMousePosition);
  return () => window.removeEventListener('mousemove', updateMousePosition);
}, []);

// Render custom cursor
<div 
  className="cursor-dot"
  style={{
    left: mousePosition.x,
    top: mousePosition.y,
    transform: 'translate(-50%, -50%)'
  }}
/>
```

### 3. Gradient Mesh Background
```css
/* Animated gradient background */
.gradient-bg {
  background: 
    radial-gradient(at 40% 20%, hsla(270, 70%, 50%, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(240, 70%, 60%, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(300, 70%, 50%, 0.3) 0px, transparent 50%);
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
```

### 4. Image Blur to Sharp Loading
```javascript
// Progressive image loading
const [imageSrc, setImageSrc] = useState(blurredImageUrl);
const [imageLoaded, setImageLoaded] = useState(false);

useEffect(() => {
  const img = new Image();
  img.src = fullImageUrl;
  img.onload = () => {
    setImageSrc(fullImageUrl);
    setImageLoaded(true);
  };
}, [fullImageUrl]);

// CSS
.progressive-image {
  filter: ${imageLoaded ? 'blur(0)' : 'blur(20px)'};
  transition: filter 0.5s ease;
}
```

### 5. Stagger Animation for Grid
```javascript
// Cards appear one by one
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  }
};
```

---

## 📦 SAMPLE DATA STRUCTURE

### Mock Post Data
```javascript
const mockPosts = [
  {
    id: "1",
    user: {
      id: "user_1",
      username: "sarahchen",
      displayName: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      verified: true
    },
    image: {
      url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
      blurhash: "LKO2?V%2Tw=w]~RBVZRi};RPxuwH",
      width: 1080,
      height: 1350,
      aspectRatio: 0.8
    },
    caption: "Golden hour magic ✨",
    location: "San Francisco, CA",
    likes: 1234,
    comments: 45,
    saves: 89,
    timestamp: "2024-02-13T14:30:00Z",
    tags: ["photography", "sunset", "nature"]
  },
  // ... more posts
];
```

---

## 🎨 IMAGE SOURCES (Free & High Quality)

### For Development:
```
1. Unsplash API (Free)
   - API: https://api.unsplash.com
   - High quality photos
   - No attribution required in dev

2. Pexels API (Free)
   - API: https://api.pexels.com
   - Curated collections
   - Simple integration

3. Lorem Picsum (Placeholder)
   - URL: https://picsum.photos/400/600
   - Quick random images
   - Good for testing

4. Unsplash Source (Direct URLs)
   - https://source.unsplash.com/random/400x600?nature
   - No API key needed
   - Random images
```

### Sample Image Categories:
```javascript
const categories = [
  'nature', 'architecture', 'people', 'food',
  'travel', 'art', 'fashion', 'abstract',
  'street', 'animals', 'technology', 'minimal'
];

// Generate random image URL
const getRandomImage = (category, width = 400, height = 600) => {
  return `https://source.unsplash.com/${width}x${height}/?${category}`;
};
```

---

## 🚀 IMPLEMENTATION PHASES

### Phase 1: Foundation (Week 1)
```
✓ Set up React + Vite project
✓ Install dependencies (Framer Motion, TailwindCSS, React Router)
✓ Configure Tailwind with custom colors
✓ Set up project structure
✓ Add fonts (Inter, Cal Sans)
✓ Create basic layout components (Header, Footer)
✓ Set up routing
✓ Create mock data
```

### Phase 2: Core Components (Week 2)
```
✓ Build PostCard component
✓ Implement masonry grid layout
✓ Create modal/lightbox component
✓ Build profile page layout
✓ Add navigation component
✓ Implement responsive design
```

### Phase 3: Animations (Week 3)
```
✓ Add page transitions
✓ Implement scroll animations
✓ Create hover effects
✓ Add modal animations
✓ Implement smooth scrolling
✓ Add loading states
✓ Stagger grid animations
```

### Phase 4: Polish (Week 4)
```
✓ Optimize performance
✓ Add keyboard navigation
✓ Implement lazy loading
✓ Add micro-interactions
✓ Test responsiveness
✓ Add accessibility features
✓ Final tweaks and refinements
```

---

## 🛠️ ESSENTIAL DEPENDENCIES

### package.json
```json
{
  "name": "follow-art-clone",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "zustand": "^4.4.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  },
  "optionalDependencies": {
    "gsap": "^3.12.0",
    "@studio-freight/lenis": "^1.0.0",
    "blurhash": "^2.0.0",
    "react-blurhash": "^0.3.0"
  }
}
```

---

## 🎯 KEY FEATURES CHECKLIST

### Must-Have Features:
- [x] Masonry grid layout
- [x] Smooth page transitions
- [x] Modal lightbox
- [x] Infinite scroll
- [x] Lazy image loading
- [x] Responsive design
- [x] Hover effects
- [x] Scroll animations
- [x] User profiles
- [x] Navigation

### Nice-to-Have Features:
- [ ] Image upload (simulated)
- [ ] Like animation (heart burst)
- [ ] Comment section (UI only)
- [ ] Search functionality
- [ ] Filter by category
- [ ] Dark/light mode toggle
- [ ] Share functionality
- [ ] Download image
- [ ] Keyboard shortcuts
- [ ] Custom cursor

---

## 🎨 DESIGN TOKENS

### Complete Design System
```javascript
// colors.js
export const colors = {
  background: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    tertiary: '#2a2a2a',
    elevated: 'rgba(255, 255, 255, 0.05)'
  },
  text: {
    primary: '#ffffff',
    secondary: '#999999',
    tertiary: '#666666',
    disabled: '#444444'
  },
  accent: {
    purple: '#8b5cf6',
    blue: '#3b82f6',
    pink: '#ec4899',
    green: '#10b981',
    yellow: '#f59e0b'
  },
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    focus: 'rgba(139, 92, 246, 0.5)',
    hover: 'rgba(139, 92, 246, 0.3)'
  }
};

// spacing.js
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem'     // 96px
};

// borderRadius.js
export const borderRadius = {
  sm: '0.5rem',     // 8px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  full: '9999px'
};

// shadows.js
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
  glow: '0 0 30px rgba(139, 92, 246, 0.5)'
};
```

---

## 🔧 PERFORMANCE OPTIMIZATIONS

### Image Optimization
```javascript
// Use blurhash for placeholder
import { Blurhash } from 'react-blurhash';

const OptimizedImage = ({ src, blurhash, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="relative">
      {!isLoaded && (
        <Blurhash
          hash={blurhash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
```

### Virtual Scrolling (for large lists)
```javascript
import { useVirtualizer } from '@tanstack/react-virtual';

// Only render visible items
const rowVirtualizer = useVirtualizer({
  count: posts.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 400,
  overscan: 5
});
```

### Code Splitting
```javascript
// Lazy load heavy components
const ProfilePage = lazy(() => import('./pages/Profile'));
const PostModal = lazy(() => import('./components/PostModal'));

<Suspense fallback={<LoadingSpinner />}>
  <ProfilePage />
</Suspense>
```

---

## 📚 HELPFUL RESOURCES

### Animation Resources:
- Framer Motion Docs: https://www.framer.com/motion/
- GSAP Docs: https://greensock.com/docs/
- Lenis Smooth Scroll: https://github.com/studio-freight/lenis
- CSS Tricks - Animations: https://css-tricks.com/almanac/properties/a/animation/

### Design Inspiration:
- Dribbble: https://dribbble.com/tags/gallery
- Awwwards: https://www.awwwards.com/
- Behance: https://www.behance.net/

### Component Libraries (for reference):
- Radix UI (headless): https://www.radix-ui.com/
- Headless UI: https://headlessui.com/
- shadcn/ui: https://ui.shadcn.com/

### Image APIs:
- Unsplash API: https://unsplash.com/developers
- Pexels API: https://www.pexels.com/api/
- Pixabay API: https://pixabay.com/api/docs/

---

## 🎬 SPECIFIC ANIMATIONS FROM VIDEO

Based on typical follow.art patterns:

### 1. **Hero Fade-In**
```javascript
// Page loads with subtle fade + slide up
const heroVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  }
};
```

### 2. **Card Reveal on Scroll**
```javascript
// Cards fade in from bottom as you scroll
const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
```

### 3. **Modal Backdrop**
```javascript
// Smooth backdrop blur
const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { 
    opacity: 1, 
    backdropFilter: "blur(20px)",
    transition: { duration: 0.3 }
  }
};
```

### 4. **Navigation Slide**
```javascript
// Nav items slide in on page load
const navVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};
```

---

## 🎨 EXACT STYLING GUIDE

### Glass Morphism Effect
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Smooth Shadows
```css
.card-shadow {
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-shadow:hover {
  box-shadow: 
    0 2px 4px rgba(139, 92, 246, 0.1),
    0 4px 8px rgba(139, 92, 246, 0.1),
    0 8px 16px rgba(139, 92, 246, 0.2),
    0 16px 32px rgba(139, 92, 246, 0.2);
}
```

---

## 🚀 QUICK START COMMANDS

```bash
# Create project
npm create vite@latest follow-art-clone -- --template react
cd follow-art-clone

# Install dependencies
npm install react-router-dom framer-motion zustand lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Optional animation libraries
npm install gsap @studio-freight/lenis

# Start development
npm run dev
```

---

## 📝 FINAL NOTES

### Priority Order:
1. **Structure first** - Get the layout right
2. **Static styling** - Make it look good without animations
3. **Basic interactions** - Hover, click, navigate
4. **Animations** - Add the magic
5. **Polish** - Fine-tune everything

### Testing Checklist:
- [ ] Works on Chrome, Firefox, Safari
- [ ] Mobile responsive (test on actual device)
- [ ] Images load properly
- [ ] Animations don't lag
- [ ] Keyboard navigation works
- [ ] Accessibility (screen readers)
- [ ] Performance (Lighthouse score)

---

This is a complete blueprint for cloning follow.art's frontend.
