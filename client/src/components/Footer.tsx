import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-company">
              {t.footer.company}
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="font-semibold text-foreground">CaP Hellas E.E</div>
              <div>Straitsa 2, Thermi</div>
              <div>Selina Majerska</div>
              <div>+30 6948494104</div>
              <div>selinamajerska@gmail.com</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-links">
              {t.footer.quickLinks}
            </h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => scrollToSection('#home')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-home"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('#products')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-products"
              >
                {t.nav.products}
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-about"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-contact"
              >
                {t.nav.contact}
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-languages">
              {t.footer.languages}
            </h3>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground" data-testid="text-copyright">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
