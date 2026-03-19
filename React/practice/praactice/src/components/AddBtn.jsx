import { useState } from "react"
function AddCart({count,setCount}){
    return (
        <div className=" flex gap-5 justify-items-center">
            <button onClick={()=>setCount(count >0 ? count-1 :0)} className="p-2 rounded-2xl bg-blue-500">-</button>
            <p><span  className="font-bold text-3xl">{count} </span>in cart</p>
            <button onClick={()=>setCount(count+1)} className="p-2 rounded-2xl bg-blue-500">+</button>
        </div>
    )

}
export default AddCart