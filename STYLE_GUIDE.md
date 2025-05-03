# KG iQ Style Guide

This style guide ensures a consistent look, feel, and experience across the app, and smooths the onboarding of future contributors (including AI agents).

---

## UI/UX Standards

### Color Palette

- **Primary Colors:**
  - `--kg-blue`: #304c72 (YInMn Blue) — base
  - `--kg-gray`: #59708e (Payne’s Gray) — accents
  - `--kg-yellow`: #ffd166 (Sunglow) — highlights
  - `--kg-green`: #c5e6a6 (Tea Green) — call-to-action accents
  - `--kg-wine`: #733041 (Wine) — reserved/emphasis
- **Grayscale Neutrals:**
  - `--kg-ash`: #b9bea5
  - `--kg-ash2`: #a7aaa4

**Rules:**

- Use KG Blue as the dominant background/base.
- Yellow is for active CTAs, not background colors.
- Green is secondary for "success" indicators or polished touches.
- Wine is rarely used; only for dramatic contrast moments.

### Typography

- Base Font: `system-ui, Avenir, Helvetica, Arial, sans-serif`
- Headings:
  - H1: 3.2em / bold
  - H2: 2.4em / bold
- Body:
  - Base size: 1em
  - Line height: 1.5
- All font smoothing enabled.

### Spacing System

- **Scale**: Tailwind's 4px base (1 unit = 4px)
- **Key Sizes**:
  - Section padding: `py-10`, `px-6`
  - Component inner padding: `p-6`
  - Grid spacing: 6 or 8 units depending on context
- Mobile-first responsiveness, using Tailwind breakpoints (`sm`, `md`, `lg`).

### Component Appearance

- **Glassmorphism Cards**:
  - Semi-transparent background (`bg-white/10`)
  - Backdrop blur (`backdrop-blur-md`)
  - Subtle border and hover enhancement
- **Buttons**:
  - Primary CTA: Yellow
  - Secondary: Gray
- **Hover states**:
  - Slight scale up on hover (`hover:scale-105`)
  - Softer transition (`transition duration-300`)

### Animation/Transition

- Motion subtlety emphasized: no jarring pop-in or bouncy effects.
- Use Tailwind's `transition` classes for smooth interactions.
- Card hover = slight lift and glow.

---

## Code Formatting Standards

### Tailwind Class Order

1. Layout (flex, grid)
2. Size (width, height)
3. Spacing (margin, padding)
4. Typography (text, font)
5. Colors (text color, bg color, border)
6. Effects (shadow, opacity, blur)
7. Miscellaneous (hover, transition)

### Component Structure

- Always functional components
- Always default export

Example:

```javascript
export default function ComponentName({ prop1, prop2 }) {
  return <div>...</div>
}
```

### Naming Conventions

- Components: PascalCase (`ProjectCard`, `ResumeSection`)
- Variables, props: camelCase
- CSS Classes (if used outside Tailwind): kebab-case

### File Organization

- `src/pages/` → full pages (Resume.jsx, Projects.jsx)
- `src/components/` → atomic components
- `src/components/resume/` → resume-specific components
- `src/lib/` → Supabase clients, utility hooks

---

(✅ Continues evolving with project maturity.)
