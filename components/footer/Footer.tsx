"use client";
import { companys, footerLinks } from "@/constants";

import React from "react";
import CompanysList from "./CompanysList";

import Category from "./Category";
import useWindowDimensions from "@/hooks/useWindowSize";

const Footer = () => {
  const { width = 0 } = useWindowDimensions();
  const widthBelowThreshold = width < 1000;

  return (
    <footer className="w-full flex flex-col gap-7 max-w-[110rem]">
      <div
        className={`grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] ${
          widthBelowThreshold ? " flex flex-col" : "grid grid-cols-4 gap-3 "
        }  text-sm  px-10`}
      >
        {footerLinks.map((section) => (
          <Category section={section} width={width} key={section.title} />
        ))}
      </div>
      <CompanysList companys={companys} />
    </footer>
  );
};

export default Footer;
