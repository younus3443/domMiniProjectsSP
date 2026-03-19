import { useEffect, useState } from "react"

function Variant({data,cartItems,setCartItems}){

  const [time,setTime]=useState(data.ttlSeconds)

  useEffect(()=>{
    const timer=setInterval(()=>{
      setTime(prev=>{
        if(prev<=1){
          clearInterval(timer)
          return 0
        }
        return prev-1
      })
    },1000)

  },[])
  const qty = cartItems[data.sku] || 0;
  function increment() {
    if (time === 0) return;

    setCartItems(prev => ({
      ...prev,
      [data.sku]: (prev[data.sku] || 0) + 1
    }));
  }

  function decrement() {
    setCartItems(prev => {
      const current = prev[data.sku] || 0;

      if (current <= 1) {
        const updated = { ...prev };
        delete updated[data.sku];
        return updated;
      }

      return {
        ...prev,
        [data.sku]: current - 1
      };
    });
  }

  const minutes=Math.floor(time/60)
  const seconds=Math.floor(time%60)
  const formattedTime=`${minutes}:${seconds}`

  

  return (
    <div>   
    <div>
      
      <p >{data.attributes.colour}</p>
      <p className="text-red-600 font-bold">{time<=0 ? "SOld Out":""}</p>
      <span>{data.pricing.salePrice}</span>
      <div>
        <button onClick={decrement}>-</button>
        <span>{qty}</span>
        <button onClick={increment}>+</button>
        <p>{formattedTime}</p>
      </div>
    </div>
      
    </div>
    
  )

}
export default Variant