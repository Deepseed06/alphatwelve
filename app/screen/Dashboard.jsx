import React from 'react'
import SummaryCard from "@/app/components/SummaryCard"
import EventReg from "../components/EventReg"
import EventsHistory from "../components/EventsHistory"
import Events from "../screen/Events"
const Dashboard = () => {
  return (
    <div>
        <SummaryCard/>
       <EventReg/>
       <Events/>
       <EventsHistory/>
    </div>
  )
}

export default Dashboard