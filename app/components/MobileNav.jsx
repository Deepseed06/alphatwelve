"use client"
import React, { useState } from 'react'
import MenuIcon from "../../public/icons/menu.png"
import CancelIcon from "../../public/icons/cancel.png"
import Logo from "./Logo"
import DarkModeToggle from "./DarkModeToggle"
import { MobileFooterTabs } from '@/constants'
import Image from 'next/image'


const MobileNav = () =>  {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState("#8576FF")



  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <>
<div className='flex items-center cursor-pointer justify-between px-[16px]'>
        <div className='p-2'><Logo/></div>
        {
            isOpen ? (
        <div onClick={toggleNav} className='cursor-pointer'>
            <Image src={CancelIcon} alt='close' width={20} height={20}/>
        </div>
            ):
            <div onClick={toggleNav} className='cursor-pointer'>
            <Image src={MenuIcon} alt='open' width={20} height={20}/>
        </div>
        }
        </div>

      <div
        className={`fixed inset-y-0 right-0 z-40 w-[375px] h-auto bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={`w-[375px] h-[1024px] flex flex-col p-[8px] border  text-[#334155]`}>
           <div className='flex items-center w-[375px] border justify-between p-2 '>
           <div>
                <Logo/>
            </div>
            <div onClick={toggleNav} className='cursor-pointer'>
                <Image src={CancelIcon} alt='close' width={20} height={20}/>
            </div>
           </div>
        {
          MobileFooterTabs.slice(0,7).map((item) => {
            return(
              
              <div onClick={() => setIsActive("#8576FF")} className='w- flex text-[16px] cursor-pointer hover:bg-[#FCF7FF]  p-[8px]  dark:text-white' key={item}>
                <div  className='flex flex-1 text-left    my-[4px] relative'>
                <div className=''><Image src={item.imgUrl} alt={item.label} width={20} height={20}  /></div>
                <div>{ collapse == "224px" ? <p className={`text-${isActive}  ml-4`}> {item.label} </p> : '' }</div>
                <div className=' flex flex-1  items-end justify-end relative'>

                {
                  
                  item.label=='Notifications' && <>
                    
                    {
                      
                      collapse == "64px" ? ( <p className='w-[8px] h-[8px] rounded-full bg-red-600 align-top absolute  
                        top-0 right-0 flex text-white justify-center'></p>) :
                     
                      
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
       
        
             
        <DarkModeToggle  />
        <div className='flex p-[8px]'>
        <Image src={MobileFooterTabs[9].imgUrl} alt='' width={32} height={32} className='w-[32px] h-[32px] rounded-ful' />

        <div className='flex flex-col'>
        <p className='dark:text-white ml-4 text-[16px]'>Rudra Devi</p>
        <p className='dark:text-white ml-4 text-xs'>rudra.devi@gmail.com</p>
        </div>
        </div>   
    </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleNav}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default MobileNav



