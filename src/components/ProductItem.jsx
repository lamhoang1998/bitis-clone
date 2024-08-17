import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../reducers/wishlistSlice";

function ProductItem({ item, title }) {
  console.log(item);
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleWishList(e) {
    e.preventDefault();
    const newWishListItem = {
      id: store.wishlist.wishList.length + 1,
      itemId: item.id,
      title: item.product.title,
      image: item.image.src,
      price: item.price.amount,
      type: title,
    };
    dispatch(addToWishList(newWishListItem));
    navigate("/wishlist");
  }

  return (
    <Link to={`/details/${item?.id}?type=${title}`}>
      <div className="group relative mb-3 h-[200px] overflow-hidden">
        <img
          src={item?.image.src}
          alt=""
          className="w-ful h-full object-cover"
        />
        <button
          className="invisible absolute bottom-2 left-[75px] group-hover:visible"
          onClick={handleWishList}
        >
          <FaRegHeart />
        </button>
        <Link
          to={`/details/${item?.id}?type=${title}`}
          className="invisible absolute bottom-2 left-[95px] group-hover:visible"
        >
          <CgShoppingCart />
        </Link>
      </div>
      <div className="mb-3 text-center">{`${item.product.title.slice(0, 20)}...`}</div>
      <div className="text-center text-red-700">${item.price.amount}</div>
    </Link>
  );
}

export default ProductItem;
