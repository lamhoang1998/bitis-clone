import React from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";

function Details() {
  const store = useSelector((store) => store);

  let detail = {};

  const { id } = useParams();

  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const storeToArray = Object.entries(store);
  console.log(storeToArray);

  storeToArray.forEach((arr) => {
    if (arr[0] === type) {
      const key = arr[0];

      arr[1][key].forEach((item) => {
        if (+item.id === +id) {
          detail = { ...item };
          console.log(id);
          console.log(detail);
        }
      });
    }
  });

  return (
    <div className="mx-auto my-0 max-w-[1200px] px-[15px] py-0">
      <div className="flex items-start gap-5">
        <div className="h-[450px] w-[450px] overflow-hidden">
          <img src={detail.image.src} className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="mb-6">{detail.product.title}</h2>
          <div className="mb-6 flex gap-2">
            <span>In Stock</span>
            <span className="uppercase">Sku: {detail.sku}</span>
          </div>
          <span className="text-red-600">${detail.price.amount}</span>
          <p className="mb-6">Shipping calculated at checkout.</p>
          <span className="mb-6 inline-block bg-black text-white">
            Hurry, Only 1 left!
          </span>
          <div className="flex gap-2">
            <span className="inline-block uppercase">size: {detail.title}</span>
            <span className="inline-block uppercase">size chart</span>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Details;
