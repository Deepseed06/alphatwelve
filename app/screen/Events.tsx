import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {Input} from "@/components/ui/input"
import { MoreVerticalIcon, SearchIcon, DownloadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
const Events = () => {
  const options = [
    {label:"Date"},
    {label:"Status"},
    {label:"Name"}
  ]
  return (
    <div className='flex flex-col lg:flex-row  lg:justify-evenly lg:items-center text-left '>
        <div className='flex text-left  items-center border w-full lg:w-auto '>
            <div className='mx-4'>
            <SearchIcon size={20}/>
            </div>
            <Input type='search' placeholder='Search'/>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          {
            options.map((item, index) => {
              return (
                <div key={index} className='flex'>
                  <Select>
                  <SelectTrigger className="w-[335px] lg:w-full">
                    <SelectValue  placeholder={item.label} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                </div>

              )
            })
          }
        </div>
          <div className='text-[14px] font-[600] text-left px-4 py-[8px]'>Displaying 100 results</div>
        
        <div className='flex items-center justify-between px-4 my-2 '>
          <div className='text-[14px]'>Sort:</div>
             <Select>
                  <SelectTrigger className="w-[140px] lg:w-full">
                    <SelectValue  placeholder="Most Recent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
        </div>
        <div className='flex items-center justify-between px-4 '>
          <div><MoreVerticalIcon size={20}/></div>
           <Button className='bg-white border hover:bg-transparent text-black'>
            <DownloadIcon/>
            Export
           </Button>
        </div>
    </div>
  )
}

export default Events