import { useState } from "react"
import Variant from "./Variant"
function Item({item,lowestPrice,cart,addItem,removeItem,expireItem}){

    const [showVariant,setShowVariant]=useState(false)

    return(
        <div>
            <img src={item.media.thumbnail}/>
            <h2>{item.name}</h2>
            <p>{item.category.primary}</p>
            <p>{item.store.name}</p>
            <p className="text-green-500">FROM:{lowestPrice}</p>
            <button className="bg-blue-600 text-white" onClick={()=>setShowVariant(prev=>!prev)}>Show Variant</button>

            {showVariant && (
                <div>
                    {item.variants.map((v,i)=>(
                        <Variant key={v.sku} v={v} name={item.name+" "+v.attributes.colour} cart={cart} addItem={addItem} removeItem={removeItem} expireItem={expireItem}/>
                    ))}

                </div>
            )}



        </div>
    )



}
export default Item