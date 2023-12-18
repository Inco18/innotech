import Link from "next/link";
import React from "react";
import HelpButton from "./HelpButton";
import { helpAndContactLinks } from "@/constants";

const Help = () => {
  return (
    <div className="group flex flex-col justify-center items-center md:cursor-pointer relative">
      <HelpButton />
      <div className="bg-white absolute h-[0.65rem] w-full top-[90%] z-[101] cursor-default hidden md:group-hover:block "></div>
      <div className="absolute z-[100] bg-white top-full w-max right-0 lg:left-0 py-2 text-sm rounded-b-md rounded-l-md lg:rounded-r-md cursor-default hidden md:group-hover:block group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] ">
        <div className="flex flex-col">
          {helpAndContactLinks.helpLinks.map((link) => {
            return (
              <Link
                href={link.url}
                className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                key={link.title}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <p className="font-semibold py-2 px-4 text-gray-700">Contact with us</p>
        <div className="flex flex-col">
          {helpAndContactLinks.contactLinks.map((link) => {
            return (
              <Link
                href={link.url}
                className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
                key={link.title}
              >
                <link.icon className="text-xl" />
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Help;
