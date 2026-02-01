import Header from '@/components/layout/Header';
import HeroBanner from '@/components/sections/HeroBanner';


export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroBanner />
      </main>
    </>
  );
}