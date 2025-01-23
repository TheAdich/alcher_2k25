import dynamic from "next/dynamic";
import Loading from "./loader.jsx";
export const metadata = {
  title: "Alcheringa",
};

const Page = dynamic(() => import("./home"), {
  loading: () => <Loading />,
  ssr: false,
});

export default Page;
