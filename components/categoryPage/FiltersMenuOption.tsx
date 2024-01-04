import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import SubOption from "./SubOption";
import { NUM_OF_CATEGORY_MENU } from "@/constants";
import { addRemoveSearchParams, removeSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";

const FiltersMenuOption = ({
  filters,
  searchParams,
  categoryFilters,
}: FilterMenuOptionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenList, setIsOpenList] = useState(false);
  const [key, { values = [], type, min = 0, max = 0 }] = filters;
  const router = useRouter();

  const activeFilters = searchParams[key]
    ? Array.isArray(searchParams[key])
      ? searchParams[key].length
      : 1
    : 0;

  const handleAddAll = () => {
    const prepearedValue = values.map((value) =>
      value.value.replaceAll(" ", "_")
    );

    const newPathName = addRemoveSearchParams(
      key,
      prepearedValue,
      categoryFilters,
      false
    );
    router.push(newPathName);
  };
  const handleRemoveAll = () => {
    const newPathName = removeSearchParams([key]);
    router.push(newPathName);
  };

  const checkListLength = values.length - NUM_OF_CATEGORY_MENU || 0;

  return (
    <div className="">
      <div className="py-2 px-4">
        <div className=" relative" onClick={() => setIsOpen((cur) => !cur)}>
          <p className=" cursor-pointer">
            <strong className="capitalize">{key.replaceAll("_", " ")}</strong>
          </p>

          <div
            className={`  absolute right-0 top-0  z-10 text-gray-400 text-lg   rounded-md  transition-transform duration-[400ms] ease-in-out transform ${
              isOpen ? "rotate-0" : "rotate-[-180deg]"
            }`}
          >
            <FaChevronUp />
          </div>
        </div>
        {activeFilters ? (
          <p
            className="text-[12px] text-gray-500 cursor-pointer inline-block"
            onClick={handleRemoveAll}
          >
            Clear ({activeFilters})
          </p>
        ) : (
          <p
            className="text-[12px] text-gray-500 cursor-pointer inline-block"
            onClick={handleAddAll}
          >
            Select all
          </p>
        )}
      </div>

      <div
        className={`grid list-none transition-all duration-[400ms] ease-in-out  grid-rows-[0fr] ${
          isOpen && ` grid-rows-[1fr]`
        }`}
      >
        <ul className="h-full overflow-hidden">
          {values
            .sort((a, b) => a.value.localeCompare(b.value))
            .slice(0, isOpenList ? values.length : NUM_OF_CATEGORY_MENU)
            .map(({ value, amount }) => (
              <SubOption
                filterName={key}
                value={value}
                amount={amount}
                key={value}
                searchParams={searchParams}
                categoryFilters={categoryFilters}
              />
            ))}
        </ul>

        {isOpen && checkListLength > 0 && (
          <div
            className="flex items-center justify-start px-4 gap-2 font-light text-sm w-max cursor-pointer"
            onClick={() => setIsOpenList((cur) => !cur)}
          >
            {isOpenList ? (
              <>
                <FiMinus className="font-thin text-[1.3rem]" />
                <span>Mniej</span>
              </>
            ) : (
              <>
                <FiPlus className="font-thin text-[1.3rem]" />
                <span>Więcej ({checkListLength - NUM_OF_CATEGORY_MENU})</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default FiltersMenuOption;
