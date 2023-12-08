import React from "react";
import Image from "next/image";
import Search from "./Search";
import Help from "./Help";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full grid grid-cols-2 grid-rows-2 justify-center items-center lg:px-32 md:flex md:justify-center md:items-center md:gap-4 p-1 max-w-[110rem] ">
      <Link href={"/"} className="flex items-center gap-2 order-1 mr-auto">
        <Image
          src={"/logo.png"}
          height={65}
          width={80}
          alt="logo"
          className="w-[48px] h-[39px] md:w-[80px] md:h-[65px]"
        />
        <h1 className="font-semibold text-md md:text-xl">InnoTech</h1>
      </Link>
      <Search />
      <Help />
    </header>
  );
};

export default Header;
