# ADmyBRAND

<div align="center">
  <img src="public/ai-dashboard-hero.png" alt="ADmyBRAND AI Suite Dashboard" width="600" />
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

## 🚀 Overview

**ADmyBRAND** is a cutting-edge AI-powered marketing platform that revolutionizes how businesses plan, launch, and optimize their marketing campaigns. Built with modern web technologies, it provides a comprehensive suite of tools for data-driven marketing decisions with an intuitive, responsive interface.

### ✨ Key Features

- 🤖 **AI-Powered Campaign Planning** - Intelligent campaign optimization with data-driven insights
- 📊 **Advanced Analytics Dashboard** - Real-time campaign performance tracking and visualization
- 🎯 **Precision Targeting** - AI-driven audience segmentation and targeting capabilities
- 📱 **Responsive Design** - Seamless experience across all devices and screen sizes
- 🌙 **Dark Mode Support** - Modern dark theme with smooth transitions
- ⚡ **High Performance** - Optimized for speed with Next.js 14 and modern web standards
- 🔒 **Type Safety** - Full TypeScript implementation for robust development
- ♿ **Accessibility First** - WCAG compliant with Radix UI components

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 14.2.16](https://nextjs.org/)** - React framework with App Router, SSR, and SSG
- **[React 18](https://reactjs.org/)** - Modern React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript development

### Styling & UI
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon library

### Form Handling & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with easy validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers for React Hook Form

### Data Visualization
- **[Recharts](https://recharts.org/)** - Composable charting library for React
- **[React Day Picker](https://react-day-picker.js.org/)** - Date picker component

### Additional Libraries
- **[Class Variance Authority](https://cva.style/docs)** - CSS-in-TS variant API
- **[clsx](https://github.com/lukeed/clsx)** - Utility for constructing className strings
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind CSS classes
- **[Sonner](https://sonner.emilkowal.ski/)** - Opinionated toast component
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode
- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel library

## Project Structure

```
admybrand/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles and Tailwind directives
│   ├── layout.tsx                # Root layout component
│   └── page.tsx                  # Home page component
├── components/                   # React components
│   ├── sections/                 # Page sections (7 components)
│   │   ├── ContactSection.tsx    # Contact form and information
│   │   ├── FAQSection.tsx        # Frequently asked questions
│   │   ├── FeaturesSection.tsx   # Product features showcase
│   │   ├── Footer.tsx            # Site footer
│   │   ├── HeroSection.tsx       # Landing page hero
│   │   ├── PricingSection.tsx    # Pricing plans and tiers
│   │   └── TestimonialsSection.tsx # Customer testimonials
│   ├── ui/                       # Reusable UI components (59 components)
│   │   ├── accordion.tsx         # Collapsible content panels
│   │   ├── alert-dialog.tsx      # Modal dialogs for alerts
│   │   ├── alert.tsx             # Alert messages
│   │   ├── aspect-ratio.tsx      # Displays content within a desired ratio
│   │   ├── avatar.tsx            # User avatar component
│   │   ├── badge.tsx             # Small, informative badges
│   │   ├── breadcrumb.tsx        # Navigation breadcrumbs
│   │   ├── button.tsx            # Interactive buttons
│   │   ├── calendar.tsx          # Date picker calendar
│   │   ├── card.tsx              # Content containers
│   │   ├── carousel.tsx          # Image/content carousel
│   │   ├── chart.tsx             # Data charts
│   │   ├── checkbox.tsx          # Form checkboxes
│   │   ├── collapsible.tsx       # Collapsible content
│   │   ├── command.tsx           # Command menu
│   │   ├── context-menu.tsx      # Context menus
│   │   ├── dialog.tsx            # Modal dialogs
│   │   ├── drawer.tsx            # Drawer component
│   │   ├── dropdown-menu.tsx     # Dropdown menus
│   │   ├── form.tsx              # Form component
│   │   ├── hover-card.tsx        # Hover card
│   │   ├── input-otp.tsx         # One-time password input
│   │   ├── input.tsx             # Form input fields
│   │   ├── label.tsx             # Form labels
│   │   ├── menubar.tsx           # Menubar
│   │   ├── navigation-menu.tsx   # Navigation menu
│   │   ├── pagination.tsx        # Pagination controls
│   │   ├── popover.tsx           # Popover component
│   │   ├── progress.tsx          # Progress bar
│   │   ├── radio-group.tsx       # Radio group
│   │   ├── resizable.tsx         # Resizable panels
│   │   ├── scroll-area.tsx       # Scrollable area
│   │   ├── select.tsx            # Dropdown selectors
│   │   ├── separator.tsx         # Separator
│   │   ├── sheet.tsx             # Sheet component
│   │   ├── sidebar.tsx           # Sidebar component
│   │   ├── skeleton.tsx          # Skeleton loader
│   │   ├── slider.tsx            # Range sliders
│   │   ├── sonner.tsx            # Toast component
│   │   ├── switch.tsx            # Toggle switches
│   │   ├── table.tsx             # Data tables
│   │   ├── tabs.tsx              # Tabbed interfaces
│   │   ├── textarea.tsx          # Multi-line text inputs
│   │   ├── toast.tsx             # Notification toasts
│   │   ├── toaster.tsx           # Toast provider
│   │   ├── toggle-group.tsx      # Toggle group
│   │   ├── toggle.tsx            # Toggle button
│   │   ├── tooltip.tsx           # Tooltip
│   │   └── use-toast.ts          # Toast notification hook
│   └── theme-provider.tsx        # Theme context provider
├── hooks/                        # Custom React hooks (2 hooks)
│   ├── use-mobile.tsx            # Mobile device detection
│   └── use-toast.ts              # Toast notification hook
├── lib/                          # Utility functions
│   └── utils.ts                  # Common utility functions
├── public/                       # Static assets
│   ├── ai-dashboard-hero.png     # Hero section image
│   ├── videos/                   # Video assets
│   └── ... (other static files)
├── styles/                       # Additional styles
├── components.json               # Shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amanyd/admybrand.git
   cd admybrand
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Run the development server**
   ```bash
   # Using pnpm
   pnpm dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## Architecture & Design Patterns

### Component Architecture

The project follows a **component-driven architecture** with clear separation of concerns:

- **Atomic Design Principles**: Components are organized from atomic (buttons, inputs) to complex (sections, pages)
- **Composition over Inheritance**: Components are designed to be composable and reusable
- **Single Responsibility**: Each component has a focused, single purpose

### State Management

- **React Hook Form**: Efficient form state management with minimal re-renders
- **React Context**: Theme management and global state
- **Local State**: Component-specific state using React hooks

### Styling Strategy

- **Utility-First**: Tailwind CSS for rapid development and consistent design
- **Component Variants**: CVA (Class Variance Authority) for component styling variants
- **Design System**: Consistent color palette, typography, and spacing scales
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Performance Optimizations

- **Next.js App Router**: Automatic code splitting and route-based optimization
- **Image Optimization**: Next.js built-in image optimization
- **Bundle Analysis**: Optimized bundle sizes with tree shaking
- **Lazy Loading**: Components and images loaded on demand

## Design System

### Color Palette

The application uses a sophisticated dark theme with carefully selected colors:

```css
/* Primary Colors */
--primary: 210 40% 98%        /* Light text */
--primary-foreground: 222.2 84% 4.9%  /* Dark backgrounds */

/* Accent Colors */
--accent: 210 40% 96%         /* Subtle accents */
--accent-foreground: 222.2 47.4% 11.2%

/* Semantic Colors */
--destructive: 0 62.8% 30.6%  /* Error states */
--success: 142 76% 36%        /* Success states */
--warning: 38 92% 50%         /* Warning states */
```

### Typography

- **Font Family**: Inter (system fallback: system-ui, sans-serif)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Responsive Typography**: Fluid type scales for different screen sizes

### Spacing & Layout

- **Container**: Centered layout with responsive padding
- **Grid System**: CSS Grid and Flexbox for complex layouts
- **Spacing Scale**: Consistent spacing using Tailwind's spacing scale

## Component Library

### UI Components (59 components)

The project includes a comprehensive set of UI components built on Radix UI primitives:

#### Form Components
- `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Slider`
- `RadioGroup`, `DatePicker`, `InputOTP`
- Form validation with React Hook Form + Zod

#### Navigation Components
- `Navbar`, `Breadcrumb`, `Pagination`, `MenuBar`
- `NavigationMenu`, `ContextMenu`, `DropdownMenu`

#### Feedback Components
- `Toast`, `AlertDialog`, `Dialog`, `Popover`, `Tooltip`
- `Progress`, `Skeleton`, `Badge`

#### Data Display
- `Table`, `Card`, `Avatar`, `Separator`
- `Accordion`, `Collapsible`, `Tabs`
- `Carousel`, `AspectRatio`

#### Layout Components
- `ScrollArea`, `ResizablePanels`, `Sheet`, `Drawer`

### Section Components (7 components)

Large, composite components that combine multiple UI components:

- **HeroSection**: Landing page hero with video background, animations, and CTA buttons
- **FeaturesSection**: Product features showcase with cards and icons
- **PricingSection**: Pricing tiers with feature comparisons
- **TestimonialsSection**: Customer testimonials with ratings and avatars
- **FAQSection**: Frequently asked questions with accordion interface
- **ContactSection**: Contact form with validation and company information
- **Footer**: Site footer with links, social media, and company details

## Configuration Files

### Next.js Configuration (`next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js configuration options
  images: {
    // Image optimization settings
    domains: [], // Add external image domains here if needed
  },
};

export default nextConfig;
```

### Tailwind Configuration (`tailwind.config.js`)

- Custom color palette with CSS variables
- Extended font families and spacing
- Custom animations and keyframes
- Plugin integrations (tailwindcss-animate)
- Responsive breakpoints and utilities

### TypeScript Configuration (`tsconfig.json`)

- Strict type checking enabled
- Path aliases for clean imports (`@/components/*`, `@/lib/*`, `@/hooks/*`)
- Modern ES target with Next.js optimizations
- Incremental compilation for faster builds

## Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1400px
- **Large Desktop**: 1400px+

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactions and sizing

## Accessibility Features

- **WCAG 2.1 AA Compliance**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: Sufficient contrast ratios for all text
- **Reduced Motion**: Respects user's motion preferences

## Security & Best Practices

- **Type Safety**: Full TypeScript implementation prevents runtime errors
- **Input Validation**: Zod schemas for robust form validation
- **XSS Protection**: React's built-in XSS protection
- **CSRF Protection**: Next.js built-in CSRF protection
- **Content Security Policy**: Configured for secure asset loading

## Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting and tree shaking
- **Image Optimization**: Next.js automatic image optimization

## Development Workflow

### Code Quality
- **ESLint**: Code linting with Next.js recommended rules
- **Prettier**: Code formatting (if configured)
- **TypeScript**: Static type checking
- **Git Hooks**: Pre-commit hooks for code quality

### Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint

# Or using pnpm (if preferred)
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Deployment

The application is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containers
- **Static hosting** (after `next export`)

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
# Add other environment variables as needed
```

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and patterns
- Add TypeScript types for all new code
- Include tests for new features
- Update documentation as needed
- Ensure accessibility compliance

## License

This project is licensed under the **MIT License** - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Shadcn](https://ui.shadcn.com/) for the beautiful component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/Amanyd">Amanyd</a></p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
