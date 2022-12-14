import React, { useState } from 'react'
import Footer from './Footer'
import Home from './Home'
import Navb from './Navb'
import Contact from './Contact'
import Error from './Error'
import Store from './Store'
import ProductDetail from './ProductDetail'
import FetchState from './Context/FetchState'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './Cart'
function Navigator(){
   const [cart,setCart]=useState([]);


  function addToCart(data){
    setCart([...cart,data])

  }
  
  
  return (
    <div>
      <FetchState>
   
      <Router>
      <Navb/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/store' element={<Store addToCart={addToCart}/>}/>
        <Route path="/store/productdetail/:id" element={<ProductDetail addToCart={addToCart}/>} />
        <Route path='/cart' element={<Cart data={cart}  />}/>
        <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>    
      
    </FetchState>
  
       </div>
  )
}

export default Navigator
