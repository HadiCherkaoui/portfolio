"use client";

import { useCallback, useRef } from "react";

/**
 * Hook to track mouse position for spotlight effect on cards
 * Usage: Attach ref to element, spread spotlightProps to element style
 */
export function useSpotlight<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    elementRef.current.style.setProperty("--mouse-x", `${x}%`);
    elementRef.current.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const spotlightProps = {
    onMouseMove: handleMouseMove,
    className: "spotlight-card",
  };

  return {
    ref: elementRef,
    spotlightProps,
  };
}

export default useSpotlight;
