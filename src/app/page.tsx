import CTASection from "../components/CTASection";
import Equipment from "../components/Equipment";
import Hero from "../components/Hero";
import WhoWeWork from "../components/WhoWeWork";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoWeWork />
      <Equipment />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}
