import dynamic from "next/dynamic";
import Loading from "../loader";
export const metadata = {
  title: "Alcheringa",
};

const Page = dynamic(() => import("./competition"), {
  loading: () => <Loading />,
  ssr: false,
});

export default Page;
