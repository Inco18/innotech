"use client";

import useWindowDimensions from "@/hooks/useWindowSize";
import Link from "next/link";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import CartModal from "./CartModal";

const CartButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (width > 768) return;
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Link
        href={"/cart"}
        className="p-1 px-5 ml-auto flex flex-col w-fit items-center rounded-md md:rounded-t-md hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] md:group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]"
        onClick={handleClick}
      >
        <IoCartOutline className="text-2xl" />
        <p className="text-xs">Cart</p>
      </Link>
      <CartModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CartButton;
