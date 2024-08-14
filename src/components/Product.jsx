import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";

function Product({ products, title }) {
  return (
    <div className="mx-auto my-0 max-w-[1200px] px-[15px] py-0">
      <div className="grid grid-cols-6 gap-4">
        {products?.map((item) => {
          return (
            <Link to={`/details/${item?.id}?type=${title}`} key={item?.id}>
              <div className="group relative mb-3 h-[200px] overflow-hidden">
                <img
                  src={item?.image.src}
                  alt=""
                  className="w-ful h-full object-cover"
                />
                <Link
                  to="/wishlist"
                  className="invisible absolute bottom-2 left-[75px] group-hover:visible"
                >
                  <FaRegHeart />
                </Link>
                <Link
                  to="/cart"
                  className="invisible absolute bottom-2 left-[95px] group-hover:visible"
                >
                  <CgShoppingCart />
                </Link>
              </div>
              <div className="mb-3 text-center">{`${item.product.title.slice(0, 20)}...`}</div>
              <div className="text-center text-red-700">
                ${item.price.amount}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
