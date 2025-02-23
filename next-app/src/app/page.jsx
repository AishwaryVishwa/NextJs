import Link from "next/link";
import HydrationErrorComp from "./components/HydrationErrorComp";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const ClientHydrateComp =   dynamic(()=>import('./components/HydrationErrorComp'),{
    ssr:false,
    loading:()=> <p>Loading....</p>
})


export default function Home() {
    return<>
     <h1>Home page</h1>
     <Link href='/streaming'>/streaming</Link>
     <ClientHydrateComp/>
    </>

}