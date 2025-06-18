import HeroSection from "@/components/sections/HeroSection";
import ElectrofusionFeatureSection from "@/components/sections/ElectrofusionFeatureSection";
import ProductOverviewSection from "@/components/sections/product-overview/ProductOverviewSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Swift Joint</title>
      </Helmet>
      <main>
        <HeroSection />
        <ElectrofusionFeatureSection />
        <ProductOverviewSection />
      </main>
    </>
  );
}
