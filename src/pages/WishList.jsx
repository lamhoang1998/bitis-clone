import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../components/WishListItem";

function WishList() {
  const wishList = useSelector((store) => store.wishlist);
  console.log(wishList);
  return (
    <div className="container mx-auto mt-10 dark:bg-gray-900">
      <div className="my-10 flex shadow-md">
        <div className="w-3/4 bg-white px-10 py-10 dark:bg-gray-900">
          <div className="flex justify-between border-b pb-8">
            <h1 className="text-2xl font-semibold dark:text-white">wishlist</h1>
            <h2 className="text-2xl font-semibold dark:text-white">
              {wishList.wishList.length} Items
            </h2>
          </div>
          <div className="mb-5 mt-10 flex px-3 py-3">
            <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600 dark:text-white">
              Product Details
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600 dark:text-white">
              Price
            </h3>
          </div>
          {wishList.wishList?.map((wishList) => {
            return <WishListItem key={wishList.id} wishList={wishList} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default WishList;
