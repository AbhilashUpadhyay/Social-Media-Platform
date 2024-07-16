import React from 'react'
import Left from '../pages/Left'
import Middle from '../pages/Middle'
import Right from '../pages/Right'
function Main() {
  return (
    <div className="container grid grid-cols-4 auto-cols-auto p-4 mt-4  w-11/12 h-full gap-2 " id='CMain'  >
        <Left></Left>
        <Middle ></Middle>      
        <Right></Right>
    
    </div>
  )
}

export default Main