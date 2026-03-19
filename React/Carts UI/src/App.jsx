import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import data   from "./components/shopping_cart.json"
import Cards from './components/Cards'

function App() {
  const [cartItems,setCartItems]=useState([])

  return (
    <>
    <BrowserRouter>
    
    <Navbar cartItems={cartItems}/>
    <Routes>
      <Route path="/" element={<Cards items={data} cartItems={cartItems} setCartItems={setCartItems} />}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
    </Routes>
    
    </BrowserRouter>
    </>
  )
  
}

export default App
