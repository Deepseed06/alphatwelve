'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/components/ui/pagination'
import EventCard from './EventCard'


const data = Array.from({ length: 30 }, () => ({
  EventName: ["Cloud Innovation Summit", "Future of Fintech Forum", "Web3 Interface Workshop"][Math.floor(Math.random() * 3)],
  Date: ["2024-10-15", "2024-11-05", "2024-11-12", "2024-10-10"] [Math.floor(Math.random() * 3)],
  Speaker: ['Jane Doe', 'Dr. Peter Smith', 'Dr.Aisha', 'Kevin Adams'][Math.floor(Math.random() * 2)],
  Status: ['Completed', 'In Progress'][Math.floor(Math.random() * 2)],
  
 
}))

const itemsPerPage = 10

export default function TableWithPagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="w-full  lg:container relative mx-auto py-10">
      <Table>
        <TableHeader className='bg-[#6A6676]'>
          <TableRow>
            <div className='flex justify-evenly items-center  pt-4'>

            <TableHead className="">Event Name</TableHead>
            <TableHead className='text-left hidden lg:block'>Date</TableHead>
            <TableHead className='text-left hidden lg:block'>Speaker</TableHead>
            <TableHead className="text-left ">Status</TableHead>
            </div>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item, index) => (
            <TableRow key={index}>
              <div className='flex justify-center overflow-hidden lg:hidden'>

        <Accordion type="single" collapsible>
          <AccordionItem className='w-[320px] text-left text-nowrap  ' value="item-1">
              <AccordionTrigger> 
                <TableCell >{item.EventName}</TableCell>
             
              {
                item.Status == 'Completed' ? (
                  
                  <TableCell className='p-2' ><div className='bg-[#3B82F6]  flex items-center justify-evenly 
                  text-[#DBEAFE] rounded-full'><span className=
                  'w-2 rounded-full text-nowrap mx-2 bg-[#DBEAFE] h-2 '></span>{item.Status}</div></TableCell>
                ) :  <TableCell className='p-2' ><div className='bg-[#D1FAE5] flex items-center 
                justify-evenly text-[#10B981]  rounded-full'>
                  <span className='w-2 mx-2 rounded-full text-nowrap 
                  bg-[#10B981] h-2'></span>{item.Status}</div>
                  </TableCell>
                
              }
              </AccordionTrigger>
            <AccordionContent className='border w-[320px] '>
            <div onClick={() => setShowModal(true)} className='flex  text-center justify-between items-center'>
            <TableCell className=' lg:block'>{item.Date}</TableCell>
            <TableCell className=' lg:block'>{item.Speaker}</TableCell>
            </div>
            </AccordionContent>
          </AccordionItem>
       </Accordion>
              </div>
              <div className='hidden lg:flex lg:justify-between lg:items-center lg:text-left'>
              <TableCell >{item.EventName}</TableCell>
              <TableCell className=' lg:block'>{item.Date}</TableCell>
              <TableCell className=' lg:block'>{item.Speaker}</TableCell>
             {
               item.Status == 'Completed' ? (
                 
                 <TableCell ><div className='bg-[#3B82F6] flex items-center justify-evenly 
                 text-[#DBEAFE] rounded-full'><span className=
                 'w-2 rounded-full text-nowrap bg-[#DBEAFE] h-2'></span>{item.Status}</div></TableCell>
               ) :(
               <TableCell ><div className='bg-[#D1FAE5] flex items-center 
               justify-evenly text-[#10B981] rounded-full'>
                 <span className='w-2 rounded-full text-nowrap 
                 bg-[#10B981] h-2'></span>{item.Status}</div>
                 </TableCell>)
             }
          
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        showModal && <EventCard/>
      }

      <Pagination className="flex justify-start mt-4">
        <PaginationContent className='absolue left-4 '>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage > 1) handlePageChange(currentPage - 1)
              }}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handlePageChange(page)
                      
                    }}
                    
                    isActive={page === currentPage}
                    className='rounded-full'
                    
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            } else if (
              (page === currentPage - 2 && currentPage > 3) ||
              (page === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return <PaginationEllipsis key={page} />
            }
            return null
          })}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (currentPage < totalPages) handlePageChange(currentPage + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}