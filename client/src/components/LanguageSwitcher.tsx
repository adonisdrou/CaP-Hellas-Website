import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Language } from '@/lib/i18n';

const languageFlags = {
  en: '🇬🇧',
  el: '🇬🇷',
  pl: '🇵🇱',
};

const languageCodes = {
  en: 'EN',
  el: 'GR',
  pl: 'PL',
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {(Object.keys(languageFlags) as Language[]).map((lang) => (
        <Button
          key={lang}
          variant={language === lang ? 'secondary' : 'ghost'}
          size="sm"
          onClick={() => setLanguage(lang)}
          className="gap-1.5 text-sm"
          data-testid={`button-language-${lang}`}
        >
          <span className="text-base">{languageFlags[lang]}</span>
          <span className="font-medium">{languageCodes[lang]}</span>
        </Button>
      ))}
    </div>
  );
}
