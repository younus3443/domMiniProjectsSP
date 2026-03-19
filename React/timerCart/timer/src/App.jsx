
import { useState } from "react";
import Product from "./components/Product";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Cart from "./components/CartPage";
import "./index.css";
function App() {

  const [cartItems,setCartItems]=useState([])
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Product cartItems={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
    </Routes>
    </BrowserRouter>
    

  )
    
}

export default App;