import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/hero_shipping_produce_image.png';
import { useMagneticCursor } from '@/hooks/useMagneticCursor';
import { useParallax } from '@/hooks/useParallax';
import MatrixText from './MatrixText';
import NeonBorder from './NeonBorder';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const magneticRef = useMagneticCursor();
  const { ref, translateY } = useParallax(0.5);

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
    <section id="home" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden" ref={ref}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${translateY}px)`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 animate-gradient-shift" 
        style={{
          backgroundImage: `linear-gradient(-45deg, rgba(0,0,0,0.7), rgba(40,167,69,0.2), rgba(20,85,35,0.1), rgba(0,0,0,0.7))`,
          backgroundSize: '200% 200%'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white animate-holographic">CaP</span>
            <span className="font-sans font-medium text-3xl sm:text-4xl md:text-5xl text-white animate-holographic" style={{ animationDelay: '0.2s' }}>Hellas</span>
            <span className="font-sans text-xl sm:text-2xl md:text-3xl text-white/80 animate-holographic" style={{ animationDelay: '0.4s' }}>EE</span>
          </div>
          <NeonBorder className="px-4 py-1.5 rounded-md inline-block bg-accent text-accent-foreground">
            <span className="text-sm sm:text-base font-medium">IMPORT - EXPORT</span>
          </NeonBorder>
          <p className="text-white/80 text-sm sm:text-base mt-2 tracking-wider animate-pulse">
            {taglines[language]}
          </p>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" data-testid="text-hero-title">
            <MatrixText text={t.hero.title} className="animate-liquid-swipe" />
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonBorder color="mixed">
            <Button
              ref={magneticRef}
              size="lg"
              onClick={scrollToProducts}
              className="gap-2 text-base w-full sm:w-auto transition-transform duration-200 ease-out animate-quantum-pulse"
              data-testid="button-hero-cta"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </NeonBorder>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="gap-2 text-base w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            data-testid="button-hero-contact"
          >
            {t.nav.contact}
          </Button>
        </div>
      </div>
    </section>
  );
}
