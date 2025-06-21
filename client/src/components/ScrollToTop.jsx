// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // Whenever the pathname changes (i.e., route changes), scroll to the top
    window.scrollTo(0, 0);
  }, [pathname]); // Depend on pathname, so it runs on every route change

  return null; // This component doesn't render any UI
}

export default ScrollToTop;