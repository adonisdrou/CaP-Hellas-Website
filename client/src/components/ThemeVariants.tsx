import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Palette } from 'lucide-react';

type Theme = 'default' | 'minimalist' | 'luxury';

export default function ThemeVariants() {
  const [theme, setTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme || 'default';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['default', 'minimalist', 'luxury'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed top-20 right-8 z-40">
      <Button
        size="icon"
        variant="outline"
        onClick={toggleTheme}
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        data-testid="button-theme-toggle"
        title={`Theme: ${theme} (click to change)`}
      >
        <Palette className="h-5 w-5" />
      </Button>
      <div className="text-xs text-muted-foreground mt-2 text-center opacity-70">
        {theme === 'default' && 'Modern'}
        {theme === 'minimalist' && 'Minimal'}
        {theme === 'luxury' && 'Luxury'}
      </div>
    </div>
  );
}
