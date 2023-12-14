"use client";
import { companys, footerLinks } from "@/constants";

import React from "react";
import CompanysList from "./CompanysList";

import Category from "./Category";
import useWindowDimensions from "@/hooks/useWindowSize";

const Footer = () => {
  const { width = 0 } = useWindowDimensions();
  const widthBelowThreshold = width < 1000;
  // grid-cols-[repeat(auto-fit,minmax(200px,_1fr))]
  return (
    <footer className="w-full flex flex-col gap-7">
      <div
        className={` ${
          widthBelowThreshold ? " flex flex-col" : "grid grid-cols-4 gap-3 "
        }  text-sm  px-10`}
      >
        {widthBelowThreshold && <hr className="border-b my-5 " />}
        {footerLinks.map((section) => (
          <>
            <Category section={section} width={width} key={section.title} />
            {widthBelowThreshold && <hr className="border-b my-5 " />}
          </>
        ))}
      </div>
      <CompanysList companys={companys} />
    </footer>
  );
};

export default Footer;
