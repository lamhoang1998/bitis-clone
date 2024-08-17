import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const cartState = useSelector((store) => store.cart);
  console.log(cartState.cart);

  const itemNum = cartState.cart.reduce(
    (acc, cur) => acc + Number(cur.quantity),
    0,
  );

  return (
    <div className="container mx-auto mt-10 dark:bg-gray-900">
      <div className="my-10 flex shadow-md">
        <div className="w-3/4 bg-white px-10 py-10 dark:bg-gray-900">
          <div className="flex justify-between border-b pb-8">
            <h1 className="text-2xl font-semibold dark:text-white">
              Shopping Cart
            </h1>
            <h2 className="text-2xl font-semibold dark:text-white">
              {itemNum} Items
            </h2>
          </div>
          <div className="mb-5 mt-10 flex px-3 py-3">
            <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600 dark:text-white">
              Product Details
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600 dark:text-white">
              Price
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600 dark:text-white">
              Quantity
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600 dark:text-white">
              Total
            </h3>
          </div>

          {cartState.cart?.map((cart) => {
            return <CartItem key={cart.id} cart={cart} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
