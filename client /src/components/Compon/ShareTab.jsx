import React from 'react'
import ProfilePhoto from './Small-components/ProfilePhoto'
import Search from './Small-components/Search'
import FileShare from './Small-components/FileShare'

function ShareTab() {
  return (
    <>
    <div className="share-box text-sm w-11/12 shadow-lg h-36 bg-white rounded-xl flex flex-col justify-center items-center">

        <div className="share-box1 flex justify-evenly w-11/12 gap-2 border-b-2 border-slate-200 h-12" >
        <ProfilePhoto></ProfilePhoto>
        <Search></Search>
        </div>
        <div className="share-box2 w-11/12 flex items-center">
            <FileShare></FileShare>
        </div>

    </div>
    </>
  )
}

export default ShareTab