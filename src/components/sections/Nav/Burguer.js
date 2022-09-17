import React, { useState } from 'react';
import RightNav from './RightNav';


const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
      className='menu-icon'
      open={open}
      onClick={() => setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" 
      width="40" 
      height="40"
      fill="currentColor" 
      className="bi bi-list" 
      viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
            <div />
            <div />
            <div />
        <RightNav open={open}/>
      </div>
    </>
  )
}

export default Burger