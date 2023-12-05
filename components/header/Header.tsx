import React from "react";
import Image from "next/image";
import Search from "./Search";
import Help from "./Help";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-screen-2xl flex justify-center items-center gap-4 p-1 ">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={"/logo.png"} height={75} width={75} alt="logo" />
        <h1 className="font-semibold text-xl">InnoTech</h1>
      </Link>
      <Search />
      <Help />
    </header>
  );
};

export default Header;
