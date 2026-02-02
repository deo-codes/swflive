import HeroBanner from '@/components/sections/HeroBanner';
import FeaturedEvents from '@/components/sections/FeaturedEvents';
import AboutSection from '@/components/sections/AboutSection';
import { events } from '@/data/events';
import GallerySection from '@/components/sections/GallerySection';
import ComingSoonSection from '@/components/sections/ComingSoonSection';
import IWTVSection from '@/components/sections/IWTVSection';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <FeaturedEvents events={events} />
      <AboutSection />
      <GallerySection />
      <ComingSoonSection />
      <IWTVSection />
    </>
  );
}
