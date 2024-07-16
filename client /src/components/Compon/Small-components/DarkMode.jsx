import React, { useState } from 'react'

function DarkMode() {
    const [onOf , setOnOF] = useState('OFF');
    let mainContainer = document.getElementById('mainCont');
    
    


    const darkmode = ()=>{
      
        mainContainer.classList.toggle('darkColor');
        if(onOf == 'ON') {
            setOnOF('OFF')
        }
        else{
            setOnOF('ON')
        }
        
    }
  return (
    <>
    <div className="dark-button w-24 h-24 cursor-pointer flex justify-center flex-col items-center rounded-xl bg-green-300" id='dark-button' onClick={darkmode} >
       <h1>DarkMode</h1>
       <span id='onOF'>{onOf}</span>
    </div>
    </>
  )
}

export default DarkMode