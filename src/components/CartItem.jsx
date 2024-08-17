import React from "react";
import { useDispatch } from "react-redux";
import {
  decreQuantity,
  deleteCartItem,
  increQuantity,
} from "../reducers/cartSlice";
import { useNavigate } from "react-router-dom";

function CartItem({ cart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="flex w-2/5">
        <div className="h-20 w-20">
          <img
            className="h-full w-full object-cover"
            src={cart.image.src}
            alt=""
            onClick={() =>
              navigate(`/details/${cart.itemId}?type=${cart.type}`)
            }
          />
        </div>
        <div className="ml-4 flex w-[60%] flex-grow flex-col justify-between">
          <span className="text-sm font-bold dark:text-white">
            {cart.title}
          </span>
          <span className="text-xs text-red-500 dark:text-green-400">
            Size: {cart.size}
          </span>
          <a
            href="#"
            className="text-xs font-semibold text-gray-500 hover:text-red-500 dark:text-rose-600"
            onClick={() => {
              console.log(cart.id);
              dispatch(deleteCartItem(cart.id));
            }}
          >
            Delete
          </a>
        </div>
      </div>
      <span className="w-1/5 text-center text-sm font-semibold text-red-600">
        ${cart.price}
      </span>

      <div className="flex w-1/5 justify-center">
        <svg
          className="w-3 fill-current text-gray-600 dark:text-white"
          viewBox="0 0 448 512"
          onClick={() => dispatch(decreQuantity(cart.id))}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <span className="w-1/5 text-center text-sm font-semibold dark:text-white">
          {cart.quantity}
        </span>

        <svg
          className="w-3 fill-current text-gray-600 dark:text-white"
          viewBox="0 0 448 512"
          onClick={() => dispatch(increQuantity(cart.id))}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="w-1/5 text-center text-sm font-semibold text-red-600">
        ${+cart.price * +cart.quantity}
      </span>

      {/* <span className="text-center w-1/5 font-semibold text-sm dark:text-white sm:hidden">$400.00</span> */}
    </div>
  );
}

export default CartItem;
