
import Sidebar from '@/app/components/Sidebar'
import MobileNav from '@/app/components/MobileNav'
import MobileFooter from '@/app/components/MobileFooter'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "Dashboard Overview",
  description: "Frontend Task",
  icons:{
    icon:'/icons/home.svg'
  }
};
const HomeLayout = ({children}: {children:ReactNode}) => {
  return (
    <main>
 
        <div className='flex flex-row  h-auto relative'>
            <div className='hidden lg:block'><Sidebar/></div>
            <section className='flex flex-col lg:flex-row  relative w-full h-screen '>
            <div className='lg:hidden'><MobileNav/></div>
                <div className='border px-[16px]  '>
                    {children}
                </div>
                <div className=' px-[16px] block sm:hidden'>
                <MobileFooter/>
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout