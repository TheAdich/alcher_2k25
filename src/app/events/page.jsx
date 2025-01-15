// "use client";
import dynamic from 'next/dynamic'
import Loading from '../loading.jsx';
import CloudSection from "./_Components/Cloudsection";
const ServerComponent = dynamic(() => import('./_Components/page'),{
  ssr: false,
  loading: ()=> <Loading />
})
export default function Page() {
  
  return (
    <main>
      <CloudSection />
      <ServerComponent />
    </main>
  );
}