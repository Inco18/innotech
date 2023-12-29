import React from "react";

import DropdownMenu from "./DropdownMenu";
import PaginationMenu from "./PaginationMenu";
import DisplayMenu from "./DisplayMenu";

type ProductsListMenuProps = {
  sortBy: string;
  displayType: string;
  currentPage: number;
  numOfPages: number;
};

const ProductsListMenu = ({
  currentPage,
  numOfPages,
  sortBy,
  displayType,
}: ProductsListMenuProps) => {
  return (
    <nav className="w-full flex flex-col justify-between">
      <hr />
      <div className="flex w-full">
        <DisplayMenu displayType={displayType} />
        <DropdownMenu sortBy={sortBy} />
        <PaginationMenu currentPage={currentPage} numOfPages={numOfPages} />
      </div>
      <hr />
    </nav>
  );
};

export default ProductsListMenu;
