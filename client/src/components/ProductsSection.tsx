import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from './ProductCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import strawberriesImage from '@assets/generated_images/fresh_strawberries_product_photo.png';
import orangesImage from '@assets/generated_images/fresh_oranges_product_photo.png';
import tomatoesImage from '@assets/generated_images/fresh_tomatoes_product_photo.png';
import cucumbersImage from '@assets/generated_images/fresh_cucumbers_product_photo.png';
import peppersImage from '@assets/generated_images/fresh_bell_peppers_photo.png';
import lettuceImage from '@assets/generated_images/fresh_lettuce_product_photo.png';
import grapesImage from '@assets/generated_images/fresh_grapes_product_photo.png';
import applesImage from '@assets/generated_images/fresh_apples_product_photo.png';
import carrotsImage from '@assets/generated_images/fresh_carrots_product_photo.png';
import broccoliImage from '@assets/generated_images/fresh_broccoli_product_photo.png';
import watermelonImage from '@assets/generated_images/fresh_watermelon_product_photo.png';
import mandarinsImage from '@assets/generated_images/fresh_mandarins_product_photo.png';
import lemonsImage from '@assets/generated_images/fresh_lemons_product_photo.png';
import peachesImage from '@assets/generated_images/fresh_peaches_product_photo.png';
import oliveOilImage from '@assets/generated_images/olive_oil_bottle_photo.png';
import olivesImage from '@assets/generated_images/fresh_olives_product_photo.png';
import pomegranateJuiceImage from '@assets/generated_images/pomegranate_juice_product_photo.png';
import raisinsImage from '@assets/generated_images/raisins_product_photo.png';

type ProductKey = 'strawberries' | 'oranges' | 'mandarins' | 'lemons' | 'grapes' | 'apples' | 'peaches' | 'watermelon' | 'tomatoes' | 'cucumbers' | 'peppers' | 'lettuce' | 'carrots' | 'broccoli' | 'oliveOil' | 'olives' | 'pomegranateJuice' | 'raisins';

interface Product {
  nameKey: ProductKey;
  image: string;
  origin: 'greece' | 'poland';
  category: 'fruits' | 'vegetables' | 'other';
}

const allProducts: Product[] = [
  { nameKey: 'strawberries', image: strawberriesImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'oranges', image: orangesImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'mandarins', image: mandarinsImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'lemons', image: lemonsImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'grapes', image: grapesImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'apples', image: applesImage, origin: 'poland', category: 'fruits' },
  { nameKey: 'peaches', image: peachesImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'watermelon', image: watermelonImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'tomatoes', image: tomatoesImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'cucumbers', image: cucumbersImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'peppers', image: peppersImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'lettuce', image: lettuceImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'carrots', image: carrotsImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'broccoli', image: broccoliImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'oliveOil', image: oliveOilImage, origin: 'greece', category: 'other' },
  { nameKey: 'olives', image: olivesImage, origin: 'greece', category: 'other' },
  { nameKey: 'pomegranateJuice', image: pomegranateJuiceImage, origin: 'greece', category: 'other' },
  { nameKey: 'raisins', image: raisinsImage, origin: 'greece', category: 'other' },
];

export default function ProductsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('fruits');

  const getProductsByCategory = (category: string) => {
    return allProducts.filter(p => p.category === category);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'fruits': return t.products.categories.fruits;
      case 'vegetables': return t.products.categories.vegetables;
      case 'other': return t.products.categories.other;
      default: return category;
    }
  };

  return (
    <section id="products" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-products-title">
          {t.products.title}
        </h2>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="fruits" data-testid="button-category-fruits">
              {t.products.categories.fruits}
            </TabsTrigger>
            <TabsTrigger value="vegetables" data-testid="button-category-vegetables">
              {t.products.categories.vegetables}
            </TabsTrigger>
            <TabsTrigger value="other" data-testid="button-category-other">
              {t.products.categories.other}
            </TabsTrigger>
          </TabsList>

          {['fruits', 'vegetables', 'other'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getProductsByCategory(category).map((product) => (
                  <ProductCard
                    key={product.nameKey}
                    name={t.products.items[product.nameKey]}
                    image={product.image}
                    origin={product.origin}
                    category={getCategoryLabel(product.category)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
