import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MorphingBlobs from '@/components/MorphingBlobs';
import CursorTrail from '@/components/CursorTrail';
import FloatingContactButton from '@/components/FloatingContactButton';
import ProgressBar from '@/components/ProgressBar';
import QuantumParticles from '@/components/QuantumParticles';
import InteractiveMouse from '@/components/InteractiveMouse';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <CursorTrail />
      <QuantumParticles />
      <InteractiveMouse />
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
