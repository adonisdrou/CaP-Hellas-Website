import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FloatingContactButton() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      size="icon"
      className="fixed bottom-8 right-8 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform duration-300 z-50 h-14 w-14"
      data-testid="button-floating-contact"
      title={t.nav.contact}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
