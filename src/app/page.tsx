import Hero from "@/components/home/Hero";
import FeaturedResidence from "@/components/home/FeaturedResidence";
import SearchSection from "@/components/home/SearchSection";
import PropertiesGrid from "@/components/home/PropertiesGrid";
import LocationsGrid from "@/components/home/LocationsGrid";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import VeloraEdit from "@/components/home/VeloraEdit";
import LifestyleSection from "@/components/home/LifestyleSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedResidence />
      <SearchSection />
      <PropertiesGrid />
      <LocationsGrid />
      <ArchitectureSection />
      <VeloraEdit />
      <LifestyleSection />
    </>
  );
}
