"use client";
import { useCartContext } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartProducts = ({ onClose }: { onClose: () => void }) => {
  const { productsInCart } = useCartContext();

  return (
    <ul className="flex-1 overflow-y-auto px-2">
      {productsInCart.map((product) => {
        return (
          <li
            className="flex gap-3 pt-2 border-b-2 last:border-none pb-5"
            key={product.id}
          >
            <Link href={`/product/${product.id}`} onClick={onClose}>
              <Image src={product.imageUrl} height={80} width={80} alt="" />
            </Link>
            <div className="w-full">
              <Link
                href={`/product/${product.id}`}
                className="hover:underline"
                onClick={onClose}
              >
                {product.name}
              </Link>
              <div className="flex justify-between mt-2">
                <span className="text-gray-500">
                  {product.quantity} {product.quantity > 1 ? "pcs" : "pc"}
                </span>
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
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default CartProducts;
