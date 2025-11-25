import { useLanguage } from '@/contexts/LanguageContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function Logo({ size = 'md', showTagline = false }: LogoProps) {
  const { language } = useLanguage();
  
  const sizes = {
    sm: { logo: 'text-xl', tagline: 'text-xs' },
    md: { logo: 'text-2xl', tagline: 'text-sm' },
    lg: { logo: 'text-4xl', tagline: 'text-base' },
  };

  const taglines = {
    en: 'General Food Trade',
    el: 'ΓΕΝΙΚΟ ΕΜΠΟΡΙΟ ΤΡΟΦΙΜΩΝ',
    pl: 'OGÓLNY HANDEL ŻYWNOŚCIĄ',
  };

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 40 40" className={size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-14 h-14'}>
            <circle cx="10" cy="10" r="8" className="fill-accent" />
            <circle cx="28" cy="10" r="6" className="fill-yellow-500" />
            <path d="M8 25 Q20 20, 32 25 Q20 35, 8 25Z" className="fill-primary" />
            <circle cx="20" cy="30" r="6" className="fill-primary opacity-70" />
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className={`font-serif italic ${sizes[size].logo} text-primary`}>
              CaP
            </span>
            <span className={`font-sans font-medium ${size === 'sm' ? 'text-base' : size === 'md' ? 'text-lg' : 'text-2xl'} text-primary`}>
              Hellas
            </span>
            <span className={`font-sans ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-lg'} text-muted-foreground`}>
              EE
            </span>
          </div>
          <span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs'} font-medium px-2 py-0.5 rounded-sm inline-block w-fit bg-accent text-accent-foreground`}>
            IMPORT - EXPORT
          </span>
        </div>
      </div>
      {showTagline && (
        <p className={`${sizes[size].tagline} text-muted-foreground mt-1 tracking-wide`}>
          {taglines[language]}
        </p>
      )}
    </div>
  );
}
