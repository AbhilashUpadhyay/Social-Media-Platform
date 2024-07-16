import React from 'react'
import { NavLink } from 'react-router-dom'
import LinkHolders from './LinkHolders'

function RightProfile() {
  return (
    <>
   
    <div className="Profile-box flex flex-col gap-1 w-11/12    ">
        <div className="heading-box p-2 text-lg">Profile</div>
        <hr />
        <ul className=''>
            <NavLink to= '/profile' ><li>My Profile</li> </NavLink>
            
            <NavLink to= '/changeAcc' ><li>Change Account</li> </NavLink>
           <NavLink to= '/setting'> <li>Settings</li></NavLink>
            <li>Help</li>
            <li>Give a feedback</li>
        </ul>
        <hr />
    </div>
    <div className="below-box-right p-1 h-full  ">
          <LinkHolders></LinkHolders>
    </div>
  
    </>
  )
}

export default RightProfile