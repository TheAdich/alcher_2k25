import dynamic from "next/dynamic";
import Loading from "../loader";
export const metadata = {
    title: 'Alcheringa',
}

const Page = dynamic(() => import('./events'), {
    loading: () => <Loading />,
})

export default Page;