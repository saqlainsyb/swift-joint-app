import HeroSection from '@/components/sections/HeroSection';
import ElectrofusionFeatureSection from '@/components/sections/ElectrofusionFeatureSection';
import ProductOverviewSection from '@/components/sections/product-overview/ProductOverviewSection';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
     <Helmet>
        <title>Hero Section - My App</title>
        <meta name="description" content="This is the Hero Section of my app." />
      </Helmet>
    <main>
      <HeroSection />
      <ElectrofusionFeatureSection />
      <ProductOverviewSection />
    </main>
    </>
  );
}