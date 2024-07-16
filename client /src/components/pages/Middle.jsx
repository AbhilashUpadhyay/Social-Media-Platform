import React from 'react'
import ShareTab from '../Compon/ShareTab'
import Feed from '../Compon/Feed'

function Middle() {


  

  return (
    <>
      
      <div className="feed text-sm col-span-2 h-full flex flex-col gap-4 px-4 " id='feed'>

        <ShareTab></ShareTab>
        <Feed></Feed>
        
      </div>
    </>
  )
}

export default Middle