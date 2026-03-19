import { useState } from "react";
import data from "./mall_flash_sale_dataset.json";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

function Product({cartItems,setCartItems}) {

  const navigate=useNavigate()
  const [search, setSearch] = useState("");
  const items = data.inventory;

  const filteredSearch=items.filter((item)=>item.name.toLowerCase().includes(search.toLocaleLowerCase()))
  const total = Object.values(cartItems).reduce(
  (acc, qty) => acc + qty,
  0
);

  return (
    <div>
      <div className=" flex justify-between px-10 bg-gray-600 py-10 text-white">
        <p>flash Sales</p>
        <input
          type="text"
          className="border"
          placeholder="Search....."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Reset</button>
        <button onClick={()=>navigate("/cart")}>Cart {total}</button>
      </div>
      <div className="grid grid-cols-4">
        {filteredSearch.map((item)=>(
          <Item  data={item} cartItems={cartItems} setCartItems={setCartItems}/>

        ))}
      </div>
      
    </div>
  );
}
export default Product;
