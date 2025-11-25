import { LanguageProvider } from '@/contexts/LanguageContext';
import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  return (
    <LanguageProvider>
      <HeroSection />
    </LanguageProvider>
  );
}
