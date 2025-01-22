import CloudSection from "./components/Cloudsection";
//import AlcherApp from "./_alcher-app-section/AlcherApp";
//import Merch from "./_merch-section/Merch";
import EventSec from "./_events-section/EventSec";

//import SponsorSection from "./_sponsor-section/SponsorSec";

import dynamic from "next/dynamic";
const AlcherApp = dynamic(() => import("./_alcher-app-section/AlcherApp"),{ssr:false});
const Hero = dynamic(() => import("./_hero-section/Hero"),{ssr:false});
const Merch = dynamic(() => import("./_merch-section/Merch"),{ssr:false});
const SponsorSection = dynamic(() => import("./_sponsor-section/SponsorSec"),{ssr:false});

export default function Page() {
  return (
    <div>
      <Hero />
      <CloudSection />
      <SponsorSection />
      <EventSec />
      <Merch />
      <AlcherApp />
    </div>
  );
}
