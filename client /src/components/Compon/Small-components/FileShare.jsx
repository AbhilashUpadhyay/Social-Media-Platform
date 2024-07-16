import React from 'react'

function FileShare() {
  return (
   <>
   <div className="fileShare grid grid-cols-5 grid-rows-1 w-11/12 h-2/4 text-center ">
    <span className='Share-link cursor-pointer'> Image</span>
    <span className='Share-link cursor-pointer'>Video</span>
    <span className='Share-link cursor-pointer'>Attachment</span>
    <span className='Share-link cursor-pointer'>Hastag</span>
    <span className='Share-link cursor-pointer'>Mention</span>


   </div>
   
   </>
  )
}

export default FileShare