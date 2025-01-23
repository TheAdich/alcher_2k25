import React from "react";
import SearchBar from "./components/searchbar";
import CloudSection from "./components/Cloudsection";
import Cards from "./components/competitionCard";
export default function Page() {
  return (
    <div>
      <CloudSection />
      <SearchBar />
    </div>
  );
}
