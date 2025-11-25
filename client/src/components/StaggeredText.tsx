import { useEffect, useState } from 'react';

interface StaggeredTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

export default function StaggeredText({ text, className = '', staggerDelay = 50 }: StaggeredTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, staggerDelay);

    return () => clearInterval(interval);
  }, [text, staggerDelay]);

  return <span className={className}>{displayedText}</span>;
}
