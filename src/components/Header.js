import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className='p-3 bg-success'>
<h1>Farm To Home</h1>
<div className='row justify-content-center pt-2 pt-1 ' >
  
<div className='col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex'>
   <input
    className='form-control me-4' 
    type='search'
    placeholder='Explore more Fresh Products'/>
   <button className='btn btn-dark me-4' onClick={ ()=> navigate('/')}>Home</button>
   <button className='btn btn-dark ' onClick={()=> navigate('/Cart')}>Cart</button>
   </div>
   </div>
    </div>
  )
}

// To column should in center so give column function
//me => margin -right
//ms => margin left