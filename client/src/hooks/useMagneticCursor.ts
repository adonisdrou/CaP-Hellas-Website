import { useEffect, useRef } from 'react';

export const useMagneticCursor = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const distance = 100; // Pull distance in pixels
      const angle = Math.atan2(e.clientY - elementCenterY, e.clientX - elementCenterX);
      
      const distFromCenter = Math.hypot(
        e.clientX - elementCenterX,
        e.clientY - elementCenterY
      );

      if (distFromCenter < distance) {
        const pullX = Math.cos(angle) * (distance - distFromCenter) * 0.3;
        const pullY = Math.sin(angle) * (distance - distFromCenter) * 0.3;

        element.style.transform = `translate(${pullX}px, ${pullY}px)`;
      } else {
        element.style.transform = 'translate(0, 0)';
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
