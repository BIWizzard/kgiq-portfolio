# KG iQ Backend Integration Guide

This guide outlines our conventions for working with Supabase, API design, data modeling, and secrets management.

---

## Supabase Usage

### 1. **Tables & Naming**

- **Tables** are in **lowercase snake_case** (e.g., `experience_bullets`).
- **Columns** use **snake_case** (e.g., `start_date`, `logo_url`).
- Prefer **short, descriptive names** for clarity.

---

### 2. **Fetching Data**

- Always use **Supabase client** from `supabaseClient.js`.
- Chain `.select()`, `.order()`, and `.filter()` logically.

Example:

```javascript
const { data, error } = await supabase
  .from('projects')
  .select('*')
  .order('created_at', { ascending: false })
```

- Always check for `error` immediately after fetching:

```javascript
if (error) {
  console.error('Error fetching projects:', error)
  return
}
```

---

### 3. **Data Modeling Patterns**

- **Separate Bullet Lists**:
  - Resume experiences (`experience`) and their bullets (`experience_bullets`) are modeled separately to maintain flexibility.
- **Explicit IDs**:
  - Use numeric IDs or UUIDs depending on project phase.
  - Foreign keys are used (e.g., `experience_id` in `experience_bullets`).

---

## Serverless Functions (Future)

- Plan to use **Supabase Edge Functions** or **Netlify Functions** for:
  - Authenticated actions
  - Backend business logic

When implemented:

- Keep functions small, focused, and RESTful.

---

## Secrets Management

- **Environment Variables** only.
- Never hardcode API keys or Supabase URLs.
- Use `.env` for local development:
  ```
  VITE_SUPABASE_URL=https://your-project.supabase.co
  VITE_SUPABASE_ANON_KEY=your-anon-key
  ```
- In production (Netlify, Vercel, etc.), configure securely through their Environment Variables dashboard.

---

## API Design Style

- For client calls:
  - **Flat object fetch** (selecting `*`) for simplicity initially.
  - Future optimization: **only fetch required fields** for performance.
- Prefer **pagination** if datasets grow large.
- If custom APIs are created later, use **RESTful standards**:
  - GET /projects
  - POST /projects
  - GET /projects/:id

---

(✅ Continues evolving with project needs.)
