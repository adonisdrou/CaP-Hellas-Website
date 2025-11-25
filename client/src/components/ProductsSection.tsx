import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FlipCard from './FlipCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import SVGDivider from './SVGDivider';
import strawberriesImage from '@assets/generated_images/fresh_strawberries_product_photo.png';
import orangesImage from '@assets/generated_images/fresh_oranges_product_photo.png';
import mandarinsImage from '@assets/generated_images/fresh_mandarins_product_photo.png';
import lemonsImage from '@assets/generated_images/fresh_lemons_product_photo.png';
import grapesImage from '@assets/generated_images/fresh_grapes_product_photo.png';
import applesImage from '@assets/generated_images/fresh_apples_product_photo.png';
import peachesImage from '@assets/generated_images/fresh_peaches_product_photo.png';
import watermelonImage from '@assets/generated_images/fresh_watermelon_product_photo.png';
import kiwiImage from '@assets/generated_images/fresh_kiwi_fruit.png';
import apricotsImage from '@assets/generated_images/fresh_apricots_product.png';
import nectarinesImage from '@assets/generated_images/fresh_nectarines_product.png';
import bananasImage from '@assets/generated_images/fresh_bananas_product.png';
import tomatoesImage from '@assets/generated_images/fresh_tomatoes_product_photo.png';
import cucumbersImage from '@assets/generated_images/fresh_cucumbers_product_photo.png';
import peppersImage from '@assets/generated_images/fresh_bell_peppers_photo.png';
import lettuceImage from '@assets/generated_images/fresh_lettuce_product_photo.png';
import carrotsImage from '@assets/generated_images/fresh_carrots_product_photo.png';
import broccoliImage from '@assets/generated_images/fresh_broccoli_product_photo.png';
import cabbageImage from '@assets/generated_images/fresh_cabbage_vegetable.png';
import oliveOilImage from '@assets/generated_images/olive_oil_bottle_photo.png';
import olivesImage from '@assets/generated_images/fresh_olives_product_photo.png';
import pomegranateJuiceImage from '@assets/generated_images/pomegranate_juice_product_photo.png';
import raisinsImage from '@assets/generated_images/raisins_product_photo.png';
import whiteWineImage from '@assets/generated_images/premium_white_wine.png';
import roseWineImage from '@assets/generated_images/premium_rose_wine.png';
import redWineImage from '@assets/generated_images/red_wine_bottle_and_glass.png';
import halvaImage from '@assets/generated_images/traditional_halva_sweet.png';
import honeyImage from '@assets/generated_images/pure_golden_honey.png';
import pepperSpreadsImage from '@assets/generated_images/pepper_spread_product.png';
import jamsImage from '@assets/generated_images/homemade_jams_variety.png';
import tomatoSaucesImage from '@assets/generated_images/tomato_sauce_product.png';
import pickledBeetsImage from '@assets/generated_images/pickled_beets_in_jar.png';
import pickledCucumbersImage from '@assets/generated_images/pickled_cucumbers_product.png';
import capersImage from '@assets/generated_images/capers_in_jar.png';
import fetaCheeseImage from '@assets/generated_images/traditional_feta_cheese.png';
import yogurtImage from '@assets/generated_images/greek_yogurt_large_container.png';
import longPeppersImage from '@assets/generated_images/long_macedonian_peppers.png';
import florinaPeppersInBrineImage from '@assets/generated_images/florina_peppers_in_brine.png';
import redPeppersInOilImage from '@assets/generated_images/red_peppers_in_oil.png';
import driedFigsImage from '@assets/generated_images/natural_dried_figs_rustic.png';
import potatoesImage from '@assets/generated_images/fresh_potatoes_product.png';
import driedFruitsImage from '@assets/generated_images/mixed_dried_fruits_nuts.png';

