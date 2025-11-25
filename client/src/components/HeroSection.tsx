import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/hero_shipping_produce_image.png';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const taglines = {
    en: 'General Food Trade',
    el: 'ΓΕΝΙΚΟ ΕΜΠΟΡΙΟ ΤΡΟΦΙΜΩΝ',
    pl: 'OGÓLNY HANDEL ŻYWNOŚCIĄ',
  };

  return (
    <section id="home" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white">CaP</span>
            <span className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl text-white">Hellas</span>
            <span className="font-sans text-xl sm:text-2xl md:text-3xl text-white/80">EE</span>
          </div>
          <span className="text-sm sm:text-base font-medium px-4 py-1.5 rounded-md inline-block bg-accent text-accent-foreground">
            IMPORT - EXPORT
          </span>
          <p className="text-white/80 text-sm sm:text-base mt-2 tracking-wider">
            {taglines[language]}
          </p>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-title">
          {t.hero.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToProducts}
            className="gap-2 text-base w-full sm:w-auto"
            data-testid="button-hero-cta"
          >
            {t.hero.cta}
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="gap-2 text-base w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            data-testid="button-hero-contact"
          >
            {t.nav.contact}
          </Button>
        </div>
      </div>
    </section>
  );
}
