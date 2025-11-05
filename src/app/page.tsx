import { Suspense } from "react";
import CTASection from "../components/CTASection";
import Equipment from "../components/equipments/Equipment";
import Hero from "../components/Hero";
import WhoWeWork from "../components/WhoWeWork";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoWeWork />
      <Suspense
        fallback={
          <div className="text-light py-10 text-center">
            Loading equipment...
          </div>
        }
      >
        <Equipment />
      </Suspense>
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}
