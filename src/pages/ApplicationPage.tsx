import { Helmet } from 'react-helmet';
import HeroSection from '@/components/application/HeroSection';
import InfoSection from '@/components/application/InfoSection';
import DownloadCTA from '@/components/application/DownloadCTA';

export default function ApplicationPage() {
  return (
    <main>
      <Helmet>
        <title>Application - Swift Joint</title>
        <meta name="description" content="Explore the Swift Joint mobile application for seamless electrofusion management." />
      </Helmet>
      <HeroSection />
      <InfoSection />
      <DownloadCTA />
    </main>
  );
}