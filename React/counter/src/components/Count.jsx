import { useState } from "react"

function Count(){
    const [count,setCount]=useState(0)
    const [update,setUpdate]=useState(1)
    
    return(
        <div className="flex justify-center items-center flex-col"> 
            <div className="text-4xl">{count}</div>
            <div className="flex gap-5 mt-5 ">
                <button onClick={()=>(setCount(count-update))} className="b1 p-3 bg-gray-400 rounded">-</button>
                <button onClick={()=>(setCount(count+update))}className="b2 p-3 bg-gray-400 rounded">+</button>
            </div>
            <div className="flex gap-5 mt-5">
                <p>Increment/Decrement by</p>
                <input value={update} onChange={(e)=>(setUpdate(Number(e.target.value)))} type="number" className="bg-gray-200"/> 
            </div>
            <div className="flex mt-5">
                <button onClick={()=>(setCount(0))} className="bg-gray-400 rounded p-3">Reset</button>
            </div>
        </div>    
    )

}
export default Count