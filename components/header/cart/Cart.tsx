"use client";
import React from "react";
import CartButton from "./CartButton";
import CartProducts from "./CartProducts";

const Cart = () => {
  return (
    <div className="group flex flex-col justify-center items-center md:cursor-pointer relative order-3 md:order-4">
      <CartButton />
      <div className="bg-white absolute h-[0.65rem] w-full top-[90%] z-50 cursor-default hidden md:group-hover:block"></div>
      <div className="absolute top-full w-max right-0 py-2 text-sm rounded-b-md rounded-l-md lg:rounded-r-md cursor-default hidden md:group-hover:block group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] ">
        <CartProducts />
      </div>
    </div>
  );
};

export default Cart;
