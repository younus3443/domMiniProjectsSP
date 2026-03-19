import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, setCart }) => {

  const hasExpired = cart.some(item => item.time <= 0)

  function removeExpired(){
    setCart(prev => prev.filter(item => item.time > 0))
  }

  return (

    <div className="p-6 bg-white w-[400px] rounded shadow">

      <h2 className="text-2xl font-bold mb-4">
        Cart
      </h2>


      {cart.length === 0 && (
        <p>Cart is empty</p>
      )}


      {cart.map(item => (
        <CartItem
          key={item.name}
          item={item}
          isExpired={item.time <= 0}
        />
      ))}


      {hasExpired && (
        <button
          onClick={removeExpired}
          className="mt-3 px-3 py-1 bg-red-600 text-white rounded"
        >
          Remove Expired Items
        </button>
      )}


      <div className="mt-4">

        <button
          disabled={hasExpired || cart.length === 0}
          className={`px-4 py-2 rounded font-semibold
          ${
            hasExpired || cart.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white"
          }`}
        >
          Proceed
        </button>

      </div>

    </div>

  )
}

export default Cart