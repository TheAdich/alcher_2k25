import EventSec from "./_events-section/EventSec";
import AlcherApp from "./_alcher-app-section/AlcherApp";
import Merch from "./_merch-section/Merch";
import SponsorSection from "./_sponsor-section/SponsorSec";
import dynamic from "next/dynamic";
import Loading from "./loader";
const CloudSection = dynamic(
  () => {
    return import("./components/Cloudsection");
  },
  {
    loading: () => <Loading />,
    ssr: false,
  }
);
const Mobile = dynamic(
  () => {
    return import("./mobile/hero_mobile");
  },
  {
    loading: () => <Loading />,
    ssr: false,
  }
);
const Hero = dynamic(
  () => {
    return import("./_hero-section/Hero");
  },
  {
    loading: () => <Loading />,
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
