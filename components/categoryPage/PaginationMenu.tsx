"use client";

import { updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type ProductsListMenuProps = {
  currentPage: number;
  numOfPages: number;
  styles?: string;
};

const PaginationMenu = ({
  currentPage,
  numOfPages,
  styles,
}: ProductsListMenuProps) => {
  const router = useRouter();

  const handlePagination = (page: number) => {
    if (isNaN(page)) return;

    const validPage = Math.min(Math.max(page, 1), numOfPages);

    const updatedUrl = updateSearchParams("page", `${validPage}`);

    router.push(updatedUrl);
  };

  return (
    <div className={` text-xl p-4 gap-2  ${styles}`}>
      <button
        className={`text-[1.7rem] h-8 w-8 rounded-md flex justify-center items-center  ${
          currentPage < 2
            ? "bg-gray-100 text-slate-400 cursor-not-allowed"
            : "bg-gray-200 text-slate-500 hover:bg-gray-300"
        }`}
        disabled={currentPage < 2}
        onClick={() => handlePagination(currentPage - 1)}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div className="flex gap-2">
        <input
          className=" border border-gray-300 rounded-lg shadow-sm h-8 text-center text-lg block focus:outline-none"
          type="number"
          defaultValue={currentPage}
          min={1}
          max={numOfPages}
          onBlur={(e) => handlePagination(+e.target.value)}
          key={crypto.randomUUID()}
        />
      </div>
      <span className=" text-base text-gray-400 self-center whitespace-nowrap">
        z {numOfPages}
      </span>
      <button
        className={`text-[1.7rem] rounded-md h-8 w-8 flex justify-center items-center ${
          currentPage >= numOfPages
            ? "bg-gray-100 text-slate-400 cursor-not-allowed"
            : "bg-gray-200 text-slate-500 hover:bg-gray-300"
        }`}
        disabled={currentPage >= numOfPages}
        onClick={() => handlePagination(currentPage + 1)}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default PaginationMenu;
