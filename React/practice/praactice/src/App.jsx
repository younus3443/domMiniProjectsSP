import { useState } from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Cart from "./components/Cart"
import data from "./components/shopping_cart(1).json"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Card items={data} cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App