import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all border-2 border-primary/30 shadow-lg hover:shadow-2xl hover:border-primary/60 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardContent className="p-8 relative">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300 shadow-md">
            <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
          <h3 className="text-xl font-semibold" data-testid={`text-service-title`}>
            {title}
          </h3>
          <p className="text-muted-foreground" data-testid={`text-service-description`}>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
