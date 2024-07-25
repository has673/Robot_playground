
import dynamic from "next/dynamic";
const Scene = dynamic(() => import('./components/Scene'), { ssr: false });


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Scene/>
    </main>
  );
}
