import React from 'react'
import {MobileFooterTabs} from "@/constants"
import Image from 'next/image'
const MobileFooter = () => {
  const updatedFooterArr = MobileFooterTabs.slice(0,10);
 const footerArray = updatedFooterArr.splice(4,5)
 console.log(footerArray)
  return (
    <div className=' border flex justify-center '>
        {
        updatedFooterArr.map((item) => {
         return (
          <div className='hover:border-t-2 hover:border-[#8576FF] flex flex-col text-sm cursor-pointer hover:text-[#8576FF] justify-between items-center  p-[8px]' key={item.label}>
            <Image src={item.imgUrl} alt={item.label} width={24} height={24} />
            <p> {item.label} </p> 
          </div>
         )
                   
        })}
    </div>
  )
}

export default MobileFooter