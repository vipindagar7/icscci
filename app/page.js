import Hero from "@/components/sections/Hero";
import Sponsors from "@/components/sections/Sponsors";
import ImportantDatesPreview from "@/components/sections/ImportantDatesPreview";
import QuickLinks from "@/components/sections/QuickLinks";

export default function Home() {
  return (
    <div className="theme-gold">
      <Hero />
      <Sponsors />
      <ImportantDatesPreview />
      <QuickLinks />
    </div>
  );
}
