import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "404 - not found - InnoTech",
};

const NotFound = () => {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-2 items-center mb-10 lg:px-5 xl:px-32 px-0 max-w-[110rem] py-5">
      <div className="flex justify-center">
        <Image src={"/notFound.svg"} height={350} width={350} alt="" />
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-sm text-gray-500">Error 404</p>
        <h1 className="text-3xl font-semibold my-5">
          <span className="text-blue-500">Oops!</span> Page not found
        </h1>
        <Link
          href={"/"}
          className="bg-blue-500 text-white p-2 px-5 rounded-full text-base hover:bg-blue-600 flex items-center justify-center gap-1"
        >
          <FaChevronLeft /> Go to home page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
