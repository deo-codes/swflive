import './globals.css';
import { Bebas_Neue, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';


const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Superstars of Wrestling (SWF)',
  description: 'Superstars of Wrestling – Live professional wrestling events',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}

