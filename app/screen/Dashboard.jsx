import React from 'react'
import SummaryCard from "@/app/components/SummaryCard"
import EventReg from "../components/EventReg"
import EventsHistory from "../components/EventsHistory"
import Events from "../screen/Events"
const Dashboard = () => {
  return (
    <div className=''>
      <div className='font-[400] p-[16px] lg:py-[16px] lg:px-0'>
          Welcome here&apos;s your summary
        </div>
        <div>

        <SummaryCard/>
       <EventReg/>
       <Events/>
       <EventsHistory/>
        </div>
    </div>
  )
}

export default Dashboard