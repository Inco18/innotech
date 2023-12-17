"use client";
import { navigationBarCategories } from "@/constants";
import React, { useRef, useState } from "react";
import Category from "./Category";
import NavbarModal from "./NavbarModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ulRef = useRef<HTMLUListElement | null>(null);

  const handleHover = (setOpen: boolean) => {
    setIsOpen(setOpen);
  };

  const ulBottom = ulRef.current?.getBoundingClientRect().bottom || 0;

  return (
    <>
      <nav className=" bg-gray-50 shadow-md w-full pt-1">
        <ul
          className=" flex justify-center gap-3 max-w-[110rem] relative z-[80]"
          ref={ulRef}
        >
          {navigationBarCategories.map((category, index) => (
            <Category
              key={category.category}
              title={category.category}
              icon={category.icon}
              subcategories={category.subcategories}
              menuPostion={
                Math.floor(navigationBarCategories.length / 2) > index
                  ? "left"
                  : "right"
              }
              onHover={handleHover}
            />
          ))}
        </ul>
      </nav>
      <NavbarModal isOpen={isOpen} top={ulBottom} key={crypto.randomUUID()} />
    </>
  );
};

export default Navbar;