type ProductKey = 'strawberries' | 'oranges' | 'mandarins' | 'lemons' | 'grapes' | 'apples' | 'peaches' | 'watermelon' | 'kiwi' | 'apricots' | 'nectarines' | 'bananas' | 'tomatoes' | 'cucumbers' | 'peppers' | 'lettuce' | 'carrots' | 'broccoli' | 'cabbage' | 'potatoes' | 'oliveOil' | 'olives' | 'pomegranateJuice' | 'raisins' | 'whiteWine' | 'roseWine' | 'redWine' | 'halva' | 'honey' | 'pepperSpreads' | 'jams' | 'tomatoSauces' | 'pickledBeets' | 'pickledCucumbers' | 'capers' | 'fetaCheese' | 'yogurt' | 'longPeppers' | 'florinaPeppersInBrine' | 'redPeppersInOil' | 'driedFigs' | 'driedFruits';

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
  { nameKey: 'kiwi', image: kiwiImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'apricots', image: apricotsImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'nectarines', image: nectarinesImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'bananas', image: bananasImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'tomatoes', image: tomatoesImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'cucumbers', image: cucumbersImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'peppers', image: peppersImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'lettuce', image: lettuceImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'carrots', image: carrotsImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'broccoli', image: broccoliImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'cabbage', image: cabbageImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'potatoes', image: potatoesImage, origin: 'poland', category: 'vegetables' },
  { nameKey: 'oliveOil', image: oliveOilImage, origin: 'greece', category: 'other' },
  { nameKey: 'olives', image: olivesImage, origin: 'greece', category: 'other' },
  { nameKey: 'pomegranateJuice', image: pomegranateJuiceImage, origin: 'greece', category: 'other' },
  { nameKey: 'raisins', image: raisinsImage, origin: 'greece', category: 'other' },
  { nameKey: 'whiteWine', image: whiteWineImage, origin: 'greece', category: 'other' },
  { nameKey: 'roseWine', image: roseWineImage, origin: 'greece', category: 'other' },
  { nameKey: 'redWine', image: redWineImage, origin: 'greece', category: 'other' },
  { nameKey: 'halva', image: halvaImage, origin: 'greece', category: 'other' },
  { nameKey: 'honey', image: honeyImage, origin: 'greece', category: 'other' },
  { nameKey: 'pepperSpreads', image: pepperSpreadsImage, origin: 'greece', category: 'other' },
  { nameKey: 'jams', image: jamsImage, origin: 'greece', category: 'other' },
  { nameKey: 'tomatoSauces', image: tomatoSaucesImage, origin: 'greece', category: 'other' },
  { nameKey: 'pickledBeets', image: pickledBeetsImage, origin: 'greece', category: 'other' },
  { nameKey: 'pickledCucumbers', image: pickledCucumbersImage, origin: 'greece', category: 'other' },
  { nameKey: 'capers', image: capersImage, origin: 'greece', category: 'other' },
  { nameKey: 'fetaCheese', image: fetaCheeseImage, origin: 'greece', category: 'other' },
  { nameKey: 'yogurt', image: yogurtImage, origin: 'greece', category: 'other' },
  { nameKey: 'longPeppers', image: longPeppersImage, origin: 'greece', category: 'vegetables' },
  { nameKey: 'florinaPeppersInBrine', image: florinaPeppersInBrineImage, origin: 'greece', category: 'other' },
  { nameKey: 'redPeppersInOil', image: redPeppersInOilImage, origin: 'greece', category: 'other' },
  { nameKey: 'driedFigs', image: driedFigsImage, origin: 'greece', category: 'fruits' },
  { nameKey: 'driedFruits', image: driedFruitsImage, origin: 'greece', category: 'other' },
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
    <>
      <SVGDivider variant="wave" className="bg-white dark:bg-slate-900" />
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
                {getProductsByCategory(category).map((product, idx) => (
                  <div key={product.nameKey} style={{ animationDelay: `${idx * 50}ms` }}>
                    <FlipCard
                      name={t.products.items[product.nameKey]}
                      image={product.image}
                      origin={product.origin}
                      category={getCategoryLabel(product.category)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        </div>
      </section>
      <SVGDivider variant="curve" className="bg-white dark:bg-slate-900" />
    </>
  );
}
