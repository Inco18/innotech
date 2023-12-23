"use client";
import { useCartContext } from "@/context/cart-context";
import useWindowDimensions from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCartPlus } from "react-icons/bs";

type Props = {
  products: {
    name: string;
    price: number;
    salePrice?: number;
    imageUrl: string;
    productId: number;
  }[];
};

const ProductList = ({ products }: Props) => {
  const { width } = useWindowDimensions();
  const { addProductToCart } = useCartContext();
  return (
    <div className="lg:grid grid-cols-4 gap-x-1 gap-y-10 pt-5">
      {products.map((product) => {
        return (
          <div className="flex flex-col items-center p-2 hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] rounded-lg group">
            <Link href={`/product/${product.productId}`}>
              <Image src={product.imageUrl} width={150} height={150} alt="" />
            </Link>
            <Link
              href={`/product/${product.productId}`}
              className="text-left w-full text-sm line-clamp-2"
            >
              {product.name}
            </Link>
            <div className="flex justify-between w-full text-sm mt-auto items-end ">
              <div className="flex flex-col">
                {product.salePrice && (
                  <span className="text-gray-500 line-through">
                    {product.price.toFixed(2)} zł
                  </span>
                )}
                <span>
                  {product.salePrice
                    ? product.salePrice.toFixed(2)
                    : product.price.toFixed(2)}{" "}
                  zł
                </span>
              </div>
              <div
                onClick={() =>
                  addProductToCart({
                    id: product.productId,
                    name: product.name,
                    imageUrl: product.imageUrl,
                    price: product.price,
                    salePrice: product.salePrice
                      ? product.salePrice
                      : undefined,
                    quantity: 1,
                  })
                }
                className="hidden group-hover:block text-lg text-green-600 border-green-600 border-[1px] p-2 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white"
              >
                <BsCartPlus />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
