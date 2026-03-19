import React from "react";

const CartItem = ({ item, isExpired }) => {

  return (
    <div
      className={`border p-4 my-2 rounded flex justify-between items-center
      ${isExpired ? "bg-gray-200 text-gray-600" : "bg-yellow-50"}`}
    >

      <div>
        <p className="font-semibold">{item.name}</p>
        <p>Qty: {item.qty}</p>
      </div>

      {isExpired && (
        <p className="text-red-600 text-sm">
          Expired – remove item
        </p>
      )}

    </div>
  );
};

export default CartItem;