# KG iQ Component Patterns

This guide explains how components are structured and how state, props, and interactions are handled consistently across the application.

---

## Component Types

### 1. **Presentational Components**

- **Purpose**: Display data, visual structure only.
- **Examples**: `ProjectCard`, `ExperienceCard`
- **Rules**:
  - Accept data through props.
  - No internal state except for UI-only concerns (e.g., toggling, local animation state).
  - No API calls directly.

---

### 2. **Container/Logic Components**

- **Purpose**: Handle data fetching, transformations, and logic.
- **Examples**: `Resume.jsx`, `Projects.jsx`
- **Rules**:
  - Fetch from Supabase.
  - Transform data if necessary before passing down to child components.
  - Keep logic separated from presentation.

---

## Props Structure

### Naming

- **Clear and Specific**:
  - `startDate` instead of `date`
  - `logoUrl` instead of `logo`
- Group related props logically.

### Optional Props

- If a prop is optional:
  - Either provide a fallback inside the component, or
  - Document explicitly in PropTypes.

### PropTypes

- Always use `prop-types` package for type checking.
- Example:

```javascript
import PropTypes from 'prop-types'

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
}
```

---

## State Management

- **Local Component State**: Always start with `useState`.
- **Global State (if needed later)**: Plan to use `useContext` first, then escalate to Zustand or another lightweight solution.
- **Fetching State**:
  - Always have `loading` and `error` states around async calls.

Example:

```javascript
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [data, setData] = useState([])

useEffect(() => {
  async function fetchData() {
    try {
      const result = await apiCall()
      setData(result)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  fetchData()
}, [])
```

---

## Error Handling Pattern

- **Network/API Calls**:

  - Always wrap in try/catch.
  - User-friendly error UI if feasible.
  - Developer error logged via `console.error`.

- **Component Errors**:
  - (Future Enhancement) Introduce React Error Boundaries if complexity increases.

---

## Reusability Guidelines

- If a block of JSX is repeated more than twice → make a new subcomponent.
- If props or behavior start getting too many (>5 props or complex conditionals) → break into a container + presentational split.

---

(✅ Continues evolving with project maturity.)
