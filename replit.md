# CaP Hellas E.E. Import-Export Website

## Overview

CaP Hellas E.E. is a multilingual B2B import-export website specializing in fresh produce trade between Greece and Poland. The application is a single-page application (SPA) built with React and Express, featuring a professional marketplace design with comprehensive internationalization support for English, Greek, and Polish languages.

The website showcases fresh fruits, vegetables, and specialty food products with an emphasis on professional credibility for B2B audiences while maintaining a fresh, natural aesthetic that reflects the produce industry.

## User Preferences

Preferred communication style: Simple, everyday language.

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

**Express.js Server**
- Node.js/Express server with TypeScript
- Separate development and production entry points (`index-dev.ts`, `index-prod.ts`)
- Middleware: express.json(), express.urlencoded() for request parsing
- Custom logging middleware tracking API request duration and responses

**Development vs Production**
- Development: Vite dev server with HMR (Hot Module Replacement) integrated as Express middleware
- Production: Static file serving from pre-built `dist/public` directory
- Build process: Vite builds client, esbuild bundles server into single ESM file

**Data Layer - In-Memory Storage**
- Currently implements in-memory storage with Map-based data structures
- Storage interface (`IStorage`) defines CRUD operations for users
- `MemStorage` class provides temporary runtime data persistence
- Schema definitions prepared for database migration using Drizzle ORM

**Session Management**
- Session handling prepared with connect-pg-simple for PostgreSQL session store
- Raw body buffering enabled for webhook/payment integrations

### External Dependencies

**Database (Prepared but Not Implemented)**
- Drizzle ORM configured for PostgreSQL dialect
- Database connection via Neon serverless driver (@neondatabase/serverless)
- Schema location: `shared/schema.ts` with Drizzle-Zod integration for validation
- Migration configuration in `drizzle.config.ts` targeting `./migrations` directory
- Note: Application currently uses in-memory storage; database integration pending

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
- Product photos: Fresh produce (strawberries, oranges, tomatoes, cucumbers, peppers, lettuce, grapes, apples, carrots, broccoli, watermelon, mandarins, lemons, peaches, olive oil, olives, pomegranate juice, raisins)
- Hero and about section images: Shipping/logistics/warehouse imagery
- Vite alias configured: `@assets` pointing to `attached_assets` directory

**Build Tools**
- Vite: Frontend build tool with React plugin and HMR
- esbuild: Server-side bundling for production
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

**Google Fonts**
- Inter: Primary typeface loaded via Google Fonts CDN
- Additional fonts configured: Architects Daughter, DM Sans, Fira Code, Geist Mono (prepared but not actively used)