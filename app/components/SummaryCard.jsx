import React from 'react'
import ArrowDownIcon from "@/public/icons/arrow-down-right.png"
import ArrowUpIcon from "@/public/icons/arrow-up-right.png"
import Image from 'next/image'
const SummaryCard = () => {
    const summary = [
        {label: "Total Events", value:'100,000', imgIcon:ArrowUpIcon, percent: '+5.0%' },
        {label: "Active Speakers", value:25, imgIcon:ArrowDownIcon, percent: '-5.0%'},
        {label: "Total Registrations", value:300, imgIcon:ArrowUpIcon, percent: '+5.0%'},
        {label: "Total Revenue", value:"$500,000", imgIcon:ArrowUpIcon, percent: '+5.0%'},
    ]
  return (
    <div className='grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
        {
            summary.map((item) => {
                return(

                    <div key={item.label}>
                    <div className='w-[320px]  h-[88px]  my-[4px] lg:w-[240px] lg:mr-[8px] border p-[16px]'>
                        <h2 className='text-[16px] font-[600] text-[#64748B]'>{item.label}</h2>
                        <div className='flex items-center'>
                        <p className='text-[20px] font-[600]'>{item.value}</p>
                        <Image src={item.imgIcon} alt='card-image' width={20} height={20}/>
                        {
                            item.label=='Active Speakers' ? (

                                <p className=' text-[#F43F5E] text-xs font-[600]'>{item.percent}</p>
                            ) : <p className='text-xs text-[#10B981] font-[600]'>{item.percent}</p>
                        }
                        </div>
                    </div>
                </div>
        )
            })
        }
    </div>
  )
}

export default SummaryCard