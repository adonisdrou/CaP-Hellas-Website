import { LanguageProvider } from '@/contexts/LanguageContext';
import ServicesSection from '../ServicesSection';

export default function ServicesSectionExample() {
  return (
    <LanguageProvider>
      <ServicesSection />
    </LanguageProvider>
  );
}
