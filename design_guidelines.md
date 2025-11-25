# Design Guidelines: CaP Hellas E.E. Import-Export Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from professional B2B marketplaces and wholesale platforms like Alibaba's business aesthetic, combined with fresh produce e-commerce sites. The design should convey trust, professionalism, and efficiency while showcasing products beautifully.

**Key Design Principles**:
- Professional credibility for B2B audience
- Fresh, natural aesthetic reflecting produce industry
- Clear information hierarchy for multilingual content
- Seamless navigation across three languages

## Typography

**Font Families** (Google Fonts):
- Headings: **Inter** (600, 700) - Clean, professional, excellent multilingual support
- Body: **Inter** (400, 500) - Same family for cohesion, highly legible

**Typography Scale**:
- Hero Headline: text-5xl (mobile) to text-7xl (desktop), font-bold
- Section Headings: text-3xl to text-4xl, font-semibold
- Product Titles: text-xl, font-medium
- Body Text: text-base to text-lg
- Contact Details: text-sm to text-base

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Grid gaps: gap-6, gap-8
- Container max-width: max-w-7xl

**Grid Structure**:
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Contact Section: grid-cols-1 lg:grid-cols-2 (form + info)

## Core Layout Structure

**1. Header/Navigation**
- Company logo area (left)
- Main navigation: Home, Products, About, Contact (center)
- Language switcher with flags: 🇬🇷 GR | 🇬🇧 EN | 🇵🇱 PL (right)
- Contact phone number visible in header
- Sticky navigation on scroll

**2. Hero Section**
- Large hero image: Fresh produce/shipping imagery, approximately 70vh height
- Overlay with company tagline in active language
- Primary CTA button with blur background effect: "View Products" / "Contact Us"
- Subtle company name integration

**3. Services Overview** (3-column grid)
- Import Services card (Greece → Poland)
- Export Services card (Poland → Greece)
- Product Range card
- Each with icon, title, brief description

**4. Featured Products Section**
- Category tabs: Fruits | Vegetables | Other Products
- Product grid (3 columns desktop, 2 tablet, 1 mobile)
- Product cards: Image, name, origin badge, category tag
- High-quality placeholder images of fresh produce

**5. About Section** (2-column layout)
- Company story and Greece-Poland connection
- Image of shipping/logistics or produce

**6. Contact Section** (2-column split)
- **Left Column - Contact Form**:
  - Fields: Name, Email, Phone, Message, Preferred Language dropdown
  - Submit button
  
- **Right Column - Business Card Information**:
  - Company name: CaP Hellas E.E
  - Contact person: Selina Majerska
  - Phone: +30 6948494104
  - Email: selinamajerska@gmail.com
  - Address: Straitsa 2, Thermi
  - Map embed or location icon

**7. Footer**
- Three columns: Company Info | Quick Links | Languages
- Copyright notice
- Social media links

## Component Library

**Navigation**: Clean horizontal menu with language flags, mobile hamburger menu
**Buttons**: Solid primary style, rounded corners (rounded-lg), medium padding (px-6 py-3)
**Cards**: Subtle shadow (shadow-md), rounded corners (rounded-xl), hover lift effect
**Forms**: Clean input fields with labels, rounded borders, focus states
**Language Switcher**: Flag icons + language codes, dropdown on mobile

## Images

**Required Images**:
1. **Hero Image**: Wide landscape shot of fresh produce being transported/handled, or Greece-Poland connection imagery (shipping containers, Mediterranean produce) - full-width, 70vh
2. **Product Images**: 9-12 high-quality photos of fruits and vegetables (strawberries, oranges, tomatoes, cucumbers, etc.) - square format
3. **About Section**: Professional image of logistics/warehouse or fresh market scene - landscape orientation
4. **Background Textures**: Subtle produce patterns or geometric shapes for section dividers

**Image Treatment**: Natural, bright photography with slight warmth to emphasize freshness

## Multilingual Considerations

- All text content must have translations ready for Greek, English, Polish
- RTL not needed (all three languages are LTR)
- Use lang attribute switching
- Ensure Inter font supports Greek and Polish characters
- Language switcher always visible and accessible

## Accessibility & Quality

- Proper heading hierarchy (h1 → h6)
- Alt text for all product images
- Form labels and validation messages
- Keyboard navigation support
- ARIA labels for language switcher

**Final Note**: This is a professional B2B website prioritizing trust and clarity. The design should feel established and credible while maintaining visual appeal through quality produce photography and clean layouts.