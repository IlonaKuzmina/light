import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeWork from './components/WhoWeWork';
import Equipment from './components/Equipment';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Header />
      <Hero />
      <WhoWeWork />
      <Equipment />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
