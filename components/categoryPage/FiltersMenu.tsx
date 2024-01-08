"use client";

import React, { useRef } from "react";
import { removeSearchParams, updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";

import PriceInputs from "./PriceInputs";
import FiltersMenuOption from "./FiltersMenuOption";
import FiltersMenuSmall from "./smallScreen/FiltersMenuSmall";

const FiltersMenu = ({
  numOfProducts,
  searchParams,
  categoryFilters,
  productsSpecificationsList,
}: FiltersMenuSmall) => {
  const rerenderPriceInputs = useRef(0);
  const router = useRouter();

  const newCategoryFilters: NewCategoryFiltersProps = {};

  productsSpecificationsList.forEach(
    ({
      specification,
    }: {
      specification: { [key: string]: { value: string } };
    }) => {
      Object.entries(specification).forEach(
        ([key, { value }]: [string, { value: string }]) => {
          if (categoryFilters[key]) {
            const filter = newCategoryFilters[key] || { values: [] };

            const existingOption = filter.values.find(
              (option) => option?.value === value
            );

            if (existingOption) {
              existingOption.amount += 1;
            } else {
              filter.values.push({ value, amount: 1 });
            }
            if (categoryFilters[key].min && categoryFilters[key].max) {
              filter.min = categoryFilters[key].min;
              filter.max = categoryFilters[key].max;
            }
            filter.type = categoryFilters[key].type;
            newCategoryFilters[key] = filter;
          }
        }
      );
    }
  );

  const updatedCategoryFiltersEntries = Object.entries(newCategoryFilters);

  const handleClearSearchParmas = () => {
    rerenderPriceInputs.current = rerenderPriceInputs.current ? 0 : 1;

    const newPathName = removeSearchParams([
      ...Object.keys(newCategoryFilters),
      "to",
      "from",
    ]);
    router.push(newPathName);
  };

  return (
    <div className="lg:w-[18rem] w-[13.9rem] transition-all duration-1000  border rounded-lg pb-4 border-gray-200">
      <div className="p-4 flex items-end justify-between">
        <span className=" text-2xl font-semibold ">Filters</span>
        <span
          className="text-gray-400 text-[11px] cursor-pointer"
          onClick={handleClearSearchParmas}
        >
          Clear all
        </span>
      </div>
      <div className="px-4 mb-3">
        <FiltersMenuSmall
          numOfProducts={numOfProducts}
          searchParams={searchParams}
          categoryFilters={categoryFilters}
          productsSpecificationsList={productsSpecificationsList}
        >
          <button
            type="button"
            className="bg-gray-200/60 w-full rounded-md text-gray-500 text-[16px] font-[400] p-1  cursor-pointer"
          >
            Show all filters
          </button>
        </FiltersMenuSmall>
      </div>
      <div className="px-4">
        <p>
          <strong className="capitalize">Price</strong>
        </p>
        <PriceInputs
          searchParams={searchParams}
          key={rerenderPriceInputs.current}
        />
      </div>
      {updatedCategoryFiltersEntries.splice(0, 7).map((filters) => (
        <FiltersMenuOption
          key={filters[0]}
          filters={filters}
          categoryFilters={Object.keys(categoryFilters)}
          searchParams={searchParams}
        />
      ))}

      <div className="px-4 mt-5">
        <FiltersMenuSmall
          numOfProducts={numOfProducts}
          searchParams={searchParams}
          categoryFilters={categoryFilters}
          productsSpecificationsList={productsSpecificationsList}
        >
          <button
            type="button"
            className="bg-gray-200/60 w-full rounded-md text-gray-500 text-[16px] font-[400] p-1  cursor-pointer"
          >
            Show all filters
          </button>
        </FiltersMenuSmall>
      </div>
    </div>
  );
};

export default FiltersMenu;
