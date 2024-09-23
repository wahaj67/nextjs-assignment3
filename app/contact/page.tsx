"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
 const route =  useRouter()
  return (
    <div> <h1>
    This is a Contact Page
</h1>
<button className='p-1 bg-blue-600 hover:bg-blue-700 rounded-sm mt-10' onClick={()=>route.push("/")}>Home</button></div>
  )
}

export default page