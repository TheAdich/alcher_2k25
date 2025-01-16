// "use client";
import dynamic from 'next/dynamic'
import Loading from '../loading.jsx';
const ServerComponent = dynamic(() => import('./_Components/page'),{
  ssr: false,
  loading: ()=> <Loading />
})
export default function Page() {
  
  return (
    <main>
      <ServerComponent />
    </main>
  );
}
