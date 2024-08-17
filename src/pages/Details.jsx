import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { addMenProduct } from "../reducers/menSlice";
import { addToCart } from "../reducers/cartSlice";

function Details() {
  const [numProduct, setNumProduct] = useState(1);
  const [size, setSize] = useState(6.5);

  const navigate = useNavigate();

  const store = useSelector((store) => store);

  const dispatch = useDispatch();

  let detail = {};

  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const storeToArray = Object.entries(store);

  storeToArray.forEach((arr) => {
    if (arr[0] === type) {
      const key = arr[0];

      arr[1][key].forEach((item) => {
        if (+item.id === +id) {
          detail = { ...item };
        }
      });
    }
  });

  function handleIncreNumProduct() {
    setNumProduct((num) => num + 1);
  }

  function handleDecreNumProduct() {
    if (numProduct > 1) setNumProduct((num) => num - 1);
  }

  function handleAddtoCart() {
    console.log(detail);
    const newCartProduct = {
      id: detail.id,
      title: detail.product.title,
      image: detail.image,
      size: size,
      price: detail.price.amount,
      quantity: numProduct,
    };

    dispatch(addToCart(newCartProduct));
    navigate("/cart");
  }

  return (
    <div className="mx-auto my-0 max-w-[1200px] px-[15px] py-0">
      <div className="flex items-start justify-between gap-5">
        <div className="h-[450px] w-[450px] overflow-hidden">
          <img src={detail.image.src} className="h-full w-full object-cover" />
        </div>
        <div className="w-3/5">
          <h2 className="mb-6 text-4xl text-gray-950">
            {detail.product.title}
          </h2>
          <div className="mb-6 flex gap-6">
            <span className="ml-5 text-green-600">In Stock</span>
            <span className="uppercase">Sku: {detail.sku}</span>
          </div>
          <span className="text-red-600">${detail.price.amount}</span>
          <p className="mb-6">Shipping calculated at checkout.</p>
          <span className="mb-6 inline-block bg-black text-white">
            Hurry, Only 1 left!
          </span>
          <div className="mb-6 flex gap-6">
            <span className="inline-block uppercase">size: {size} </span>
            <span className="inline-block uppercase">size chart</span>
          </div>
          <div className="mb-10 flex items-center gap-3">
            <div className="relative h-[2rem] w-[2rem] cursor-pointer">
              <input
                type="radio"
                name="size"
                value="6.5"
                className="absolute left-0 top-0 h-[38px] w-[38px] cursor-pointer opacity-0"
                onChange={(e) => setSize(e.target.value)}
              />
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-gray-400 text-sm font-medium">
                6.5
              </span>
            </div>
            <div className="relative h-[2rem] w-[2rem] cursor-pointer">
              <input
                type="radio"
                name="size"
                value="7"
                className="absolute left-0 top-0 h-[38px] w-[38px] cursor-pointer opacity-0"
                onChange={(e) => setSize(e.target.value)}
              />
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-gray-400 text-sm font-medium">
                7
              </span>
            </div>
            <div className="relative h-[2rem] w-[2rem] cursor-pointer">
              <input
                type="radio"
                name="size"
                value="7.5"
                className="absolute left-0 top-0 h-[38px] w-[38px] cursor-pointer opacity-0"
                onChange={(e) => setSize(e.target.value)}
              />
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-gray-400 text-sm font-medium">
                7.5
              </span>
            </div>
            <div className="relative h-[2rem] w-[2rem] cursor-pointer">
              <input
                type="radio"
                name="size"
                value="8.5"
                className="absolute left-0 top-0 h-[38px] w-[38px] cursor-pointer opacity-0"
                onChange={(e) => setSize(e.target.value)}
              />
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-gray-400 text-sm font-medium">
                8.5
              </span>
            </div>
            <div className="relative h-[2rem] w-[2rem] cursor-pointer">
              <input
                type="radio"
                name="size"
                value="9"
                className="absolute left-0 top-0 h-[38px] w-[38px] cursor-pointer opacity-0"
                onChange={(e) => setSize(e.target.value)}
              />
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-solid border-gray-400 text-sm font-medium">
                9
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex">
              <button onClick={handleDecreNumProduct}>
                <FaMinus />
              </button>
              <span className="inline-block">{numProduct}</span>
              <button onClick={handleIncreNumProduct}>
                <FaPlus />
              </button>
            </div>
            <div>
              <button onClick={handleAddtoCart}>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
