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

  const Icon = categoryDisplayOptions.find(
    (option) => option.query === displayType
  )?.icon;
  const DefaultIcon = categoryDisplayOptions[0].icon;

  return (
    <div
      className={`w-[4rem] flex items-center px-2 gap-1 relative self-center border border-gray-300  shadow-sm h-8 cursor-pointer mr-auto  ${
        isOpen ? "rounded-t-lg" : "rounded-lg"
      }`}
      onClick={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="text-2xl  text-center text-gray-300">
        {Icon ? <Icon /> : <DefaultIcon />}
      </span>
      {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}

      <div
        className={`z-10  bg-white text-2xl text-gray-100  shadow-sm absolute top-[100%] -right-[1px] -left-[1px] border border-gray-300 rounded-b-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" text-gray-700 ">
          {categoryDisplayOptions.map(
            ({ label, query, icon: IconOption }, index) => (
              <li
                className={`px-2 block hover:bg-gray-100 py-1`}
                key={label}
                onClick={() => {
                  handelDisplay(query);
                }}
              >
                <IconOption
                  className={` text-gray-300  ${
                    (displayType === query || (!Icon && index === 0)) &&
                    " text-gray-600"
                  }`}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default DisplayMenu;
