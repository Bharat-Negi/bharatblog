"use client";
import React, { useState, useEffect } from 'react';


export default function PreLoader() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
    // Method 1: Wait for page to fully load
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Method 2: Wait for both DOM and resources to load
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handlePageLoad);
      
      // Fallback: Hide after 3 seconds max
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => {
        window.removeEventListener('load', handlePageLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  if (!isLoading) return null;
  
    return (
        <div id="preloader" className="preloader"></div>
    )
}
