import dynamic from "next/dynamic";
import Loading from "../loader";
export const metadata = {
  title: 'Events | Alcheringa',
  description: 'The stage is set, the night is calling, and the magic is about to unfold! 🌟 Join us at Crescendo Night for an unforgettable performance by Amit Trivedi ! 🎤',
  keywords: 'Amit Trivedi, amit trivedi'
}

const Page = dynamic(() => import('./events'), {
  loading: () => <Loading />,
})

export default Page;