import { LanguageProvider } from '@/contexts/LanguageContext';
import Footer from '../Footer';

export default function FooterExample() {
  return (
    <LanguageProvider>
      <Footer />
    </LanguageProvider>
  );
}
