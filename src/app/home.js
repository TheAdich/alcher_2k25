import EventSec from "./_events-section/EventSec";
import AlcherApp from "./_alcher-app-section/AlcherApp";
import Hero from "./_hero-section/Hero";
import Merch from "./_merch-section/Merch";
import SponsorSection from "./_sponsor-section/SponsorSec";
import dynamic from "next/dynamic";
import Mobile from "./mobile/hero_mobile"
const CloudSection = dynamic(
  () => {
    return import("./components/Cloudsection");
  },
  {
    ssr: false,
  }
);
export default function Page() {
  return (
    <div>
      <Mobile />
      <Hero />
      <CloudSection />
      <SponsorSection />
      <EventSec />
      <Merch />
      <AlcherApp />
    </div>
  );
}
