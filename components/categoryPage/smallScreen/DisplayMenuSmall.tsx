"use client";
import { categoryDisplayOptions } from "@/constants";
import { updateSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import React from "react";

const DisplayMenuSmall = ({ displayType }: { displayType: string }) => {
  const router = useRouter();

  const selectedOptionId = categoryDisplayOptions.findIndex(
    (option) => option.query === displayType
  );
  const selectedOption = categoryDisplayOptions[selectedOptionId];

  const Icon = selectedOption?.icon;
  const DefaultIcon = categoryDisplayOptions[0].icon;

  const handelDisplay = () => {
    const optionsListLength = categoryDisplayOptions.length;

    const nextOptionId =
      selectedOptionId < optionsListLength - 1 ? selectedOptionId + 1 : 0;

    const nextOption = categoryDisplayOptions[nextOptionId].query;

    const updatedUrl = updateSearchParams("display_type", nextOption);

    router.push(updatedUrl);
  };

  return (
    <button
      className="md:hidden flex items-center justify-center border-x p-4 px-5 border-gray-200"
      onClick={handelDisplay}
    >
      <span
        className="text-2xl  text-center text-gray-600"
        title={selectedOption?.label}
      >
        {Icon ? <Icon /> : <DefaultIcon />}
      </span>
    </button>
  );
};

export default DisplayMenuSmall;
