import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../../../images/house.png'
import Message from '../../../images/message.png'

function NavMiddle() {
  return (
    <>
    {/* Middle part */}
    <div className="nav-middle flex   w-2/5 h-3/5 justify-between items-center text-center ">
            
            <NavLink to= '/' > <li className=''>  HomePage</li></NavLink> 
             <NavLink to= '/connection' > <li>Connection</li></NavLink>
            <NavLink to= '/message' >  <li className=' flex gap-1 items-center w-full '>  Message </li></NavLink>
              <NavLink to= '/notification' ><li className=' '>Notification</li></NavLink> 
             <li id='I' >|</li>
             <NavLink to= '/tool' ><li className=''>Tools</li></NavLink>


            </div>
                </>
  )
}

export default NavMiddle