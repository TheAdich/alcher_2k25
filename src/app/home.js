'use client'
import { useState, useEffect } from "react";
import EventSec from "./_events-section/EventSec";
import AlcherApp from "./_alcher-app-section/AlcherApp";
import Merch from "./_merch-section/Merch";
import SponsorSection from "./_sponsor-section/SponsorSec";
import dynamic from "next/dynamic";
import Loading from "./loader";

const CloudSection = dynamic(
  () => import("./components/Cloudsection"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);
const Mobile = dynamic(
  () => import("./mobile/hero_mobile"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);
const Hero = dynamic(
  () => import("./_hero-section/Hero"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or handle any async operations here
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

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
