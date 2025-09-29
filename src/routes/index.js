//
import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../container/Home'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="*" element = {<Home/>}/>
    </Routes>
     </BrowserRouter>
  )
}

// Type "rfc" react functional component
//This file is to include components related to top navbar

//This file is used in maain file appp.js where react application runs
// <Route path="*" element ={<Home/>}></Route>
