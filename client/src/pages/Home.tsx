import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MorphingBlobs from '@/components/MorphingBlobs';
import FloatingContactButton from '@/components/FloatingContactButton';
import ProgressBar from '@/components/ProgressBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <MorphingBlobs />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <FloatingContactButton />
      <Footer />
    </div>
  );
}
