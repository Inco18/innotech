import {
  formatSpecificationName,
  formatspecificationValue,
} from "@/utils/formatters";
import React from "react";

type Props = {
  specification: {};
};

const Specification = ({ specification }: Props) => {
  const specificationEntries: specificationEntriesType =
    Object.entries(specification);
  const specificationSorted = specificationEntries.sort((a, b) => {
    return a[1].index - b[1].index;
  });
  return (
    <div id="specification" className="scroll-m-16 pb-8">
      <h2 className="text-2xl font-medium pb-4 pt-2">Specification</h2>
      <div className="">
        {specificationSorted.map((spec) => {
          return (
            <div
              key={spec[0]}
              className="grid grid-cols-[7.5rem_auto] gap-x-2  md:grid-cols-[15rem_auto] lg:grid-cols-[20rem_auto] pl-[5%] sm:pl-[10%] md:pl-[15%] lg:pl-[20%] 2xl:pl-[30%] odd:bg-gray-100 py-2 border-t-2 text-sm last:border-b-2 hover:bg-gray-200"
            >
              <p className="font-medium">{formatSpecificationName(spec[0])}</p>
              <p className="whitespace-pre-line">
                {formatspecificationValue(spec[1].value)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Specification;
