import React from "react";
import { useDispatch } from "react-redux";
import { deleteWishListItem } from "../reducers/wishlistSlice";
import { Link } from "react-router-dom";

function WishListItem({ wishList }) {
  const dispatch = useDispatch();

  return (
    <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="flex w-2/5">
        <div className="h-20 w-20">
          <img
            className="h-full w-full object-cover"
            src={wishList.image}
            alt=""
          />
        </div>
        <div className="ml-4 flex w-[60%] flex-grow flex-col justify-between">
          <span className="text-sm font-bold dark:text-white">
            {wishList.title}
          </span>

          <a
            href="#"
            className="text-xs font-semibold text-gray-500 hover:text-red-500 dark:text-rose-600"
            onClick={() => dispatch(deleteWishListItem(wishList.id))}
          >
            Delete
          </a>
        </div>
      </div>
      <span className="w-1/5 text-center text-sm font-semibold text-red-600">
        {wishList.price}
      </span>
      <Link
        to={`/details/${wishList.itemId}?type=${wishList.type}`}
        className="bg-red-700 p-3 text-sm uppercase text-white"
      >
        View Product
      </Link>

      {/* <span className="text-center w-1/5 font-semibold text-sm dark:text-white sm:hidden">$400.00</span> */}
    </div>
  );
}

export default WishListItem;
