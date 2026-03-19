import AddCart from "./AddBtns"
function Cards({items,cartItems,setCartItems}){

    const updateCart=(item,value)=>{
        setCartItems(prev=>{
            const existing=prev.find(p=>p.name===item.name)
            if(existing){
                return prev.map(p=>
                    p.name===item.name ? {...p,count:value} :p
                )
            }
            return [...prev,{...item,count:value}]
        })
    }
    const getCount=(item)=>{
        const existing=cartItems.find(p=>p.name===item.name)
        return existing ? existing.count :0


    }



    return (
        <div className="grid grid-cols-4">
            {items.cart.map((item,index)=>{
                const count=getCount(item)
                return(
                    <div>
                        <div className="border rounded flex flex-col p-8">
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                        </div>
                        {count===0 ? (
                            <button  className="bg-blue-500 text-white px-4 py-2" onClick={()=>updateCart(item,1)}>Add to cart</button>
                        ):(
                            <AddCart count={count} setCount={(value)=>updateCart(item,value)}/>
                        )}
                        
                    
                    </div>
                    
                )
                    
            })}


        </div>
        
    )



}
export default Cards