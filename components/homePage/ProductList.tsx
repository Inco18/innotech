"use client";
import React from "react";

type Props = {
  products: {
    name: string;
    price: number;
    salePrice: number;
    imageUrl: string;
    productId: number;
  };
};

const ProductList = ({ products }: Props) => {
  return <div className=""></div>;
};

export default ProductList;
