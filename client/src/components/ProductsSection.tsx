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

export default function ProductsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('fruits');

  const products = {
    fruits: [
      { name: 'Strawberries', image: strawberriesImage, origin: 'greece' as const, category: t.products.categories.fruits },
      { name: 'Oranges', image: orangesImage, origin: 'greece' as const, category: t.products.categories.fruits },
      { name: 'Grapes', image: grapesImage, origin: 'greece' as const, category: t.products.categories.fruits },
      { name: 'Apples', image: applesImage, origin: 'poland' as const, category: t.products.categories.fruits },
      { name: 'Watermelon', image: watermelonImage, origin: 'greece' as const, category: t.products.categories.fruits },
    ],
    vegetables: [
      { name: 'Tomatoes', image: tomatoesImage, origin: 'greece' as const, category: t.products.categories.vegetables },
      { name: 'Cucumbers', image: cucumbersImage, origin: 'greece' as const, category: t.products.categories.vegetables },
      { name: 'Bell Peppers', image: peppersImage, origin: 'greece' as const, category: t.products.categories.vegetables },
      { name: 'Lettuce', image: lettuceImage, origin: 'poland' as const, category: t.products.categories.vegetables },
      { name: 'Carrots', image: carrotsImage, origin: 'poland' as const, category: t.products.categories.vegetables },
      { name: 'Broccoli', image: broccoliImage, origin: 'poland' as const, category: t.products.categories.vegetables },
    ],
  };

  return (
    <section id="products" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12" data-testid="text-products-title">
          {t.products.title}
        </h2>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="fruits" data-testid="button-category-fruits">
              {t.products.categories.fruits}
            </TabsTrigger>
            <TabsTrigger value="vegetables" data-testid="button-category-vegetables">
              {t.products.categories.vegetables}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fruits">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.fruits.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vegetables">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.vegetables.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
