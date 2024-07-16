import React, { useContext } from 'react'
import { contextData } from '../LinkHolders';
import { NavLink } from 'react-router-dom';


function ProfileLink() {

  let data = useContext(contextData);
  console.log(data)

  let image = {
    background : `url(${data.img}) no-repeat center center/cover `
  }
  return ( 
    <>

  <NavLink to = {data.link} >
    <div className="right-nav flex mt-2 gap-2 text-sm items-center">

   <div className="Link-photo bg-indigo-400  " style={image} >
     
    </div>

  <div className="Link-name grid grid-row-2 hover:text-orange-600">
    {data.Name}
    <span className='text-xs text-slate-500 '>{data.ref}</span>
  </div>

  </div>  </NavLink>   </>
  )
}

export default ProfileLink