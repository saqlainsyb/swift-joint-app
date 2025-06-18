import HeroSection from "@/components/sections/HeroSection";
import ElectrofusionFeatureSection from "@/components/sections/ElectrofusionFeatureSection";
import ProductOverviewSection from "@/components/sections/product-overview/ProductOverviewSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ElectrofusionFeatureSection />
        <ProductOverviewSection />
      </main>
    </>
  );
}
