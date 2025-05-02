// src/lib/logoUtils.js

/**
 * Company logo configuration for the resume experience cards
 * This allows for central management of logo paths and fallback images
 */
export const companyLogos = {
    'Trace3': '/logos/trace3-logo.svg',
    'Tail Wind Informatics': '/logos/tailwind-informatics-logo.svg',
    'QHR Health': '/logos/qhr-health-logo.svg',
    'Advantage DX, Inc.': '/logos/adx-data-logo.svg',
    'Marquis Labs': '/logos/marquis-labs-logo.svg',
    'KRG Holding': '/logos/krg-holding-logo.svg',
    'OnProcess Technology': '/logos/onprocess-logo.svg',
    // Add any other companies as needed
  };
  
  /**
   * Get the proper logo path for a company
   * @param {string} company - Company name
   * @returns {string} - Path to the company logo
   */
  export function getLogoPath(company) {
    // If we have a specific mapping for this company, use it
    if (companyLogos[company]) {
      return companyLogos[company];
    }
    
    // Otherwise, try a generic path based on the company name
    const normalized = company.toLowerCase().replace(/\s+/g, '-');
    return `/logos/${normalized}-logo.svg`;
  }
  
  /**
   * Create a more user-friendly company name for display
   * @param {string} companyName - Original company name 
   * @returns {string} - Formatted company name
   */
  export function formatCompanyName(companyName) {
    // Add any company name formatting logic here
    return companyName;
  }