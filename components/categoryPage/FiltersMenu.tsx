"use client";

import React, { useRef } from "react";
import { removeSearchParams, updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";

import PriceInputs from "./PriceInputs";
import FiltersMenuOption from "./FiltersMenuOption";

const FiltersMenu = ({
  searchParams,
  categoryFilters,
  productsSpecificationsList,
}: Props) => {
  const renenderPriceInputs = useRef(0);
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
    renenderPriceInputs.current = renenderPriceInputs.current ? 0 : 1;

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
      <div className="px-4">
        <p>
          <strong className="capitalize">Price</strong>
        </p>
        <PriceInputs
          searchParams={searchParams}
          key={renenderPriceInputs.current}
        />
      </div>
      {updatedCategoryFiltersEntries.map((filters) => (
        <FiltersMenuOption
          key={filters[0]}
          filters={filters}
          categoryFilters={Object.keys(categoryFilters)}
          searchParams={searchParams}
        />
      ))}
    </div>
  );
};

export default FiltersMenu;
