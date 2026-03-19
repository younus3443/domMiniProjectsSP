
import { useState } from "react"
import Variant from "./Variant"
function Item({data,cartItems,setCartItems}){
  const [variant,setvariant]=useState(false)
  return (
    <div className="border">
      <img  src={data.media.thumbnail} />
      <p>{data.name}</p>
      <button className="bg-blue-500" onClick={()=>setvariant(prev=>!prev)}>{variant ? "Hide Variant":"show variant"}</button>
      {variant && (
        <div>{data.variants.map((v)=>(
          <Variant data={v} cartItems={cartItems} setCartItems={setCartItems} />
        ))}</div>
      
    ) }
    </div>
    
  )

}
export default Item