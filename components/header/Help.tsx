import Link from "next/link";
import React from "react";
import { PiHeadset } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import HelpButton from "./HelpButton";

const Help = () => {
  return (
    <div className="group flex flex-col justify-center items-center cursor-pointer relative">
      <HelpButton />
      <div className="bg-white absolute h-[0.65rem] w-full top-[90%] z-50 cursor-default hidden group-hover:block"></div>
      <div className="absolute top-full w-max left-0 py-2 text-sm rounded-b-md rounded-r-md cursor-default hidden group-hover:block group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] ">
        <div className="flex flex-col">
          <Link
            href={"/delivery-status"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            Delivery status
          </Link>

          <Link
            href={"/delivery"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            Delivery
          </Link>

          <Link
            href={"/installment"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            Installment
          </Link>

          <Link
            href={"/leasing"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            Leasing
          </Link>

          <Link
            href={"/insurance"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            Insurance
          </Link>

          <Link
            href={"/returns-and-complaints"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            Returns and complaints
          </Link>

          <Link
            href={"/faq"}
            className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            FAQ
          </Link>
        </div>
        <p className="font-semibold py-2 px-4 text-gray-700">Contact with us</p>
        <div className="flex flex-col">
          <Link
            href={"/contact"}
            className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            <PiHeadset className="text-xl" />
            Contact
          </Link>
          <Link
            href={"mailto:innotech@innotech.com"}
            className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            <MdOutlineEmail className="text-xl" />
            innotech@innotech.com
          </Link>
          <Link
            href={"tel:123456789"}
            className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
          >
            <PiPhone className="text-xl" />
            123 456 789
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Help;
