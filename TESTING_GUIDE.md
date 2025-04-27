# KG iQ Testing Strategy & Best Practices

This guide defines the project's standards for writing, organizing, and maintaining tests across the frontend and backend.

---

## Philosophy

- **Tests must add value** — prioritize testing critical paths and components over exhaustive unit testing.
- **Lightweight testing stack** — align with our minimal, developer-friendly tooling philosophy.
- **Confidence > Coverage** — we focus on meaningful test cases, not achieving arbitrary code coverage targets.

---

## Testing Tools

| Area              | Tool                                                                             | Status     |
| ----------------- | -------------------------------------------------------------------------------- | ---------- |
| Unit Testing      | [Vitest](https://vitest.dev/)                                                    | 🚀 Planned |
| Component Testing | [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | 🚀 Planned |
| E2E Testing       | [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io/)      | Future     |

---

## Test Types

| Test Type         | Purpose                                                  | Scope                        |
| ----------------- | -------------------------------------------------------- | ---------------------------- |
| Unit Tests        | Validate single functions, utils, basic component output | Small functions              |
| Integration Tests | Validate components working together                     | API + UI connection          |
| E2E Tests         | Full user journey testing (major flows only)             | Landing -> Resume -> Contact |

---

## Folder & File Structure

- Place tests **next to the component** they test:
  ```
  src/components/Navbar.jsx
  src/components/Navbar.test.jsx
  ```
- Place E2E tests under a central folder:
  ```
  /tests/e2e/
  ```

---

## Naming Conventions

| Context               | Example                                                   |
| --------------------- | --------------------------------------------------------- |
| Unit Test File        | `Button.test.jsx`                                         |
| Integration Test File | `ResumePage.test.jsx`                                     |
| E2E Test File         | `login.spec.js` (or `.spec.ts` if using TypeScript later) |

---

## Test Coverage Expectations

| Layer           | Required Tests                                                        |
| --------------- | --------------------------------------------------------------------- |
| Components      | Critical components must have unit/integration tests                  |
| Backend Queries | Major supabase fetch logic tested via integration or mocking          |
| E2E             | Core journeys (landing, project browsing, resume page) must be tested |

---

## Testing Standards

- Prefer **Testing Library** philosophy: test what the user sees, not implementation details.
- Use **realistic** data, avoid "lorem ipsum" placeholders.
- Aim for **fast** tests. Avoid heavy setups unless necessary.
- Prefer **mocking** external APIs (e.g., Supabase) in unit/integration tests.
- **Accessibility** (a11y) checks encouraged during component testing where possible (e.g., `axe` library).

---

## Example (Vitest + Testing Library)

```jsx
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByAltText('KG iQ logo')).toBeInTheDocument()
  })
})
```

---

(✅ Continues evolving with project needs.)
