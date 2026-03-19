import AddCart from "./AddBtn"

function Card({ items, cartItems, setCartItems }) {

  const updateCart = (item, value) => {

    setCartItems(prev => {
      const existing = prev.find(p => p.name === item.name)
      if (existing) {
        return prev.map(p =>
          p.name === item.name ? { ...p, count: value } : p
        )
      }
      return [...prev, { ...item, count: value }]
    })
  }

  const getCount = (item) => {
    const existing = cartItems.find(p => p.name === item.name)
    return existing ? existing.count : 0
  }

  return (
    <div className="grid grid-cols-4 gap-10 justify-items-center mt-10">

      {items.cart.map((item, index) => {

        const count = getCount(item)

        return (
          <div key={index} className="flex flex-col items-center gap-3">

            <div className="border rounded flex flex-col p-8 gap-5">
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-xs text-gray-400">{item.description}</p>
              <span className="font-bold">${item.price}</span>
            </div>

            {count === 0 ? (
              <button
                onClick={() => updateCart(item, 1)}
                className="bg-amber-300 px-6 py-2 rounded-lg"
              >
                Add to cart
              </button>
            ) : (
              <AddCart
                count={count}
                setCount={(value) => updateCart(item, value)}
              />
            )}

          </div>
        )
      })}

    </div>
  )
}

export default Card