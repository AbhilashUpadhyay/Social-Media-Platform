import React, { useState } from 'react'

function Yo() {
  const [messge,setMessage] = useState('')
  const mm = async ()=>{
    const responce = await fetch('http://localhost:3001');
    const data3 = await responce.json()
    console.log(data3);
    setMessage(data3.message)
  }
  mm()
  return (
   <>
   <h1>{messge}</h1>
   </>
  )
}

export default Yo