import { useNavigate } from "react-router-dom"

function Navbar({cartItems}){

    const total=cartItems.reduce((acc,curr)=>
         acc+curr.count,0)

    const navigate=useNavigate()
    return (
        <>
        <div className="flex justify-around">
            <div>Shop It++</div>
            <div>
                <button onClick={()=>navigate('/cart')}>Cart ({total})</button>
            </div>
        </div>
        </>
    )
}
export default Navbar