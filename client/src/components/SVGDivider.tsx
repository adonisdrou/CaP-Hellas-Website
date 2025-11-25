interface SVGDividerProps {
  variant?: 'wave' | 'curve' | 'zigzag';
  className?: string;
}

export default function SVGDivider({ variant = 'wave', className = '' }: SVGDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24"
      >
        {variant === 'wave' && (
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="hsl(var(--card))"
            className="animate-pulse opacity-80"
          />
        )}
        {variant === 'curve' && (
          <path
            d="M0,30 Q300,100 600,30 T1200,30 L1200,120 L0,120 Z"
            fill="hsl(var(--card))"
            className="animate-pulse opacity-70"
          />
        )}
        {variant === 'zigzag' && (
          <path
            d="M0,60 L150,20 L300,60 L450,20 L600,60 L750,20 L900,60 L1050,20 L1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--card))"
            className="animate-pulse opacity-60"
          />
        )}
      </svg>
    </div>
  );
}
