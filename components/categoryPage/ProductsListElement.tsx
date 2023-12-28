"use client";

import { updateSearchParams } from "@/utils/url";
import React from "react";

const ProductListElement = ({
  id,
  name,
  price,
  salePrice,
  imageUrl,
  specification,
}: CategoryProduct) => {
  // const updatedPath = updateSearchParams("page", "1");

  return (
    <div
      id={`${id}`}
      className=" h-[20rem]  rounded-md transition-shadow duration-300 hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] flex flex-col justify-between"
    >
      {/* <Image /> */}
      <p className="text-sm">{name}</p>
      <hr />
    </div>
  );
};

export default ProductListElement;
