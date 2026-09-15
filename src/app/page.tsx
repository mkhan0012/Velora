import Hero from "@/components/home/Hero";
import FeaturedResidence from "@/components/home/FeaturedResidence";
import SearchAndProperties from "@/components/home/SearchAndProperties";
import LocationsGrid from "@/components/home/LocationsGrid";
import IndiaMapSection from "@/components/home/IndiaMapSection";
import VeloraEdit from "@/components/home/VeloraEdit";
import PrivateClientSection from "@/components/home/PrivateClientSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedResidence />
      <SearchAndProperties />
      <LocationsGrid />
      <IndiaMapSection />
      <VeloraEdit />
      <PrivateClientSection />
    </>
  );
}
