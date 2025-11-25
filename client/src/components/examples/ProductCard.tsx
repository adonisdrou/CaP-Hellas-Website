import { LanguageProvider } from '@/contexts/LanguageContext';
import ProductCard from '../ProductCard';
import strawberriesImage from '@assets/generated_images/fresh_strawberries_product_photo.png';

export default function ProductCardExample() {
  return (
    <LanguageProvider>
      <ProductCard
        name="Fresh Strawberries"
        image={strawberriesImage}
        origin="greece"
        category="Premium Fruits"
      />
    </LanguageProvider>
  );
}
