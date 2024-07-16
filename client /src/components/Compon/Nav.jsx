import React from 'react'
import './Nav.css'
import ProfileName from './Small-components/ProfileName'
import { NavLink } from 'react-router-dom'
import NavMiddle from './Small-components/NavMiddle'
import home from '../../images/avatar.png'


function Nav() {
  
  return (
    <>
    <nav className='  w-screen flex  justify-center items-center h-full  bg-slate-800  ' >
      <div className='nav-height w-11/12 flex text-white justify-between items-center text-center gap-5 text-sm bg-slate-800'>
         <div className="left-nav grid grid-cols-3  w-1/5 gap-4 text-center">
          {/* SiteName */}
        <NavLink to='/' className='logo flex justify-center items-center mr-2  text-center'>ConnectMeUp</NavLink>    
            <div className=" ml-1 search-box rounded-3xl flex border-2 text-xs border-slate-200 h-8 px-3  w-64">
              <input type="text" name="Search" id="search" className='w-40 bg-transparent  outline-none ' placeholder='Search..' />
            </div>
            
    
           
          
           
           </div>
 {/* nav-middle  */}

          <NavMiddle></NavMiddle>

            {/* Right-part */}
         
          <ProfileName></ProfileName>

            </div>
    </nav>


    </>
  )
}

export default Nav;