import React from "react";
import SearchBar from "./components/searchbar";
import CloudSection from "./components/Cloudsection";
import Cards from "./components/competitionCard";
export default function Page() {
  const event = [
    {
      name: "Competition",
      topsubheading:
        "“Unleash Your Talent, Conquer the Stage – Where Legends Compete!“",
      contents:
        "Step into the spotlight with Alcheringa's thrilling competitions! From captivating performances to mind-bending challenges, this is your chance to showcase your skills, compete with the best, and create unforgettable memories. With a wide array of events across music, dance, arts, and more, the stage is set for you to shine. Are you ready to make your mark?",
    },
  ];
  return (
    <div>
      <CloudSection event={event} />
      <SearchBar />
    </div>
  );
}
