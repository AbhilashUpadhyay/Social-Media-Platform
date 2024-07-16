import React, { useEffect, useState } from 'react'
import Nav from './components/Compon/Nav'
import Main from './components/Compon/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Connection from './components/pages/BrowserRouterPages/Connection'
import Message from './components/pages/BrowserRouterPages/Message'
import Tool from './components/pages/BrowserRouterPages/Tool'
import Notification from './components/pages/BrowserRouterPages/Notification'
import UserProfile from './components/pages/BrowserRouterPages/UserProfile'
import Setting from './components/pages/BrowserRouterPages/Setting'
import './App.css'
import ChangeAcc from './components/pages/BrowserRouterPages/ChangeAcc'
import Yo from './images/Yo'

function App() {
  return (
    <>


    <div className="Main-container bg-gradient-to-br from-indigo-200 via-rose-200 to-blue-100 w-screen h-full bg-slate-100  flex items-center flex-col " id='mainCont'>

    <BrowserRouter> 
       <Nav></Nav>
     <Routes>
      <Route path='/' element = {<Main/>}></Route>
      <Route path='/connection' element = {<Connection/>}></Route>
      <Route path='/message' element = {<Message/>}></Route>
      <Route path='/notification' element = {<Notification/>}></Route>
      <Route path='/tool' element = {<Tool/>}></Route>
      <Route path='/profile' element = {<UserProfile/>}></Route>
      <Route path='/setting' element = {<Setting/>}></Route>
      <Route path='/changeAcc' element = {<ChangeAcc/>}></Route>

     </Routes>
    </BrowserRouter>


    {/* <Main></Main> */}
    <Yo/>
    </div>

  
    </>
  )
}

export default App;