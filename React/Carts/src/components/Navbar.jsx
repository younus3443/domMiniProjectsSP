import { useNavigate } from "react-router-dom";
function Navbar({ cartItems }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, curr) => acc + curr.count, 0);
  console.log(total);

  return (
    <div className="flex justify-between px-20">
      <p>Ornichid</p>
      <p onClick={() => navigate("/cart")}>Cart {total}</p>
    </div>
  );
}
export default Navbar;
