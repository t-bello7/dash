import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import DashboardLayout from "../../component/DashboardLayout";

const DashboardHome = () => {
  // const {data: session} = useSession()
  // const [content, setContent] = useState();
  
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch("/api/dashboard/index");
  //     const json = await res.json();

  //     if(json.content){
  //       setContent(json.content)
  //     }
  //   }
  // }, [session])

  // // if (typeof window !== "undefined" && loading) return null;

  // if(!session){
  //   return (
  //     <main>
  //       <h1> You are not signed in, Please Sign in</h1>
  //     </main>
  //   )
  // }
  return (
    <DashboardLayout>
      <main>
        I am jjjjjja dashoard, a protected page 
      </main> 
    </DashboardLayout>
  )
}
export default DashboardHome;
