import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/application/HeroSection";
import InfoSection from "@/components/application/InfoSection";
import DownloadCTA from "@/components/application/DownloadCTA";

export default function ApplicationPage() {
  return (
    <>
      <Helmet>
        <title>Application - Swift Joint</title>
      </Helmet>
      <main>
        <HeroSection />
        <InfoSection />
        <DownloadCTA />
      </main>
    </>
  );
}
