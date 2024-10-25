"use client"
import React, { useState } from 'react'
import Logo from "./Logo"
import DarkModeToggle from "./DarkModeToggle"
import { MobileFooterTabs } from '@/constants'
import Image from 'next/image'
const Sidebar = () => {
  const [collapse, setCollapse] = useState("224px")
  const [isActive, setIsActive] = useState("#8576FF")

  const collapseSideBar = () => {
    setCollapse("64px")
  }
  const restoreSideBar = () => {
    setCollapse("224px")
  }
  
 
  return (
    <div className={`w-[${collapse}] h-[1024px] flex flex-col p-[8px] border  text-[#334155]`}>
        <div>
        <Logo collapse={collapse}/>
        </div>
        {
          MobileFooterTabs.slice(0,7).map((item) => {
            return(
              
              <div onClick={() => setIsActive("#8576FF")} className={`w-full flex text-[16px] 
                cursor-pointer active:text-[${isActive}] 
              hover:bg-[#FCF7FF]  p-[8px] dark:hover:bg-[#8576FF]  
              dark:text-white border`} key={item.index}>
                <div  className='flex flex-1 text-left    my-[4px] relative'>
                <div className=''><Image src={item.imgUrl} alt={item.label} width={20} height={20}  /></div>
                <div>{ collapse == "224px" && <p className={`text-${isActive}  ml-4`}> {item.label} </p> }</div>
                <div className=' flex flex-1  items-end justify-end relative'>

                {
                  
                  item.label=='Notifications' && <>
                    
                    {
                      
                      collapse == "64px" ? ( <p className='w-[8px] h-[8px] rounded-full bg-red-600 align-top absolute  
                        top-0  text-white '></p>) :
                     
                      
                    <p className='w-[25px] h-[25px] p-2 rounded-full bg-red-600 items-center flex text-white 
                    justify-center'> {item.number} </p>
                    }
                    </>
                    
                } 
                
                </div>
                </div>
            </div>
            )
          })
        }
        <div className='flex p-[8px]'>
        <Image src={MobileFooterTabs[8].imgUrl} alt='' width={20} height={20} onClick={restoreSideBar} className={`${collapse == '64px' ? "block" : "hidden"}  cursor-pointer`}/>
        <Image src={MobileFooterTabs[7].imgUrl}alt='' width={20} height={20} onClick={collapseSideBar} className={`${collapse == '224px' ? "block" : "hidden"} block cursor-pointer`}/>
        {collapse == "64px" ? "" : <p className='dark:text-white ml-4'>Collapse</p>}
        </div>   
        
             
        <DarkModeToggle collapse={collapse} />
        <div className='flex p-[8px]'>
        <Image src={MobileFooterTabs[9].imgUrl}alt='' width={32} height={32} className='w-[32px] h-[32px] rounded-ful' />

        {
        collapse == "64px" ? "" : 
       (
        <div className='flex flex-col'>
        <p className='dark:text-white ml-4 text-[16px]'>Rudra Devi</p>
        <p className='dark:text-white ml-4 text-xs'>rudra.devi@gmail.com</p>
        </div>
       )
        }
        </div>   
    </div>
  )
}

export default Sidebar