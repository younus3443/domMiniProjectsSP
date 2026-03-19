function AddCart({count,setCount}){

    return (
        <>
        <div className="flex gap-5">
            <button onClick={()=>setCount(count>0 ? count-1 :0)}>-</button>
            <p><span>{count}</span> in cart</p>

            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
        </>
    )


}
export default AddCart
