import React from 'react'
import MonthlyChart  from "./MonthlyChart"
import Carousel from './Carousel'
const EventReg = () => {
  return (
    <div>
        <div className='grid grid-cols-1  font-[400] p-[16px] lg:py-[16px] lg:px-0'>
            <div>Events Registration per month</div>
            <div className='lg:grid lg:grid-cols-2 border lg:justify-between lg:w-full mr-24'>

        <div className='lg:h-[225px]  lg:mx-8 lg:mt-4 mr-24'>
            <MonthlyChart/>
        </div>
        <div className='w-[310px] lg:w-auto lg:h-[375px] lg:ml-8'>
            <Carousel/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default EventReg