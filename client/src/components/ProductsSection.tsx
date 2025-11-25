import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from './ProductCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import strawberriesImage from '@assets/stock_images/fresh_strawberries_26fb8293.jpg';
import orangesImage from '@assets/stock_images/fresh_oranges_citrus_dbc967ef.jpg';
import mandarinsImage from '@assets/stock_images/fresh_mandarins_tang_f0c0b7b9.jpg';
import lemonsImage from '@assets/stock_images/fresh_lemons_yellow__f6a2848d.jpg';
import grapesImage from '@assets/stock_images/fresh_green_grapes_b_3f45a374.jpg';
import applesImage from '@assets/stock_images/fresh_red_apples_4f24fcfb.jpg';
import peachesImage from '@assets/stock_images/fresh_peaches_ripe_f_0325d79f.jpg';
import watermelonImage from '@assets/stock_images/fresh_watermelon_sli_d82eab3c.jpg';
import tomatoesImage from '@assets/stock_images/fresh_ripe_tomatoes_380244ee.jpg';
import cucumbersImage from '@assets/stock_images/fresh_green_cucumber_201ab74d.jpg';
import peppersImage from '@assets/stock_images/fresh_bell_peppers_c_11cbaf15.jpg';
import lettuceImage from '@assets/stock_images/fresh_green_lettuce__89a066f9.jpg';
import carrotsImage from '@assets/stock_images/fresh_orange_carrots_d46624a4.jpg';
import broccoliImage from '@assets/stock_images/fresh_green_broccoli_bcf8160c.jpg';
import oliveOilImage from '@assets/stock_images/olive_oil_bottle_pre_f6d9166f.jpg';
import olivesImage from '@assets/stock_images/fresh_green_olives_m_829465de.jpg';
import pomegranateJuiceImage from '@assets/stock_images/pomegranate_juice_fr_8f050761.jpg';
import raisinsImage from '@assets/stock_images/dark_raisins_dried_f_f41c5f23.jpg';

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
    <section id="products" className="py-20 scroll-mt-16" style={{ backgroundColor: 'hsl(var(--section-light-orange))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" data-testid="text-products-title">
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
