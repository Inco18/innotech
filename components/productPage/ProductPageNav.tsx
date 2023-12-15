"use client";

import Link from "next/link";
import React from "react";
import { PiCaretCircleDoubleUpLight } from "react-icons/pi";

type Props = {};

const ProductPageNav = (props: Props) => {
  return (
    <div className="sticky top-0 border-y-2 border-gray-200 w-full flex justify-center shadow-sm py-3 bg-white z-50">
      <div className="w-full max-w-[110rem] lg:px-16 xl:px-32 px-2 text-gray-700 text-sm flex items-center gap-8">
        <PiCaretCircleDoubleUpLight
          className="text-2xl hover:text-black cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <Link href={"#description"} className="hover:text-black">
          Description
        </Link>
        <Link href={"#specification"} className="hover:text-black">
          Specification
        </Link>
        <Link href={"#opinions"} className="hover:text-black">
          Opinions
        </Link>
      </div>
    </div>
  );
};

export default ProductPageNav;
