// src/components/SocialIcon.jsx
import React from 'react';

/**
 * Renders a social media icon as a clickable link.
 * Includes SVG icons for email and LinkedIn.
 *
 * @param {object} props - The component props.
 * @param {'email' | 'linkedin'} props.type - The type of social icon to render.
 * @param {string} props.url - The URL the icon should link to.
 * @param {string} props.label - Accessible label for the link (e.g., "Email Link").
 * @param {string} [props.className=''] - Additional Tailwind CSS classes for styling the link wrapper.
 */
function SocialIcon({ type, url, label, className = '' }) {
  let iconSvg = null;
  // Base styling for the link wrapper (the clickable area around the icon)
  // The size and color of the SVG itself within this wrapper will be controlled by className passed from parent
  const baseClasses = "inline-flex items-center justify-center p-2 rounded-full";

  // Validate the URL: must be a string and start with a known protocol
  const isValidUrl = typeof url === 'string' && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:'));

  if (!isValidUrl) {
    // Log a warning in development mode for easier debugging
    if (process.env.NODE_ENV === 'development') {
      console.warn(`SocialIcon: Invalid or missing URL for type "${type}". URL provided: "${url}"`);
    }
    return null; // Do not render the icon if the URL is invalid or missing
  }

  switch (type) {
    case 'email':
      iconSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-full h-full" // Use w-full h-full to make SVG fill its parent (controlled by className from AllTeamMembersPage)
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      );
      break;
    case 'linkedin':
      iconSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-full h-full" // Use w-full h-full to make SVG fill its parent (controlled by className from AllTeamMembersPage)
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38-.991-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 6.4v9.1h-4.96v-9.1h4.96zm8.858-1.114c-2.88 0-3.551 1.921-3.551 3.55v6.664h4.893v-6.906c0-1.579.704-2.51 1.836-2.51 1.132 0 1.835.931 1.835 2.51v6.906h4.893v-6.664c0-2.296-1.189-4.886-4.665-4.886z"/>
        </svg>
      );
      break;
    default:
      // If an unsupported 'type' is passed, log a warning and don't render an icon
      if (process.env.NODE_ENV === 'development') {
        console.warn(`SocialIcon: Unsupported social icon type specified: "${type}". Please check the 'type' prop.`);
      }
      return null; // Don't render anything if the type is not recognized
  }

  return (
    <a
      href={url}
      target="_blank" // Opens link in a new tab
      rel="noopener noreferrer" // Security best practice for target="_blank"
      aria-label={label} // Important for accessibility
      className={`${baseClasses} ${className}`} // Combines base and custom classes
    >
      {iconSvg}
    </a>
  );
}

export default SocialIcon;