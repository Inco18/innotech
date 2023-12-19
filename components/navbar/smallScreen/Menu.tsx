"use client";

import React, { useState } from "react";
import { PiDotsNine } from "react-icons/pi";
import Modal from "./Modal";

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

      <Modal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        // key={crypto.randomUUID()}
      />
    </>
  );
};

export default NavbarSmallScreenMenu;
