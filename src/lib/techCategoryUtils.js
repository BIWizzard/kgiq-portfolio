// src/lib/techCategoryUtils.js
/**
 * Utility functions for categorizing technologies and applying consistent colors by category
 */

// Map technologies to their categories
export const getTechCategory = (tech) => {
    const techCategories = {
      // BI & Analytics
      'Power BI': 'BI & Analytics',
      'Power BI (Desktop)': 'BI & Analytics',
      'Power BI (Desktop and Service)': 'BI & Analytics',
      'Power BI (Service)': 'BI & Analytics',
      'Power BI (Embedded)': 'BI & Analytics',
      'DAX Studio': 'BI & Analytics',
      'Tabular Editor': 'BI & Analytics',
      'Fabric': 'BI & Analytics',
      'Power Apps': 'BI & Analytics',
      
      // Languages & Scripting
      'T-SQL': 'Languages & Scripting',
      'DAX': 'Languages & Scripting',
      'M': 'Languages & Scripting',
      'M (Power Query Language)': 'Languages & Scripting',
      'Power Query': 'Languages & Scripting',
      'SQL': 'Languages & Scripting',
      'HTML': 'Languages & Scripting',
      'HTML/CSS': 'Languages & Scripting',
      'CSS': 'Languages & Scripting',
      'JavaScript': 'Languages & Scripting',
      'TypeScript': 'Languages & Scripting',
      'Python': 'Languages & Scripting',
      'Bootstrap': 'Languages & Scripting',
      
      // Cloud & Automation
      'Azure': 'Cloud & Automation',
      'Azure Data Factory': 'Cloud & Automation',
      'Data Factory': 'Data Modeling', // This matches your screenshot placement
      'Azure Logic Apps': 'Cloud & Automation',
      'Logic Apps': 'Cloud & Automation',
      'Power Automate': 'Cloud & Automation',
      'Azure SQL': 'Cloud & Automation',
      'Azure DevOps': 'Cloud & Automation',
      'Azure Test Plans': 'Cloud & Automation',
      
      // Data Modeling
      'Semantic Models': 'Data Modeling',
      'Relational Modeling': 'Data Modeling',
      'Dimensional Modeling': 'Data Modeling',
      'RLS': 'Data Modeling',
      'RLS (Row-Level Security)': 'Data Modeling',
      'KPI Development': 'Data Modeling',
      'ETL': 'Data Modeling',
      'ETL Process': 'Data Modeling',
      
      // Workflow & Collaboration
      'Visual Studio': 'Workflow & Collaboration',
      'JIRA': 'Workflow & Collaboration',
      'Confluence': 'Workflow & Collaboration',
      'Lucid Chart': 'Workflow & Collaboration',
      'Lucidchart': 'Workflow & Collaboration',
      'Azure DevOps Boards': 'Workflow & Collaboration',
      'Project Management': 'Workflow & Collaboration',
      'Business Development': 'Workflow & Collaboration',
      'Process Engineering': 'Workflow & Collaboration',
      'QA': 'Workflow & Collaboration',
      'Deployment Pipeline': 'Workflow & Collaboration',
      'Deployment Pipeline Administration': 'Workflow & Collaboration',
      'ALM Toolkit': 'Workflow & Collaboration',
      
      // Supporting Tools & Third-party systems
      'SSMS': 'Supporting Tools',
      'MySQL': 'Supporting Tools',
      'MySQL Workbench': 'Supporting Tools',
      'Salesforce': 'Supporting Tools',
      'Siebel': 'Supporting Tools',
      'Siebel Analytics': 'Supporting Tools',
      'Labgen': 'Supporting Tools',
      'MediTech': 'Supporting Tools',
      'Vantage': 'Supporting Tools',
      'CHARM EHR': 'Supporting Tools',
      'Optum': 'Supporting Tools',
      'Caspio': 'Supporting Tools',
      'Claim MD': 'Supporting Tools',
      'Availity': 'Supporting Tools',
      'CSG': 'Supporting Tools',
      'Oracle Workforce Management': 'Supporting Tools',
      'AWS': 'Supporting Tools',
      'Excel': 'Supporting Tools',
      'Powerpoint': 'Supporting Tools',
      'MS Project': 'Supporting Tools', // Fixed - explicitly set to Supporting Tools
      'MS Office': 'Supporting Tools', // Fixed - explicitly set to Supporting Tools
      'MS Access': 'Supporting Tools',
      'Visio': 'Supporting Tools',
      
      // React ecosystem
      'React': 'Languages & Scripting',
      'Supabase': 'Cloud & Automation',
      'Vite': 'Supporting Tools',
      'Tailwind': 'Languages & Scripting',
      'Tailwind CSS': 'Languages & Scripting',
      'Node': 'Languages & Scripting',
      'Next': 'Languages & Scripting',
      'OpenAI API': 'Cloud & Automation',
      'SCSS': 'Languages & Scripting',
      'Chart.js': 'Supporting Tools',
      'D3': 'Supporting Tools',
      'GPT-4': 'Supporting Tools',
    };
    
    return techCategories[tech] || 'Supporting Tools';
  };
  
  // Get color classes based on category
  export const getCategoryColorClasses = (category) => {
    const categoryColors = {
      'BI & Analytics': 'bg-kg-blue text-white',
      'Languages & Scripting': 'bg-kg-yellow text-black',
      'Cloud & Automation': 'bg-kg-wine text-white',
      'Data Modeling': 'bg-kg-green text-black',
      'Workflow & Collaboration': 'bg-kg-gray text-white',
      'Supporting Tools': 'bg-kg-ash text-black',
    };
    
    return categoryColors[category] || 'bg-kg-ash2 text-black';
  };
  
  // Get color classes for a specific tech
  export const getTechColorClasses = (tech) => {
    const category = getTechCategory(tech);
    return getCategoryColorClasses(category);
  };