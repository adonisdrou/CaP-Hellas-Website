import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-lg bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
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
