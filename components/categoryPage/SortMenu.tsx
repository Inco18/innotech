"use client";
import { categoryFilterOptions } from "@/constants";
import { updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const SortMenu = ({ sortBy, styles }: { sortBy: string; styles?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handelSort = (query: string) => {
    const updatedUrl = updateSearchParams("sort_by", query);

    router.push(updatedUrl);
  };

  const name = categoryFilterOptions.find(
    (option) => option.query === sortBy
  )?.label;

  return (
    <div
      className={`w-[16rem] flex ${styles} justify-between items-center px-2 relative self-center border border-gray-300  shadow-sm h-8 cursor-pointer  ${
        isOpen ? "rounded-t-lg" : "rounded-lg"
      }`}
      onClick={() => setIsOpen((cur) => !cur)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="text-sm  text-center relative z-10">
        {name || categoryFilterOptions[0].label}
        <span className=" absolute -top-4 left-0 bg-white text-gray-400 text-[13px] z-[10] pr-1">
          Sortowanie
        </span>
        <span className="absolute left-[-3px] -top-4 h-full w-1 bg-white z-[5]" />
      </span>
      {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}

      <div
        className={`z-[12]  bg-white  shadow-sm absolute top-[100%] -right-[1px] -left-[1px] border border-gray-300 rounded-b-lg overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="text-sm text-gray-700 ">
          {categoryFilterOptions.map(({ label, query }, index) => (
            <li
              className={`block px-3 py-2 hover:bg-gray-100  ${
                (sortBy === query || (!name && index === 0)) && " font-semibold"
              }`}
              key={label}
              onClick={() => handelSort(query)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortMenu;
