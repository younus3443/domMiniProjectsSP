import AddBtn from "./AddBtns";
function Cards({ items, cartItems, setCartItems }) {
  function updateCart(item, value) {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.name === item.name);
      if (existing) {
        return prev.map((p) =>
          p.name === item.name ? { ...p, count: value } : p,
        );
      }
      return [...prev, { ...item, count: value }];
    });
  }

  function getCount(item) {
    const existing = cartItems.find((prev) => prev.name === item.name);
    return existing ? existing.count : 0;
  }

  return (
    <div className="grid grid-cols-4 gap-10">
      {items.cart.map((item) => {
        const count = getCount(item);
        return (
          <div>
            <div className="border h-35 w-40 px-4">
              <div>{item.name}</div>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>

            {count === 0 ? (
              <button onClick={() => updateCart(item, 1)}>Add to Cart</button>
            ) : (
              <AddBtn
                count={count}
                setCount={(value) => updateCart(item, value)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
