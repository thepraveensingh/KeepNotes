import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='mb-0 font-mono px-2 mt-96 text-center'>
      @copyright {year}
    </div>
  )
}

export default Footer
