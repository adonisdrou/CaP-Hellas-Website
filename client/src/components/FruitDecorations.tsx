interface FruitDecorationsProps {
  className?: string;
}

export default function FruitDecorations({ className = '' }: FruitDecorationsProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" className="fill-accent" />
        <path d="M12 2 Q14 5, 12 7" className="stroke-primary" strokeWidth="2" fill="none" />
      </svg>
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" className="fill-yellow-500" />
      </svg>
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M4 12 Q12 4, 20 12 Q12 20, 4 12Z" className="fill-primary" />
      </svg>
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" className="fill-primary opacity-80" />
        <circle cx="9" cy="10" r="2" className="fill-primary-foreground opacity-30" />
        <circle cx="15" cy="10" r="2" className="fill-primary-foreground opacity-30" />
        <path d="M8 15 Q12 18, 16 15" className="stroke-primary-foreground opacity-30" strokeWidth="1.5" fill="none" />
      </svg>
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <circle cx="12" cy="12" r="10" className="fill-accent opacity-80" />
      </svg>
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M2 12 Q12 2, 22 12" className="fill-primary" />
      </svg>
    </div>
  );
}
