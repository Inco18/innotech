"use client";

import Link from "next/link";
import React from "react";
import { PiHeadset } from "react-icons/pi";

const HelpButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <Link
      href={"/help"}
      className="p-1 flex flex-col items-center rounded-t-md group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]"
      onClick={handleClick}
    >
      <PiHeadset className="text-2xl" />
      <p className="text-xs">Help and contact</p>
    </Link>
  );
};

export default HelpButton;
