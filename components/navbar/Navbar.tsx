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
      <nav className="bg-gray-50 shadow-md w-full grid grid-rows-[0] overflow-hidden  lg:grid-rows-[3.6rem] lg:overflow-visible  transition-all duration-200 ease-in-out justify-center">
        <ul
          className=" flex justify-center max-w-[110rem] relative z-[80] pt-1"
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
      <NavbarModal isOpen={isOpen} top={ulBottom} />
    </>
  );
};

export default Navbar;
