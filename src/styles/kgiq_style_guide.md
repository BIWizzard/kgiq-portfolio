# KG iQ Style Guide

This guide documents visual and structural design decisions used across the KG iQ portfolio app. It provides standards for UI/UX, code formatting, and component development to ensure clarity, scalability, and visual cohesion.

---

## ✨ UI / UX Standards

### 🎨 Color Palette & Usage

| Token         | Hex       | Usage                                  |
| ------------- | --------- | -------------------------------------- |
| `--kg-blue`   | `#304c72` | Primary background overlays            |
| `--kg-gray`   | `#59708e` | Secondary neutrals, subtle UI surfaces |
| `--kg-green`  | `#c5e6a6` | Positive states, elegant accents       |
| `--kg-yellow` | `#ffd166` | Highlights, CTA buttons, callouts      |
| `--kg-ash`    | `#b9bea5` | Soft utility backgrounds               |
| `--kg-ash2`   | `#a7aaa4` | Secondary text, muted UI borders       |
| `--kg-wine`   | `#733041` | Rare visual punch (e.g. pills)         |

Use Tailwind color utilities mapped to these tokens:  
`text-kg-green`, `bg-kg-blue/10`, `border-kg-ash2`, etc.

---

### 📝 Typography

| Element  | Font Family           | Tailwind Size | Font Weight   |
| -------- | --------------------- | ------------- | ------------- |
| Headings | `system-ui`, `Avenir` | `text-2xl`+   | `font-bold`   |
| Body     | `system-ui`, `Avenir` | `text-sm`     | `font-normal` |
| Labels   | Same as body          | `text-xs`     | `font-medium` |

- Limit fonts to system-safe stack.
- Use spacing (`mb-2`, `space-y-1`) to separate groups of text.

---

### 📏 Spacing System

- Base unit: `4px` (Tailwind scale)
- Use `space-y-*`, `gap-*`, `py-*`, `px-*` consistently
- Layout containers: `max-w-4xl mx-auto px-6 py-10`
- Components: use `rounded-xl`, `shadow-md`, `p-6`, `gap-4`

---

### 🧱 Component Appearance

- **Cards:** glassmorphism effect
  - `bg-white/10`, `backdrop-blur-md`, `border border-white/10`
- **Edge glow variant classes:**
  - `.resume-card-thin` → subtle linear left-edge
  - `.resume-card-bold` → thicker edge + shadow

Use `hover:` and `transition duration-300` for all hoverable elements.

---

### 🌀 Animation / Transition Patterns

- Use Tailwind transitions:
  - `transition`, `hover:shadow-2xl`, `hover:ring-kg-green`
- Prefer natural interactions — don’t over-animate.

---

## 🧑‍💻 Code Formatting Standards

### 🏷 Tailwind Class Ordering

Follow this order for readability:

    Layout > Box Model > Typography > Visual > State > Utility

**Example:**

    <div className="relative flex items-center p-4 text-white bg-black/20 rounded-lg shadow-md transition hover:shadow-lg" />

Install Tailwind IntelliSense extension with sorting enabled.

---

### 🧩 Component Structure Pattern

Each component should:

- Import external libs first, then internal components
- Destructure props at the top
- Keep logic minimal in JSX — extract if complex
- Use small helper components for structure if needed

---

### 🏷 Naming Conventions

- File names: `PascalCase` for components (e.g. `ResumeCard.jsx`)
- Variables/props: `camelCase`
- Contexts: `SomethingContext.jsx`
- Utility functions: `useSomething.js`, `formatDate.js`

---

### 📁 File Organization

    src/
    ├── components/
    │   └── resume/
    │       ├── ResumeCard.jsx
    │       └── ResumeStyleContext.jsx
    ├── pages/
    │   └── Resume.jsx
    ├── styles/
    │   └── index.css
    ├── lib/
    │   └── supabaseClient.js
    ├── App.jsx
    └── main.jsx

Separate all logic, layout, and global styles.

---

## 🧱 Component Patterns

### 💬 Prop Structure

- Destructure props
- Add fallback values where needed
- Avoid deep prop drilling — pass objects when cohesive

  function ResumeCard({ company, title, bullets = [] }) {
  ...
  }

---

### 🧠 Component Type Usage

| Type       | Use Case                               |
| ---------- | -------------------------------------- |
| Functional | All components (React 18+)             |
| Context    | Resume style, theme toggles            |
| Hook       | Reusable data access or view state     |
| Page       | Route-level components (`pages/*.jsx`) |

---

### 🧠 State Management

- Use `useState` for local UI state
- Use `useContext` for shared view-mode settings
- For persistent settings, `localStorage` or Supabase

---

### ⚠️ Error Handling Patterns

Wrap async fetch logic in `try/catch`. Check for `error` from Supabase:

    try {
      const { data, error } = await supabase.from('experience').select('*')
      if (error) throw error
    } catch (err) {
      console.error('Failed to fetch jobs:', err)
    }

Show fallback messages:

    {loading ? "Loading..." : <CardList />}

---

## 🎨 Resume Edge Variants

```css
/* Common Card Base */
.resume-card {
  @apply relative rounded-xl p-6 border border-white/10 backdrop-blur-md bg-white/10 shadow-xl transition duration-300 hover:shadow-2xl hover:border-white/20 overflow-hidden;
}

/* Thin Left Edge */
.resume-card-thin::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, rgba(59, 130, 246, 0.6), #c5e6a6);
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

/* Bold Edge */
.resume-card-bold::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: linear-gradient(to bottom, rgba(59, 130, 246, 1), #c5e6a6);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.5);
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}
```

Use `className="resume-card resume-card-thin"` or `resume-card-bold` as needed.

---

## 🛠 Recommended Tooling

- Tailwind CSS IntelliSense + Class Sorting
- ESLint + Prettier with auto format-on-save
- GitHub Copilot (Chat + Inline)
- VS Code Settings:
  - `"editor.formatOnSave": true`
  - `"editor.codeActionsOnSave": { "source.fixAll": true }`

---

## 📌 Contributing Guidelines

- Match naming, spacing, and structure from this guide
- Group related commits, open PRs early for feedback
- Always test layout responsiveness before merge
- Prefer clarity > cleverness

---

## 🧪 Coming Soon

- Light/Dark mode toggle
- Resume editor vs viewer toggle
- Animated logo hover
- Blog theming presets
