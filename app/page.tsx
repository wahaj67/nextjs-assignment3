"use client"

import { useRouter } from "next/navigation"


export default function Home(){
  const route = useRouter()
  return(
    <div className="w-[95%] max-h-full mx-auto items-center  ">
      <h1 className="mt-10 text-center text-indigo-400 hover:text-indigo-500 transition-all duration-1000">Quarter 2<sup>nd</sup> Next.Js Assignment 3<sup>rd</sup></h1>

   
    <div className=" justify-between  items-center ml-36 space-x-14 mt-10 mx-auto">
      
      <button className='p-1 bg-blue-600  hover:bg-blue-700 rounded-sm' onClick={()=>route.push("/navbar")}>Navbar</button>
      <button className='p-1 bg-blue-600  hover:bg-blue-700 rounded-sm' onClick={()=>route.push("/about")}>About</button>
      <button className='p-1 bg-blue-600 hover:bg-blue-700 rounded-sm' onClick={()=>route.push("/contact")}>Contact</button>
      <button className='p-1 bg-blue-600 hover:bg-blue-700 rounded-sm' onClick={()=>route.push("/footer")}>Footer</button>
    </div>
    </div>
  )
}
