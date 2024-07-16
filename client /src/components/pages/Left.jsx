import React from 'react'
import './Left.css'
import LinkHolders from '../Compon/LinkHolders'
import ProfileName from '../Compon/Small-components/ProfileName'

function Left() {
  return (
   <>
   <div className=" left-page list-none  text-sm p-3 w-60 h-96 shadow-md bg-white  gap-4 rounded-lg ">
    <ProfileName></ProfileName>
    <br />
    <hr />
 <LinkHolders></LinkHolders>

   </div>
   </>
  )
}

export default Left