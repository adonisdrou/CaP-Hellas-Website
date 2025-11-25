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
    <Card className="overflow-hidden hover-elevate transition-all group">
      <div className="aspect-square relative overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg" data-testid={`text-product-name`}>
            {name}
          </h3>
          <Badge variant="secondary" className="text-xs">
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
