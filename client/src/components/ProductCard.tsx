import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  name: string;
  image: string;
  origin: 'greece' | 'poland';
  category: string;
}

export default function ProductCard({ name, image, origin, category }: ProductCardProps) {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden hover-elevate transition-all group border-2 border-accent/30 shadow-lg hover:shadow-xl hover:border-accent/60">
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4 bg-gradient-to-br from-card to-card/80">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg" data-testid={`text-product-name`}>
            {name}
          </h3>
          <Badge variant="default" className="text-xs bg-accent/90 hover:bg-accent">
            {t.products.origin[origin]}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground" data-testid={`text-product-category`}>
          {category}
        </p>
      </CardContent>
    </Card>
  );
}
