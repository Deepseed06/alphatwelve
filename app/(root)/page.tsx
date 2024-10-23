import React from 'react'
import Dashboard from "@/app/screen/Dashboard"
const page = () => {
  return (
    <div className='text-[17px]  border lg:text-[22px] '>
        <div className='font-[400] p-[16px] lg:py-[16px] lg:px-0'>Welcome here's your summary</div>
      <div>
        <Dashboard/>
      </div>
      
    </div>
  )
}


export default page