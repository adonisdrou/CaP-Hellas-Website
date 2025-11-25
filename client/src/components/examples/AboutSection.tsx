import { LanguageProvider } from '@/contexts/LanguageContext';
import AboutSection from '../AboutSection';

export default function AboutSectionExample() {
  return (
    <LanguageProvider>
      <AboutSection />
    </LanguageProvider>
  );
}
