= KG iQ Portfolio Platform - Formal Product Requirements Document (PRD)
:toc:
:sectnums:

== 1. Executive Summary

KG iQ is a professional web application designed to showcase personal experience, technical projects, and thought leadership.  
It serves as the foundation for future expansion into freelance consulting and SaaS ventures.

- 🟢 **Primary Goal**: Create a clean, modern, responsive portfolio site that evolves into a business platform.
- 🔵 **Secondary Goal**: Establish scalable, component-driven architecture to accelerate future growth.

== 2. Vision and Future Phases

- 🟢 **Phase 1** (Current) — Personal Portfolio

  - Resume showcase
  - Project portfolio
  - Technical blog (minimal placeholder)

- 🔵 **Phase 2** — Freelance Consulting Site

  - Client services page
  - Testimonials/case studies
  - Intake/contact forms

- 🔵 **Phase 3** — Business Platform / SaaS
  - User dashboard
  - Client portals
  - Paid product offerings

== 3. Target Audience

- 🟢 **Phase 1**: Recruiters, hiring managers, collaborators
- 🔵 **Phase 2/3**: Small business owners, tech leaders, consulting clients

== 4. Features Overview

| Feature                         | Status                                        | Origin             |
| ------------------------------- | --------------------------------------------- | ------------------ |
| Navbar (responsive, elegant)    | ✅ Done                                       | 🟢 Original        |
| Hero Section (gradient bg)      | ✅ Done (now background only)                 | 🟢 Original        |
| Resume Section (dynamic)        | ✅ Done (Supabase driven, Glassmorphic Cards) | 🔵 Evolved         |
| Project Portfolio (dynamic)     | ✅ Done (Supabase driven)                     | 🔵 Evolved         |
| Blog (placeholder)              | 🚧 MVP staged                                 | 🟢 Original        |
| Footer (contact info, links)    | ✅ Done                                       | 🟢 Original        |
| 3D Edge Glow Cards              | ✅ Done (thin vs bold toggle)                 | 🔵 Evolved         |
| Styleguide / Component Patterns | ✅ Created                                    | 🔵 Evolved         |
| Light/Dark Mode (future toggle) | 🚧 Not yet started                            | 🔵 Evolved Roadmap |
| Resume Logo Display             | ✅ SVGs optimized, background blending        | 🔵 Evolved         |
| Testing Framework Setup         | 🚧 Pending (Vitest or React Testing Library)  | 🔵 Evolved         |

== 5. Design and UI/UX Principles

- 🟢 **Color Palette**: KG iQ Custom Palette (Blue, Gray, Green, Yellow, Wine tones)
- 🟢 **Typography**: System UI stack, scalable with Tailwind text sizing
- 🟢 **Layout**: Mobile-first responsive using Tailwind default breakpoints
- 🔵 **Effects**:
  - Hero gradient backgrounds
  - Glassmorphism cards (blur, transparency)
  - Subtle 3D luminous edge (blue → green gradient)

== 6. Technical Specifications

| Area                 | Technology                              | Origin      |
| -------------------- | --------------------------------------- | ----------- |
| Frontend             | React (Vite scaffolded)                 | 🟢 Original |
| Styling              | Tailwind CSS + custom CSS rules         | 🟢 Original |
| Backend/Data Storage | Supabase (tables: experience, projects) | 🔵 Evolved  |
| Hosting              | Netlify (presumed for production)       | 🟢 Original |
| Routing              | React Router DOM                        | 🔵 Evolved  |
| State Management     | useState + useContext (lightweight)     | 🟢 Original |
| Testing (planned)    | Vitest, Testing Library                 | 🔵 Evolved  |
| SVG Logo Handling    | Optimized + Tailwind sizing             | 🔵 Evolved  |

== 7. Data Models

- 🔵 **Experience Table** (Supabase)

  - Fields: id, company, title, location, start_date, end_date, logo_url

- 🔵 **Experience Bullets Table**

  - Fields: id, experience_id (FK), content

- 🔵 **Projects Table**
  - Fields: id, title, summary, techstack, image, githuburl, demourl

== 8. Development and Coding Standards

- 🟢 Tailwind-first styling, minimal custom CSS
- 🟢 Tailwind class ordering: Logical (layout → spacing → color → effects)
- 🔵 Prop-driven component architecture
- 🔵 Separate reusable component files
- 🔵 Naming Conventions:
  - Components: PascalCase
  - Variables/props: camelCase
  - Files: kebab-case for assets, PascalCase for components
- 🔵 Environmental Secrets:
  - `.env` files (local dev) + Netlify env variables (production)

== 9. Current Challenges Solved

- 🔵 Tailwind PostCSS/Vite setup stabilized (Mac/PC compatible)
- 🔵 Dynamic data fetching via Supabase integrated smoothly
- 🔵 Visual polish: Cards, logos, backgrounds styled consistently
- 🔵 Git workflow improved (feature branching, clean PRs)

== 10. Immediate Roadmap

- ✅ Polish Resume Section (done)
- ✅ Project Portfolio polishing (done)
- 🔵 Set up proper Unit/Integration Testing
- 🔵 Build out Blog
- 🔵 Light/Dark Mode toggle
- 🔵 SEO optimization (basic Open Graph + metadata)
- 🔵 Client Intake Form for freelance phase
- 🔵 Mobile refinement (last-pass tuning)

== 11. Artifacts to Share (For New Developers)

- `README.md` (linking to all style guides and standards)
- `STYLE_GUIDE.md` (full visual and CSS guidelines)
- `COMPONENT_PATTERNS.md` (props/state architecture)
- `BACKEND_GUIDE.md` (Supabase schema + usage)
- `TESTING_GUIDE.md` (testing setup standards)
- `/src` folder structure and sample components
- Current Supabase schema export (optional but recommended)

== 12. Open Decisions Still Evolving

- Testing library finalization (Vitest vs React Testing Library)
- Light/Dark Mode design language (colors, switches)
- CMS (if any) for Blog posts vs pure Markdown
- Edge functions or serverless backend needs (in future SaaS phase)

== 13. Risks

- Scope creep if freelance/business phases not clearly scoped later
- Long-term hosting/DB scaling as platform grows (Supabase limits)
- Browser compatibility edge cases for advanced effects

== 14. Appendix - Style Keywords

| Keyword       | Meaning                                            |
| ------------- | -------------------------------------------------- |
| KG iQ         | Project branding: Ken Graham Intelligence Quotient |
| Glassmorphism | Blurred, frosted glass effects                     |
| Luminous Edge | 3D-style card gradient border                      |
| Beast Mode    | Internal nickname for bolder card edge mode        |
