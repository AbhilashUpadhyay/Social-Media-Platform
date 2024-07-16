import React from 'react'
import ProfilePhoto from './ProfilePhoto'
import { NavLink } from 'react-router-dom'


function ProfileName() {
  return (
    <>
    

       <div className="right-nav flex text-sm items-center">

    <NavLink to ='/profile ' className= ' gap-2 flex text-sm items-center' >
    <ProfilePhoto></ProfilePhoto>

<div className="profile-name">
Abhilash Upadhyay
</div>
 </NavLink>
</div>
   
    
    </>
  )
}

export default ProfileName