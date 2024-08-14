import React, { useEffect } from "react";
import { getGirlList } from "../api/apiBitis";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addGirlProduct } from "../reducers/girlSlice";
import Product from "../components/Product";

function Girls() {
  const dispatch = useDispatch();
  const { title, productVariants, id } = useLoaderData();

  useEffect(function () {
    dispatch(addGirlProduct(productVariants));
  }, []);

  return (
    <div className="py-7">
      <h2 className="py-9 text-center text-2xl uppercase text-gray-950">
        girl collection
      </h2>
      <Product products={productVariants} title={title.toLowerCase()} />
    </div>
  );
}

export default Girls;

export async function loader() {
  const womenProducts = await getGirlList();
  return womenProducts;
}
