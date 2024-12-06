import React from 'react'
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
const Header = () => {
  return (
    <>
      <div className='bg-[blue] w-screen h-16  pt-2.5 px-4'>
        <span className='text-2xl text-white flex gap-2 font-mono'><EditCalendarIcon className='mt-1'/>Singh Keep</span>
      </div>
    </>
  )
} 

export default Header
