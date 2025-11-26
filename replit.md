# CaP Hellas E.E. Import-Export Website

## Overview

CaP Hellas E.E. is a multilingual B2B import-export website specializing in fresh produce trade between Greece and Poland. The application is a single-page application (SPA) built with React and Express, featuring a professional marketplace design with comprehensive internationalization support for English, Greek, and Polish languages.

The website showcases fresh fruits, vegetables, and specialty food products with an emphasis on professional credibility for B2B audiences while maintaining a fresh, natural aesthetic that reflects the produce industry.

## User Preferences

- **Communication Language**: Greek (Ελληνικά) ONLY
- **Preferred communication style**: Simple, everyday language.

## Current Status (November 26, 2025)

### ✅ COMPLETED
- **Deployment**: Live on Vercel at https://caphellas.com with SSL
- **Custom Domain**: caphellas.com configured via Namecheap DNS
- **Contact Form**: ✅ **WORKING** - Integrated with FormSubmit (free, no account needed)
- **Product Gallery**: 40+ AI-generated product images
- **Multi-language Support**: English, Greek, Polish
- **Mobile Responsive**: Fully responsive design
- **GitHub Repository**: https://github.com/adonisdrou/CaP-Hellas-Website

### 🔄 Latest Changes (Nov 26, 2025 - FINAL FIX)
- **Contact Form Solution**: Changed from Formspree to **FormSubmit**
- **Method**: HTML form with direct POST to FormSubmit API
- **No JavaScript issues**: HTML forms work without CORS problems
- **Form submission to**: selinamajerska@gmail.com
- **Status**: ✅ **TESTED & WORKING**
- **All Greek labels**: Form is fully in Greek language

## System Architecture

### Frontend Architecture

**Component-Based React SPA**
- The frontend uses React 18 with TypeScript for type safety
- Client-side routing implemented with Wouter for lightweight navigation
- Single-page architecture with smooth scrolling between sections
- Component library: shadcn/ui with Radix UI primitives for accessible, customizable components
- Styling: Tailwind CSS with custom design tokens matching professional B2B aesthetic

**State Management**
- React Query (@tanstack/react-query) for server state and data fetching
- React Context API for global application state (language preferences)
- Local component state with React hooks (useState, useEffect)
- Form state managed by react-hook-form with Zod schema validation

**Internationalization (i18n)**
- Custom LanguageContext implementation for managing three languages (English, Greek, Polish)
- Language preference persisted to localStorage
- Translation system defined in `lib/i18n.ts` with type-safe translation objects
- Language switcher component with flag indicators in navigation

**Design System**
- Inter font family (Google Fonts) for both headings and body text
- Tailwind's utility-first approach with custom spacing scale (2, 4, 6, 8, 12, 16, 20, 24)
- Custom color palette centered around green primary (#28A745 range) reflecting produce/natural theme
- Responsive grid layouts: mobile-first with breakpoints at md (768px) and lg (1024px)
- Consistent border radius system and elevation/shadow utilities

### Backend Architecture

**Static Site Deployment (Vercel)**
- No backend server required
- Pure React SPA deployed as static HTML/CSS/JS
- Contact form uses Formspree for email handling
- All data is client-side or processed through third-party services

### Contact Form Integration

**FormSubmit Configuration**
- Endpoint: https://formsubmit.co/selinamajerska@gmail.com
- Method: POST via HTML form (no JavaScript)
- Fields: name, email, phone, message
- Recipient: selinamajerska@gmail.com
- CAPTCHA: Disabled for simplicity
- Success redirect: Returns to caphellas.com
- No account or API key needed - fully serverless

### External Dependencies

**UI Component Library**
- Radix UI primitives: 20+ accessible, unstyled component primitives
- shadcn/ui configuration: "new-york" style variant
- Components: Accordion, Alert, Avatar, Badge, Button, Card, Carousel, Checkbox, Command, Dialog, Dropdown, Form, Input, Select, Sheet, Sidebar, Table, Tabs, Toast, Tooltip, and more

**Form Handling and Validation**
- react-hook-form for performant form state management
- @hookform/resolvers for schema validation integration
- Zod for runtime type validation and schema definition
- drizzle-zod for generating Zod schemas from database schema definitions

**Asset Management**
- Static images stored in `attached_assets/generated_images/` directory
- Product photos: Fresh produce (strawberries, oranges, tomatoes, cucumbers, peppers, lettuce, grapes, apples, carrots, broccoli, watermelon, mandarins, lemons, peaches, olive oil, olives, pomegranate juice, raisins, and more)
- Hero and about section images: Shipping/logistics/warehouse imagery
- Vite alias configured: `@assets` pointing to `attached_assets` directory

**Build Tools**
- Vite: Frontend build tool with React plugin and HMR
- PostCSS with Tailwind CSS and Autoprefixer
- TypeScript compiler for type checking (noEmit mode)

**Developer Experience Tools (Replit Integration)**
- @replit/vite-plugin-runtime-error-modal: Runtime error overlay in development
- @replit/vite-plugin-cartographer: Project structure visualization
- @replit/vite-plugin-dev-banner: Development environment banner
- Conditional loading: Only active in non-production Replit environments

**Third-Party Utilities**
- date-fns: Date manipulation and formatting
- clsx + tailwind-merge: Conditional className composition
- class-variance-authority: Component variant management
- nanoid: Unique identifier generation
- embla-carousel-react: Touch-friendly carousel component
- FormSubmit: Serverless HTML form handling (no backend)

**Google Fonts**
- Inter: Primary typeface loaded via Google Fonts CDN

## Deployment Notes

- **Vercel**: Free tier deployment at caphellas.com
- **Build Command**: `npm run build` (Vite builds to dist/public)
- **No Backend**: Static site - all APIs are client-side or third-party
- **GitHub**: Automatic deployments on push to main branch
- **SSL**: Automatic via Vercel + Namecheap DNS

## ✅ Site is READY for use!

**What works:**
1. ✅ Contact form sends emails to selinamajerska@gmail.com
2. ✅ Three language support (Greek, English, Polish)
3. ✅ Mobile responsive design
4. ✅ Professional B2B styling
5. ✅ Product gallery with 40+ images

**To test contact form:**
1. Visit https://caphellas.com
2. Scroll to Contact section
3. Fill name, email, phone, message
4. Click Submit
5. Check selinamajerska@gmail.com for incoming email
