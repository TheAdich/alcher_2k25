import dynamic from "next/dynamic";
import Loading from "../loader.jsx";
export const metadata = {
  title: "Gallery | Alcheringa",
};

const Page = dynamic(() => import("./_components/display.js"), {
  loading: () => <Loading />,
  ssr: false,
});

export default Page;
