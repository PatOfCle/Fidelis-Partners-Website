"use client"

import React, { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation';

function ScrollToTop() {
    
    const pathname = usePathname()
    
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on component mount
      }, [pathname]); // Empty dependency array ensures this effect runs only once after the initial render
    
  return (
    null
  )
}

export default ScrollToTop