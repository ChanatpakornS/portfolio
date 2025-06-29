import { useState, useEffect, type RefObject } from "react";

export const useMaskCursor = (containerRef?: RefObject<HTMLElement | null>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (event: Event) => {
    const mouseEvent = event as MouseEvent;
    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top,
      });
    } else {
      setMousePosition({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    }
  };

  useEffect(() => {
    const target = containerRef?.current || window;
    target.addEventListener("mousemove", updateMousePosition);

    return () => {
      target.removeEventListener("mousemove", updateMousePosition);
    };
  }, [containerRef]);

  return mousePosition;
};
