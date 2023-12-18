"use client";

import React, { useState } from "react";
import { PiDotsNine } from "react-icons/pi";
import NavbarSmallScreenModal from "./NavbarSmallScreenModal";

const NavbarSmallScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer lg:hidden"
        onClick={() => setIsOpen(true)}
      >
        <PiDotsNine className=" md:text-[2.5rem] text-[2rem]" />
        <p className=" text-[10px] md:text-[12px]">Menu</p>
      </div>

      <NavbarSmallScreenModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};

export default NavbarSmallScreenMenu;
