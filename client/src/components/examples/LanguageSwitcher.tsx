import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';

export default function LanguageSwitcherExample() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  );
}
