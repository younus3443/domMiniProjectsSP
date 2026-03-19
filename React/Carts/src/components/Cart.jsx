import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0,
  );
  const totalQty = cartItems.reduce((acc, curr) => acc + curr.count, 0);

  function increse(name) {
    setCartItems((prev) =>
      prev.map((p) => (p.name == name ? { ...p, count: p.count + 1 } : p)),
    );
  }
  function decrease(name) {
    setCartItems((prev) =>
      prev
        .map((p) => (p.name == name ? { ...p, count: p.count - 1 } : p))
        .filter((item) => item.count > 0),
    );
  }

  return (
    <div>
      <p>Your cart</p>
      {cartItems.map((item) => (
        <div>
          <div>{item.name}</div>
          <div className="flex gap-5">
            <p>{item.price}</p>
            <div className="flex gap-2">
              <button onClick={() => decrease(item.name)}>-</button>
              <p>{item.count}</p>
              <button onClick={() => increse(item.name)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <p>
          Total:{totalPrice} - {totalQty}
        </p>
      </div>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
export default Cart;
