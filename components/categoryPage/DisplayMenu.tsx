"use client";

import { categoryDisplayOptions } from "@/constants";
import { updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const DisplayMenu = ({ displayType }: { displayType: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handelDisplay = (query: string) => {
    const updatedUrl = updateSearchParams("display_type", query);

    router.push(updatedUrl);
  };

  const selectedOption = categoryDisplayOptions.find(
    (option) => option.query === displayType
  );

  const Icon = selectedOption?.icon;
  const DefaultIcon = categoryDisplayOptions[0].icon;

  return (
    <div
      className={`hidden md:flex w-[4rem] items-center px-2 gap-1 relative self-center border border-gray-300  shadow-sm h-8 cursor-pointer mr-auto  ${
        isOpen ? "rounded-t-lg" : "rounded-lg"
      }`}
      onClick={() => setIsOpen((cur) => !cur)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span
        className="text-2xl  text-center text-gray-300 hover:text-gray-600"
        title={selectedOption?.label}
      >
        {Icon ? <Icon /> : <DefaultIcon />}
      </span>
      {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}

      <div
        className={`z-10  bg-white text-2xl text-gray-100  shadow-sm absolute top-[100%] -right-[1px] -left-[1px] border border-gray-300 rounded-b-lg overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" text-gray-700 ">
          {categoryDisplayOptions.map(({ label, query, icon: IconOption }) => (
            <li
              className={`px-2 block hover:bg-gray-100 py-1 `}
              title={label}
              key={query}
              onClick={() => {
                handelDisplay(query);
              }}
            >
              <IconOption
                className={` text-gray-300  ${
                  (displayType === query ||
                    (!Icon && label === categoryDisplayOptions[0].label)) &&
                  " text-gray-600"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayMenu;
