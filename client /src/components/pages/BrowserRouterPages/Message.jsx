import React from 'react'
import ClientApp from '../../../ClientApp';
import Left from '../Left';
import BackgoundMsg from '../../../images/pexels-pixabay-531880.jpg';

function Message() {
  // const backMessage = {
  //   background :` url(${BackgoundMsg}) no-repeat center center/cover`
  // }
  const contHeight ={
    height : '90vh'
  }
  return (
    <>
    <div className="container z-0  flex w-screen justify-evenly items-center  " style= { contHeight } >
        <Left></Left>
       <ClientApp/>
      
    </div>
   
    </>
  )
}

export default Message;