"use client";
import React, { Children } from "react";

import SortMenu from "./SortMenu";
import PaginationMenu from "./PaginationMenu";
import DisplayMenu from "./DisplayMenu";

import FiltersMenuSmall from "./smallScreen/FiltersMenuSmall";
import DisplayMenuSmall from "./smallScreen/DisplayMenuSmall";
import SortMenuSmall from "./smallScreen/SortMenuSmall";

import useWindowDimensions from "@/hooks/useWindowSize";
import { PAGE_SIZE, numberOfResultsPerPage } from "@/constants";

const ProductsListMenu = ({
  numOfProducts,
  sortBy,
  displayType,
  children,
  searchParams,
  categoryFilters,
  productsSpecificationsList,
}: ProductsListMenuProps) => {
  const { width } = useWindowDimensions();
  const { page = 0 } = searchParams;

  const verifiedPageSize = numberOfResultsPerPage.includes(page)
    ? page
    : PAGE_SIZE;

  const numOfPages = Math.ceil(numOfProducts / verifiedPageSize);

  const currentPage = Math.min(Math.max(+page, 1), numOfPages);

  const info = `${(currentPage - 1) * verifiedPageSize + 1} -${
    currentPage * verifiedPageSize > verifiedPageSize
      ? numOfProducts
      : currentPage * verifiedPageSize
  } z ${numOfProducts}`;

  return (
    <>
      <div>
        <nav className="w-full flex flex-col  justify-between">
          <hr />
          <div className=" w-full flex">
            <div className="flex md:hidden w-full">
              <DisplayMenuSmall displayType={displayType} />
              <FiltersMenuSmall
                numOfProducts={numOfProducts}
                searchParams={searchParams}
                categoryFilters={categoryFilters}
                productsSpecificationsList={productsSpecificationsList}
              >
                <button
                  type="button"
                  className=" w-[3rem] flex items-center justify-center px-[3rem] border-r border-gray-200  p-5 font-medium cursor-pointer"
                >
                  Filters
                </button>
              </FiltersMenuSmall>
              <SortMenuSmall
                defaultSortBy={sortBy}
                defaultPageSize={verifiedPageSize}
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
