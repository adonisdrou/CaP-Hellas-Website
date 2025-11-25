import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="transition-all duration-500 border-2 border-primary/30 shadow-lg hover:shadow-2xl hover:border-primary/60 group overflow-hidden glassmorphism hover:scale-105 h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-8 relative">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-500 shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-12">
            <Icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-500" />
          </div>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-500" data-testid={`text-service-title`}>
            {title}
          </h3>
          <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-500" data-testid={`text-service-description`}>
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
