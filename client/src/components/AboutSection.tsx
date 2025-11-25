import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@assets/generated_images/logistics_warehouse_about_section.png';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="text-about-title">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-content">
              {t.about.content}
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <img
              src={aboutImage}
              alt="CaP Hellas logistics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
