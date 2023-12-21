"use client";
import React from "react";
import CartButton from "./CartButton";
import CartProducts from "./CartProducts";
import { useCartContext } from "@/context/cart-context";
import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci";

const Cart = () => {
  const { totalQuantity, totalPrice, totalSaved } = useCartContext();
  return (
    <div className="group flex flex-col justify-center items-center md:cursor-pointer relative order-3 md:order-4">
      <CartButton />
      <div className="bg-white absolute h-[0.65rem] w-full top-[90%] z-[101] cursor-default hidden md:group-hover:block"></div>
      <div className="absolute z-[100] bg-white top-full w-max max-w-sm right-0 text-sm rounded-b-md rounded-l-md lg:rounded-r-md cursor-default hidden md:group-hover:flex group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] flex-col max-h-[min(30rem,_calc(100vh-5rem))]">
        {totalQuantity === 0 && (
          <div className="p-4 font-medium text-xl">Your cart is empty</div>
        )}
        {totalQuantity > 0 && (
          <>
            <div className="flex justify-between items-center p-3 border-b-2">
              <span className="text-xl font-medium">
                Cart <span className="text-gray-500">({totalQuantity})</span>
              </span>
              <Link
                href={"/cart"}
                className="text-blue-500 hover:text-blue-600"
              >
                Edit
              </Link>
            </div>
            <CartProducts />
            <div className="bg-gray-100 p-3 rounded-md border-t-2 flex flex-col gap-1">
              {totalSaved > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <p>You save</p>
                  <p>{totalSaved.toFixed(2)} zł</p>
                </div>
              )}
              <div className="flex text-base justify-between font-medium">
                <p>To pay</p>
                <p>{totalPrice.toFixed(2)} zł</p>
              </div>
              <Link
                href={"/cart"}
                className="bg-green-600 text-white p-2 w-full rounded-lg text-base text-center"
              >
                Go to cart
              </Link>
              <div className="flex gap-3">
                <CiCircleInfo className="text-2xl" />
                <p className="mt-1">
                  Complete the order - adding products to the cart does not mean
                  reserving them.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
