import { LanguageProvider } from '@/contexts/LanguageContext';
import ProductsSection from '../ProductsSection';

export default function ProductsSectionExample() {
  return (
    <LanguageProvider>
      <ProductsSection />
    </LanguageProvider>
  );
}
