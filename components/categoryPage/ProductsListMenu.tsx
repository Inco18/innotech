"use client";
import React, { Children } from "react";

import SortMenu from "./SortMenu";
import PaginationMenu from "./PaginationMenu";
import DisplayMenu from "./DisplayMenu";

import FiltersMenuSmall from "./smallScreen/FiltersMenuSmall";
import DisplayMenuSmall from "./smallScreen/DisplayMenuSmall";
import SortMenuSmall from "./smallScreen/SortMenuSmall";

import useWindowDimensions from "@/hooks/useWindowSize";

type ProductsListMenuProps = {
  sortBy: string;
  displayType: string;
  currentPage: number;
  pageSize: number;
  numOfPages: number;
  numOfProducts: number;
  children: JSX.Element;
};

const ProductsListMenu = ({
  currentPage,
  numOfPages,
  numOfProducts,
  pageSize,
  sortBy,
  displayType,
  children,
}: ProductsListMenuProps) => {
  const { width } = useWindowDimensions();

  const info = `${(currentPage - 1) * pageSize + 1} -${
    currentPage * pageSize > pageSize ? numOfProducts : currentPage * pageSize
  } z ${numOfProducts}`;

  return (
    <>
      <div>
        <nav className="w-full flex flex-col  justify-between">
          <hr />
          <div className=" w-full flex">
            <div className="flex md:hidden w-full">
              <DisplayMenuSmall displayType={displayType} />
              <FiltersMenuSmall />
              <SortMenuSmall
                defaultSortBy={sortBy}
                defaultPageSize={pageSize}
              />
            </div>
            <DisplayMenu displayType={displayType} />
            <SortMenu styles="hidden md:flex" sortBy={sortBy} />
            <PaginationMenu
              currentPage={currentPage}
              numOfPages={numOfPages}
              styles="hidden sm:flex border-r border-gray-300 md:border-r-[0] lg:px-4"
            />
          </div>
          <div className="flex md:hidden"></div>
          <hr />
        </nav>
        <main>{children}</main>
        <footer className=" w-full flex flex-col  sm:hidden">
          <hr />
          <div className="items-center flex pt-5 flex-col w-full">
            <div
              className={` gap-2 items-center flex ${
                width === 260 ? "hidden" : "flex"
              }`}
            >
              <SortMenu sortBy={sortBy} styles="" />
              <span className="text-gray-500 text-sm">{info}</span>
            </div>
            <PaginationMenu
              currentPage={currentPage}
              numOfPages={numOfPages}
              styles="flex"
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProductsListMenu;
