import React, { useState } from "react";
import data from "./mall_flash_sale_dataset.json";
import Item from "./Item";
import CartItem from "./CartItem";

const Products = () => {

  const [cart,setCart] = useState([])
  const [showCart,setShowCart] = useState(false)
  const [search,setSearch] = useState("")
  const [resetKey,setResetKey] = useState(0)

  const items = data.inventory

  function addItem(name,time){

    setCart(prev=>{

      const exist = prev.find(i=>i.name===name)

      if(exist){
        return prev.map(i =>
          i.name===name ? {...i,qty:i.qty+1} : i
        )
      }

      return [...prev,{name,qty:1,time}]
    })

  }

  function removeItem(name){

    setCart(prev =>
      prev
        .map(i => i.name===name ? {...i,qty:i.qty-1} : i)
        .filter(i=>i.qty>0)
    )

  }

  function expireItem(name){

    setCart(prev =>
      prev.map(i =>
        i.name===name ? {...i,time:0} : i
      )
    )

  }

  function removeExpiredItems(){
    setCart(prev => prev.filter(item => item.time > 0))
  }

  function handleReset(){
    setCart([])
    setSearch("")
    setShowCart(false)
    setResetKey(prev => prev + 1)
  }

  const total = cart.reduce((acc,curr)=>acc+curr.qty,0)

  const hasExpired = cart.some(item => item.time <= 0)

  const filteredItems = search.trim()
    ? items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : items

  return (

    <div>


      <div className="flex justify-between items-center p-4 bg-gray-700 text-white">

        <h1 className="text-xl">Flash Sale</h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="px-2 py-1 text-black rounded bg-white"
        />

        <div className="flex gap-3">

          <button
            onClick={handleReset}
            className="bg-red-500 px-3 py-1 rounded text-white"
          >
            Reset
          </button>

          <button
            onClick={()=>setShowCart(true)}
            className="bg-yellow-400 px-3 py-1 rounded text-black"
          >
            Cart ({total})
          </button>

        </div>

      </div>

      {showCart && (

        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-start pt-20"
          onClick={()=>setShowCart(false)}
        >

          <div
            className="bg-white p-6 w-[400px] rounded shadow"
            onClick={(e)=>e.stopPropagation()}
          >

            <h2 className="text-2xl mb-4">Cart</h2>

            {cart.length === 0 && (
              <p>No items in cart</p>
            )}

            {cart.map(c=>(
              <CartItem
                key={c.name}
                item={c}
                isExpired={c.time<=0}
              />
            ))}

            {hasExpired && (
              <button
                onClick={removeExpiredItems}
                className="mt-3 px-3 py-1 bg-red-600 text-white rounded"
              >
                Remove Expired Items
              </button>
            )}

            <div className="flex gap-3 mt-4">

              <button
                onClick={()=>setShowCart(false)}
                className="bg-gray-600 px-3 py-1 text-white rounded"
              >
                Close
              </button>

              <button
                disabled={hasExpired || cart.length === 0}
                className={`px-3 py-1 rounded font-semibold
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

        </div>

      )}
      <div className="grid grid-cols-3 gap-4 p-6">

        {filteredItems.map(item=>{

          const lowestPrice = Math.min(
            ...item.variants.map(v=>v.pricing.salePrice)
          )

          return(
            <Item
              key={item.id + resetKey}
              item={item}
              lowestPrice={lowestPrice}
              cart={cart}
              addItem={addItem}
              removeItem={removeItem}
              expireItem={expireItem}
            />
          )
        })}

      </div>

    </div>

  )

}

export default Products