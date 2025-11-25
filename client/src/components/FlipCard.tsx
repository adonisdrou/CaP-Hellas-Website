import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FlipCardProps {
  name: string;
  image: string;
  origin: 'greece' | 'poland';
  category: string;
}

export default function FlipCard({ name, image, origin, category }: FlipCardProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 perspective ${isVisible ? 'animate-float-up opacity-100' : 'opacity-0'}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-gpu`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div style={{ backfaceVisibility: 'hidden' }}>
          <Card className="overflow-hidden group border-2 border-accent/20 shadow-[0_0_20px_hsl(20_85%_55_/_0.3)] transition-all duration-500 hover:shadow-[0_0_50px_hsl(20_85%_55_/_0.6),_0_0_100px_hsl(130_50%_28_/_0.4)] hover:border-accent/80 h-full glassmorphism cursor-pointer">
            <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />
            </div>
            <CardContent className="p-4 bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {name}
                </h3>
                <Badge variant="default" className="text-xs bg-accent/90 hover:bg-accent shadow-lg animate-glow-pulse">
                  {t.products.origin[origin]}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                {category}
              </p>
              <p className="text-xs text-accent mt-2 font-semibold">Click to flip</p>
            </CardContent>
          </Card>
        </div>

        {/* Back */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Card className="overflow-hidden border-2 border-primary/60 shadow-[0_0_30px_hsl(130_50%_28_/_0.5),_0_0_60px_hsl(20_85%_55_/_0.3)] h-full glassmorphism cursor-pointer bg-gradient-to-br from-primary/30 to-accent/20 animate-quantum-pulse">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {name}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Origin: <span className="font-semibold">{t.products.origin[origin]}</span></p>
                <p>Category: <span className="font-semibold">{category}</span></p>
              </div>
              <div className="text-xs text-accent font-semibold mt-4">Click to flip back</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
