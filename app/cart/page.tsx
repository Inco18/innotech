"use client";

import { useCartContext } from "@/context/cart-context";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { CiCircleInfo, CiTrash } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Cart = () => {
  const {
    productsInCart,
    totalPrice,
    totalQuantity,
    totalSaved,
    clearCart,
    changeProductQuantity,
    removeProductFromCart,
  } = useCartContext();

  if (totalQuantity === 0)
    return (
      <main className="w-full flex flex-col justify-center items-center gap-10 py-20 mb-10 lg:px-16 xl:px-32 px-2 max-w-[100rem]">
        <p className="text-3xl">Your cart is empty</p>
        <Link
          href={"/"}
          className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white py-2 px-10"
        >
          Go to home page
        </Link>
      </main>
    );

  return (
    <main className="w-full grid grid-cols-[1fr] lg:grid-cols-[70%_30%] py-5 mb-10 lg:px-16 xl:px-32 px-2 max-w-[100rem]">
      <div className="lg:pr-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-medium">
            Cart <span className="text-gray-500">({totalQuantity})</span>
          </span>
          <button
            className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
            onClick={clearCart}
          >
            <CiTrash className="text-xl" />
            Clear cart
          </button>
        </div>
        <ul className="border-2 rounded-lg">
          {productsInCart.map((product) => {
            return (
              <li
                className="flex gap-3 pt-2 border-b-2 last:border-none p-3 items-center"
                key={product.id}
              >
                <Link href={`/product/${product.id}`}>
                  <Image src={product.imageUrl} height={80} width={80} alt="" />
                </Link>
                <div className="w-full sm:flex-row sm:flex gap-3 items-center justify-between text-sm md:text-base">
                  <Link
                    href={`/product/${product.id}`}
                    className="hover:underline line-clamp-2"
                    title={product.name}
                  >
                    {product.name}
                  </Link>
                  <div className="flex gap-2 items-center justify-between sm:justify-start mt-2 lg:mt-0">
                    <div className="flex flex-col w-max">
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
                    <div className="flex items-center border-2 border-gray-200 rounded-lg">
                      <button
                        onClick={() =>
                          changeProductQuantity(
                            product.id,
                            product.quantity - 1
                          )
                        }
                        className="flex items-center justify-center w-7 text-gray-600 text-sm py-3 rounded-l-lg"
                      >
                        <FaChevronLeft />
                      </button>
                      <input
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        min={0}
                        max={99}
                        onChange={(e) => {
                          changeProductQuantity(
                            product.id,
                            parseInt(e.target.value)
                          );
                        }}
                        className="p-2 w-10 text-center border-x-[1px] border-gray-200"
                      />
                      <button
                        onClick={() =>
                          changeProductQuantity(
                            product.id,
                            product.quantity + 1
                          )
                        }
                        className="flex items-center justify-center w-7 text-gray-600 text-sm py-3 rounded-r-lg"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                    <div
                      className="text-2xl p-2 hover:bg-gray-100 rounded-lg cursor-pointer "
                      onClick={() => removeProductFromCart(product.id)}
                    >
                      <CiTrash />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sticky top-2 h-fit sm:max-w-sm sm:mx-auto lg:max-w-none lg:mx-0 mt-5 lg:mt-0">
        <div className="bg-gray-100 p-3 rounded-lg border-2 flex flex-col gap-2 ">
          {totalSaved > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <p>You save</p>
              <p>{totalSaved.toFixed(2)} zł</p>
            </div>
          )}
          <div className="flex text-base justify-between font-medium">
            <p>To pay</p>
            <p>{Number.isNaN(totalPrice) ? 0 : totalPrice.toFixed(2)} zł</p>
          </div>
          <Link
            href={"/cart"}
            className="bg-green-600 text-white p-2 w-full rounded-lg text-base hover:bg-green-700 flex items-center justify-center gap-1"
          >
            Go to delivery <FaChevronRight />
          </Link>
          <button className="bg-transparent text-black p-1 w-full rounded-lg text-sm hover:bg-gray-500 hover:text-white flex items-center justify-center border-[1px] border-black hover:border-transparent">
            Calculate installment or leasing
          </button>
        </div>
        <div className="flex gap-3 p-3">
          <CiCircleInfo className="text-3xl" />
          <p className="mt-1 text-sm">
            Complete the order - adding products to the cart does not mean
            reserving them.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Cart;
