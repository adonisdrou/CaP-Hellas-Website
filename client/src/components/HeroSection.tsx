import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/hero_shipping_produce_image.png';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          {t.hero.subtitle}
        </p>
        <Button
          size="lg"
          onClick={scrollToProducts}
          className="gap-2 text-base bg-primary/90 backdrop-blur-sm hover:bg-primary border border-primary-border"
          data-testid="button-hero-cta"
        >
          {t.hero.cta}
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
