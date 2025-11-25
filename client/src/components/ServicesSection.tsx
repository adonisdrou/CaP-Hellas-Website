import { useLanguage } from '@/contexts/LanguageContext';
import ServiceCard from './ServiceCard';
import { Import, FolderOutput, Package } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Import,
      title: t.services.import.title,
      description: t.services.import.description,
    },
    {
      icon: FolderOutput,
      title: t.services.export.title,
      description: t.services.export.description,
    },
    {
      icon: Package,
      title: t.services.range.title,
      description: t.services.range.description,
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'hsl(var(--section-light-green))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-services-title">
          {t.services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
