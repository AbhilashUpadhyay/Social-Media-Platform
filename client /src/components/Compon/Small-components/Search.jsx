import React from 'react'

function Search() {
  return (
    <>
    <div className="search-box rounded-3xl flex border-2 justify-between border-none outline-none bg-slate-100 h-8 p-1 w-11/12">
              <input type="text" name="Search" id="search" className='  text-xs bg-slate-100  w-80  rounded-lg  px-2 outline-none ' placeholder='Share Something...' />
            </div>
    </>
  )
}

export default Search