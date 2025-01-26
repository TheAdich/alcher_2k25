import dynamic from "next/dynamic";
import Loading from "./loader.jsx";
export const metadata = {
  title: "Alcheringa",
  description:
    "Alcheringa is the annual cultural extravaganza of IIT Guwahati, a vibrant celebration of youth, creativity, and diversity. As North East India's largest cultural festival, Alcheringa offers a unique platform for students to showcase their talents and explore a world of artistic expression.  Experience three days and four nights of electrifying performances, thrilling competitions, and unforgettable moments. From January 30th to February 2nd, 2025, Alcheringa invites you to unlock a world of artistic expression and cultural exploration.",
  keywords:
    "Alcheringa, IIT Guwahati , Guwahati , Amit Trivedi , Pronite , North East , Cultural , Fest",
};

const Page = dynamic(() => import("./home"), {
  loading: () => <Loading />,
  ssr: false,
});

export default Page;
