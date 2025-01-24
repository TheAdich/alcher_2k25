import dynamic from "next/dynamic";
import Loading from "../loader.jsx";
export const metadata = {
  title: "Teams | Alcheringa",
};

const Page = dynamic(() => import("./team"), {
  loading: () => <Loading />,
  ssr: true,
});

export default Page;
