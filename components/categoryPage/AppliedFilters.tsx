"use client";
import { ALLOWED_SEARCH_PARAMS } from "@/constants";
import { addRemoveSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const AppliedFilters = ({
  searchParams,
  categoryFilters,
}: {
  searchParams: { [key: string]: any };
  categoryFilters: any | undefined;
}) => {
  const router = useRouter();
  const nomalizedSearchParams = Object.entries(searchParams)
    .filter(([param, _]) => Object.keys(categoryFilters).includes(param))
    .map(([param, values]) => {
      return Array.isArray(values) ? [param, values] : [param, [values]];
    }) as [string, string[]][];

  const handleRemoveParam = (param: string, value: string) => {
    const newPathName = addRemoveSearchParams(
      param,
      value,
      Object.keys(categoryFilters),
      true
    );
    router.push(newPathName);
  };

  return (
    <div className="flex gap-2 flex-wrap items-center">
      {nomalizedSearchParams.map(([param, values]) => (
        <>
          <div
            className=" capitalize text-[15px] font-medium pl-2 first:pl-0"
            key={param}
          >
            {param.replaceAll("_", " ")}:{" "}
          </div>
          {values.map((value) => (
            <button
              className=" border p-1 text-[12px] text-gray-400 rounded-md flex items-center justify-between gap-2 w-max hover:line-through transition-all"
              key={value}
              onClick={() => {
                handleRemoveParam(param, `${value}`);
              }}
            >
              {value.replaceAll("_", " ")}
              <span>
                <RxCross2 />
              </span>
            </button>
          ))}
        </>
      ))}
    </div>
  );
};

export default AppliedFilters;
