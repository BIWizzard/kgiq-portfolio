# KG iQ Portfolio Project - Continuity Document (2025-05-02 02-11-am)

## Current Project Status

The KG iQ Portfolio is a React-based professional portfolio website showcasing experience, projects, skills, and a blog. It features a modern glassmorphic UI with a dark mode aesthetic.

### Latest Updates (May 2, 2025)

1. **Unified Technology Category-Based Coloring**:
   - Created a centralized utility `techCategoryUtils.js` for mapping technologies to categories
   - Fixed outlier colors in Skills section (specifically MS Project and MS Office)
   - Implemented consistent coloring based on category membership
   - Each category now has a single distinct color applied to all its tech badges

2. **Component Reusability Enhancement**:
   - Developed a reusable TechBadge component used across all sections
   - Unified styling across Experience Cards, Project Cards, and Skills sections
   - Made color categories easy to modify from a central location

### Core Components Status

| Component           | Status               | Notes                                             |
|---------------------|----------------------|---------------------------------------------------|
| Navbar              | ✅ Complete          | Mobile responsive, glass effect                   |
| Footer              | ✅ Complete          | Social links, copyright                           |
| Resume Page         | ✅ Complete          | All sections restored and fixed                   |
| Projects Page       | ✅ Complete          | Card layout with Supabase integration             |
| Blog System         | ✅ Basic Complete    | Renders Markdown, future expansion planned        |
| Contact Section     | ✅ Complete          | Social media integration                          |
| Styling System      | ✅ Enhanced          | Category-based badge coloring across all sections |
| Data Integration    | ✅ Complete          | Supabase for experience, projects, skills         |
| Error Handling      | ✅ Complete          | Proper loading states and fallbacks               |

## Component Dependencies

The project now uses this dependency flow for technology badges:

1. `techCategoryUtils.js` - Central mapping of tech to categories and colors
2. `TechBadge.jsx` - Reusable badge component using the utils
3. Components using TechBadge:
   - ExperienceCard.jsx
   - ProjectCard.jsx
   - SkillsSection.jsx

## Technology Category System

The KG iQ badge system categorizes technologies with these consistent colors:

- **BI & Analytics**: blue (`bg-kg-blue text-white`)
- **Languages & Scripting**: yellow (`bg-kg-yellow text-black`)
- **Cloud & Automation**: wine (`bg-kg-wine text-white`)
- **Data Modeling**: green (`bg-kg-green text-black`)
- **Workflow & Collaboration**: gray (`bg-kg-gray text-white`)
- **Supporting Tools**: ash (`bg-kg-ash text-black`)

With this updated approach:
- All technologies within the same category share the same color
- The badge colors now visually reinforce the category structure
- Fixed outlier colors in the Supporting Tools section (MS Project and MS Office now use tan/ash color)

## How to Add New Technologies

To add support for new technologies:
1. Add entries to the `techCategories` object in `src/lib/techCategoryUtils.js`
2. Map each new technology to one of the existing categories
3. No changes needed in individual components

## Data Structure

### Experience Data Model
```javascript
{
  id: Number,
  company: String,
  title: String,
  location: String,
  start_date: String, // ISO date format
  end_date: String,   // ISO date format or null for present
  logo_url: String,   // Path to company logo
  tools: String,      // Comma-separated list
  skills: String,     // Comma-separated list
  order: Number       // Display order
}
```

### Experience Bullets Model
```javascript
{
  id: Number,
  experience_id: Number, // Foreign key to experience table
  content: String        // Bullet point text
}
```

## Next Steps & Future Improvements

1. **Fix Resume Download**: Ensure the download button in ResumeHero.jsx correctly links to an up-to-date PDF version of the resume
2. **Light/Dark Mode Toggle**: Implement theme switching capability
3. **Enhanced Blog System**: Expand blog functionality with categories and search
4. **Project Detail Pages**: Add detailed project case study pages
5. **Testing Suite**: Implement automated testing with Vitest
6. **Dynamic Skills Section**: Consider moving skills to a dedicated Supabase table
7. **Accessibility Improvements**: Ensure WCAG compliance for all components

## Critical Notes & Reminders

- Always maintain snake_case naming for Supabase field references 
- The ExperienceCard now expects `logo_url` (not `logo`) parameter
- Bullet points are styled at the component level in ExperienceCard.jsx
- Global CSS in index.css includes fallback styling for other list components
- If Supabase connection fails, fallback data is provided for all sections
- Always use the TechBadge component for all technology badges
- Add new technologies by updating the techCategoryUtils.js file