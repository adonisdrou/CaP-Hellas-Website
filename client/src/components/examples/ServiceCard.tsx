import ServiceCard from '../ServiceCard';
import { Package } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <ServiceCard
      icon={Package}
      title="Import Services"
      description="High-quality Greek products delivered to Poland, including Mediterranean fruits, vegetables, and specialty items."
    />
  );
}
