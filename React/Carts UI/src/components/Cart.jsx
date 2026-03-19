import { useNavigate } from "react-router-dom"
function Cart({cartItems,setCartItems}){
    const navigate=useNavigate()

    const increase=(name)=>{
        setCartItems(prev=>prev.map(item=>item.name===name ? {...item,count:item.count+1}:item )

        )

    }
    const decrease=(name)=>{
        setCartItems(prev=>prev.map(item=>item.name===name ? {...item,count:item.count-1}:item ).filter(item=>item.count>0)
    )

    }

    const totalPrice=cartItems.reduce((acc,curr)=>acc+curr.price*curr.count,0)
    const totalItems=cartItems.reduce((acc,curr)=>acc+curr.count,0)

    return (
        <div className="flex flex-col">
            <p>Your Shopping Cart</p>
            {cartItems.map((item)=>(
                <div className="flex justify-between">
                <p>{item.name}</p>
                <div >
                    <span>{item.price}</span>
                    <div className="flex gap-5">
                        <button onClick={()=>decrease(item.name)}>-</button>
                        <p>{item.count}</p>
                        <button onClick={()=>increase(item.name)}>+</button>
                    </div>
                    

                </div>
                
            </div>
            


            ))}
            <div>
                <p>Total:{totalPrice} <span>({totalItems}) items</span></p>
                {console.log(totalItems)}
                <div>
                    <button onClick={()=>navigate("/")} className="text-orange-500"> &larr; select more</button>
                    <button className="text-green-600">Proceed to pay</button>
                </div>
            </div>
            
            
    
            
        </div>
    )
}
export default Cart