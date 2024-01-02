import { removeSearchParams, updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";

const PriceInputs = ({
  searchParams,
}: {
  searchParams: {
    [key: string]: any;
  };
}) => {
  const isValidValue = (value: number) => !isNaN(value) && value >= 0;
  const checkedFrom =
    isValidValue(searchParams["from"]) &&
    (isValidValue(searchParams["to"])
      ? searchParams["from"] <= searchParams["to"]
      : true)
      ? searchParams["from"]
      : 0;

  const checkedTo =
    isValidValue(searchParams["to"]) &&
    (isValidValue(searchParams["from"])
      ? searchParams["to"] >= searchParams["from"]
      : true)
      ? searchParams["to"]
      : 0;

  const [priceRange, setPriceRange] = useState<{
    from: number;
    to: number;
    valid: boolean;
  }>({
    from: checkedFrom,
    to: checkedTo,
    valid: true,
  });

  const router = useRouter();

  const handleSetPriceParams = (
    type: string,
    value: number,
    isValid: boolean
  ) => {
    if (!isValid) return;
    if (value === 0) {
      const clearPathName = removeSearchParams([type]);
      router.push(clearPathName);
    } else {
      const newPathName = updateSearchParams(type, `${value}`);
      router.push(newPathName);
    }
  };

  const handleChange = (value: number, key: "to" | "from") => {
    if (isNaN(value) || value < 0) return;

    setPriceRange((prev) => {
      const updatedState = { ...prev, [key]: value };
      const valid =
        updatedState.from <= updatedState.to ||
        updatedState.from === 0 ||
        updatedState.to === 0;

      return { ...updatedState, valid };
    });
  };
  const hadleClearSearchParams = () => {
    setPriceRange({ from: 0, to: 0, valid: true });
    const clearPathName = removeSearchParams(["to", "from"]);
    router.push(clearPathName);
  };

  const { from, to, valid } = priceRange;

  return (
    <>
      {(from !== 0 || to !== 0) && (
        <p
          className="text-[12px] text-gray-500 cursor-pointer inline-block"
          onClick={hadleClearSearchParams}
        >
          Wyczyść wszystkie
        </p>
      )}
      <div className="flex py-2 justify-center w-full">
        <div className="flex items-center">
          <input
            className={`w-[6rem] lg:w-[7rem] rounded-md p-1 text-center border ${
              valid ? "border-gray-300" : "border-red-500"
            }`}
            placeholder="od"
            type="text"
            min={0}
            value={from || ""}
            inputMode="numeric"
            onChange={(e) => handleChange(+e.target.value, "from")}
            onBlur={() => handleSetPriceParams("from", from, valid)}
          />
          <FiMinus className="text-gray-400" />
          <input
            className={`w-[6rem] lg:w-[7rem] rounded-md p-1 text-center border  ${
              valid ? "border-gray-300" : "border-red-500"
            }`}
            placeholder="do"
            type="text"
            min={0}
            value={to || ""}
            inputMode="numeric"
            onChange={(e) => handleChange(+e.target.value, "to")}
            onBlur={() => handleSetPriceParams("to", to, valid)}
          />
        </div>
      </div>
    </>
  );
};

export default PriceInputs;
