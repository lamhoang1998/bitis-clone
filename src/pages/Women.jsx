import React, { useEffect } from "react";
import { getWomenList } from "../api/apiBitis";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWomenProduct } from "../reducers/womenSlice";
import Product from "../components/Product";

function Women() {
  const dispatch = useDispatch();
  const { title, productVariants, id } = useLoaderData();

  useEffect(function () {
    dispatch(addWomenProduct(productVariants));
  }, []);

  return (
    <div className="py-7">
      <h2 className="py-9 text-center text-2xl uppercase text-gray-950">
        men collection
      </h2>
      <Product
        products={productVariants}
        title={title.toLowerCase()}
        type="women"
      />
    </div>
  );
}

export async function loader() {
  const womenProducts = await getWomenList();
  return womenProducts;
}

export default Women;
