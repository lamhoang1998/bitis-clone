import React, { useEffect } from "react";
import { getMenList } from "../api/apiBitis";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMenProduct } from "../reducers/menSlice";
import Product from "../components/Product";

function Men() {
  const dispatch = useDispatch();
  const { title, productVariants, id } = useLoaderData();

  useEffect(function () {
    dispatch(addMenProduct(productVariants));
  }, []);

  // useEffect(function () {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(
  //         "https://665f0fcd1e9017dc16f2a71a.mockapi.io/api/bitis/1",
  //       );

  //       const { productVariants } = await res.json();
  //       console.log(productVariants);
  //       dispatch(addMenProduct(productVariants));
  //     } catch (err) {}
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="py-7">
      <h2 className="py-9 text-center text-2xl uppercase text-gray-950">
        men collection
      </h2>
      <Product products={productVariants} title={title.toLowerCase()} />
    </div>
  );
}

export async function loader() {
  const menProducts = await getMenList();
  return menProducts;
}

export default Men;
