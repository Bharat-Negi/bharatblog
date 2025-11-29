import HomeBanner from "@/components/home-banner/HomeBanner";
import FirstSection from "@/components/first-section/FirstSection";
import CulturePage from "@/components/culture-section/CulturePage";
import BusinessPage from "@/components/business-section/BusinessPage";
import LifestylePage from "@/components/lifestyle-section/LifestylePage";

export default function Home() {
  return (
    <>     
      <HomeBanner />
      <FirstSection />
      <CulturePage />
      <BusinessPage />
      <LifestylePage />
    </>
  );
}
