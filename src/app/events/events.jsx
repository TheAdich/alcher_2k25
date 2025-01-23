import CloudSection from "./_Components/Cloudsection";
import ServerComponent from './_Components/page';

export default function Page() {
  
  const event = [
    { name: "Events", topsubheading: "This year, we’ll be celebrating the magic of music, art, and more!", contents: "Step into the world of excitement and energy on the Events page of ALCHERINGA! This is where the magic happens—where vibrant music performances, electrifying EDM nights, and unforgettable moments come to life. ALCHERINGA is packed with high-energy events that will have you on your feet and dancing all night long. Join us for an epic celebration of music, dance, and pure joy. Let the fun begin!" },
  ];
  return (
    <main>
      <CloudSection event={event}/>
      <ServerComponent />
    </main>
  );
}