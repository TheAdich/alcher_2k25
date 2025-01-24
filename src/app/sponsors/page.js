import dynamic from "next/dynamic";
import Loading from "../loader.jsx";
export const metadata = {
  title: "Sponsors | Alcheringa",
};

const Page = dynamic(() => import("./sponsor.js"), {
  loading: () => <Loading />,
  ssr: true,
});

export default Page;
