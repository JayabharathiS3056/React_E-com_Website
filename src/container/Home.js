import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Header from '../components/Header'
// import Header from '../components/Header'
import Dashboard from './Dashboard'
import Product from './Product'
import Cart from './Cart'
import Checkout from './Checkout'
import Success from './Success'

export default function Home() {
  return (
    <div>
     <Header />
        <Routes>
            <Route path = "/" element = {<Dashboard />}/>
            <Route path = '/product/:id' element={<Product/>}/>
            <Route path= '/cart' element ={<Cart/>}/>
            <Route path='/checkout/'>
            <Route path = "" element ={ <Checkout/>}/>
            <Route path=":id" element ={<Checkout/>}/>
            </Route>
            <Route path ='/success' element ={<Success/>}/>
        </Routes>
    </div>
  )
}

//A home page
//if user goes checkout from cart , it may be empty(empty means same as Cart.js)
//but if user goes to checkout from buy now, that product id will be passed as params
