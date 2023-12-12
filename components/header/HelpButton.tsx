"use client";

import useWindowDimensions from "@/hooks/useWindowSize";
import Link from "next/link";
import React, { useState } from "react";
import { PiHeadset } from "react-icons/pi";
import HelpModal from "./HelpModal";

const HelpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (width! > 768) return;
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <Link
        href={"/help"}
        className="p-1 flex flex-col w-fit items-center rounded-md md:rounded-t-md hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] md:group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]"
        onClick={handleClick}
      >
        <PiHeadset className="text-2xl" />
        <p className="text-xs">Help and contact</p>
      </Link>
      <HelpModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HelpButton;
