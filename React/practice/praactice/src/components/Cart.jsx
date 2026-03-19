import { useNavigate } from "react-router-dom"

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate()
  const increase = (name) => {
    setCartItems(prev =>
      prev.map(item =>
        item.name === name
          ? { ...item, count: item.count + 1 }
          : item
      )
    )
  }
  const decrease = (name) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.name === name
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter(item => item.count > 0)
    )
  }
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  )
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.count,
    0
  )
  return (
    <>
      <div className="flex flex-col items-center mt-10 gap-4">

        <p className="font-bold text-xl">Your Shopping Cart</p>

        {cartItems.map((item, index) => (

          <div
            key={index}
            className="bg-amber-100 flex justify-between w-[500px] p-5 rounded-2xl"
          >

            <p>{item.name}</p>

            <div className="flex flex-col items-center gap-2">

              <span>${item.price}</span>

              <div className="flex gap-2 items-center">

                <button
                  onClick={() => decrease(item.name)}
                  className="bg-blue-500 text-white px-2 rounded"
                >
                  -
                </button>

                <span>{item.count}</span>

                <button
                  onClick={() => increase(item.name)}
                  className="bg-blue-500 text-white px-2 rounded"
                >
                  +
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="flex flex-col items-end mr-80 mt-10 gap-5">

        <p>
          Total: ${total}
          <span className="ml-2">({totalItems} items)</span>
        </p>

        <div className="flex gap-3">

          <button
            onClick={() => navigate("/")}
            className="bg-amber-400 px-6 py-2 text-white rounded"
          >
            Select more
          </button>

          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Proceed to pay
          </button>

        </div>

      </div>
    </>
  )
}

export default Cart