import React from 'react'

const Logo = ({collapse}) => {
  
  return (
    <div className=' font-semibold p-[8px] h-[36px] w-[224px]'>
      Full {collapse == '64px' ? "" : 'Logo'}
    </div>
  )
}

export default Logo