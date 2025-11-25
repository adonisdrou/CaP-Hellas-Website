import { useEffect, useRef, useState } from 'react';

export const useParallax = (offset: number = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = scrolled + top;
        const elementHeight = ref.current.clientHeight;

        if (elementTop - window.innerHeight < scrolled && scrolled < elementTop + elementHeight) {
          setTranslateY(scrolled * offset);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return { ref, translateY };
};
