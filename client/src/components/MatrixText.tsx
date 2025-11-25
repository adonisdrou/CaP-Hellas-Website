import { useEffect, useState } from 'react';

interface MatrixTextProps {
  text: string;
  className?: string;
}

export default function MatrixText({ text, className = '' }: MatrixTextProps) {
  const [displayedChars, setDisplayedChars] = useState<(string | null)[]>([]);

  useEffect(() => {
    const chars = text.split('');
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < chars.length) {
        setDisplayedChars(chars.map((c, i) => (i <= currentIndex ? c : null)));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={className}>
      {displayedChars.map((char, idx) => (
        <span
          key={idx}
          className={`inline-block ${char === null ? 'text-transparent' : ''}`}
          style={{
            animation: char !== null ? `glow-text 0.5s ease-out` : 'none',
            textShadow:
              char !== null
                ? `0 0 10px hsl(130 50% 28%), 0 0 20px hsl(20 85% 55%)`
                : 'none',
          }}
        >
          {char || ' '}
        </span>
      ))}
    </span>
  );
}
