import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-hakari-black">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
