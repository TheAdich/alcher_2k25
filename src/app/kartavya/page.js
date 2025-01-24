import dynamic from "next/dynamic";
import Loading from "../loader.jsx";
export const metadata = {
  title: "Kartavya | Alcheringa",
};

const Page = dynamic(() => import("./_components/kartavya"), {
  loading: () => <Loading />,
  ssr: true,
});

export default Page;

