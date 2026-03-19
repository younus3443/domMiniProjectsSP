import { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
// import AddBtn from './components/AddBtns'
import data from "./components/shopping_cart.json";
// import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                items={data}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
