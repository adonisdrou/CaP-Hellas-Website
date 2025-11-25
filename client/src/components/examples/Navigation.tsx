import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '../Navigation';

export default function NavigationExample() {
  return (
    <LanguageProvider>
      <Navigation />
    </LanguageProvider>
  );
}
