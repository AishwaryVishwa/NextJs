import Time from "./components/Time";

export default function Home() {
    return <>
     <h1>Home page</h1>
     {[1,2,3,4].map((id)=><Time name={id}/>)}
    </>
}