import {useEffect,useState} from "react"

const Variant = ({v,name,cart,addItem,removeItem,expireItem}) => {

  const [time,setTime] = useState(v.ttlSeconds)

  useEffect(()=>{

    if(time<=0){
      expireItem(name)
      return
    }

    const timer = setTimeout(()=>{
      setTime(prev=>prev-1)
    },1000)

    return ()=>clearTimeout(timer)

  },[time])


  const cartItem = cart.find(i=>i.name===name)
  const qty = cartItem?.qty ?? 0


  return(

    <div className="border p-2 bg-blue-50">

      <p>
        {v.attributes.colour} / {v.attributes.size}
      </p>

      <p>
        ₹{v.pricing.salePrice}
      </p>


      {time>0 ? (

        <div className="flex gap-2">

          <button onClick={()=>removeItem(name)}>
            -
          </button>

          {qty}

          <button onClick={()=>addItem(name,time)}>
            +
          </button>

          <span>
            {Math.floor(time/60)}m:{time%60}s
          </span>

        </div>

      ):(
        <p className="text-red-600 font-bold">
          SOLD OUT
        </p>
      )}

    </div>

  )

}

export default Variant