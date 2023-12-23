import React from "react";
import Image from "next/image";
import { BsBoxSeam } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

const Unbox = () => {
  return (
    <div className="border-2 border-purple-100 p-10 flex flex-col items-center unboxBackground rounded-lg relative">
      <Image
        src={"/unboxBg.svg"}
        width={150}
        height={150}
        alt=""
        className="absolute left-0 top-0 h-[150px] w-[150px]"
      />
      <Image
        src={"/unboxBg.svg"}
        width={150}
        height={150}
        alt=""
        className="absolute right-0 top-0 rotate-90 h-[150px] w-[150px]"
      />
      <Image
        src={"/unboxBg.svg"}
        width={150}
        height={150}
        alt=""
        className="absolute bottom-0 left-0 rotate-[270deg]  h-[150px] w-[150px]"
      />
      <Image
        src={"/unboxBg.svg"}
        width={150}
        height={150}
        alt=""
        className="absolute bottom-0 right-0 rotate-180 h-[150px] w-[150px]"
      />
      <div className="flex items-center gap-2 text-lg mb-10 ">
        <BsBoxSeam />
        un.Box
      </div>
      <Image
        src={"/unbox.png"}
        width={506}
        height={278}
        alt="unbox"
        className="max-w-xs w-full"
      />
      <h2 className="text-xl font-medium text-center">
        Draw 3 discounts every day
      </h2>
      <p className="text-center px-5 mb-10 mt-2">
        In the boxes you will find products for even 1 zł
      </p>
      <Link
        href={"/unbox"}
        className="bg-blue-500 text-white p-3 w-full max-w-sm flex gap-3 items-center justify-center rounded-lg z-10 hover:bg-blue-600 transition-colors"
      >
        Draw discounts
        <FaChevronRight />
      </Link>
    </div>
  );
};

export default Unbox;
