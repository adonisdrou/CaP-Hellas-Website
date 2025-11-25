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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? 'animate-float-up opacity-100' : 'opacity-0'}`}
    >
      <Card className="overflow-hidden group border-2 border-accent/20 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-accent/60 h-full glassmorphism">
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
        </CardContent>
      </Card>
    </div>
  );
}
