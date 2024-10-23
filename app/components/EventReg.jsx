import React from 'react'
import MonthlyChart  from "./MonthlyChart"
import Carousel from './Carousel'
const EventReg = () => {
  return (
    <div>
        <div className='grid grid-cols-1  font-[400] p-[16px] lg:py-[16px] lg:px-0'>
            <div>Events Registration per month</div>
            <div className='lg:grid lg:grid-cols-2'>

        <div className='border  lg:w-[500px] lg:h-[375px] lg:mx-8 '>
            <MonthlyChart/>
        </div>
        <div className='border lg:w-[500px] lg:h-[375px] lg:mx-8'>
            <Carousel/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default EventReg