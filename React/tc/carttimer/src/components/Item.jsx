import React, { useState } from "react";
import Variant from "./Variant";

const Item = ({item,lowestPrice,cart,addItem,removeItem,expireItem}) => {

  const [showVariants,setShowVariants] = useState(false)

  return (

    <div className="border p-4">

      <img src={item.media.images[0]} />

      <h2 className="font-bold">{item.name}</h2>

      <p>{item.brand.name}</p>

      <p>{item.category.primary}</p>

      <p>{item.store.name}</p>

      <p className="text-green-700">
        From ₹{lowestPrice}
      </p>


      <button
        onClick={()=>setShowVariants(prev=>!prev)}
        className="bg-blue-500 text-white px-3 py-1 mt-2"
      >
        Show Variants
      </button>


      {showVariants && (

        <div className="mt-3 flex flex-col gap-2">

          {item.variants.map((v,i)=>(
            <Variant
              key={v.sku}
              v={v}
              name={item.name+" "+v.attributes.colour}
              cart={cart}
              addItem={addItem}
              removeItem={removeItem}
              expireItem={expireItem}
            />
          ))}

        </div>

      )}

    </div>

  )

}

export default Item