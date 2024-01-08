import { addRemoveSearchParams } from "@/utils/url";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SubOption = ({
  value,
  amount,
  filterName,
  searchParams,
  categoryFilters,
}: SubOptionProps) => {
  const router = useRouter();

  const filters = searchParams?.[filterName];
  const isChecked = (Array.isArray(filters) ? filters : [filters])?.includes(
    value.replaceAll(" ", "_")
  );

  const handleChange = (alreadyChecked: boolean) => {
    const prepearedValue = value.replaceAll(" ", "_");
    const newPathName = addRemoveSearchParams(
      filterName,
      prepearedValue,
      categoryFilters,
      alreadyChecked
    );
    router.push(newPathName);
  };

  return (
    <li key={value} className="hover:bg-gray-100 px-4 w-full ">
      <label className="w-full flex gap-2  py-[.4rem] items-center relative">
        <div className="relative w-[1.3rem]  h-[1.3rem] p-0 ">
          <input
            type="checkbox"
            className="outline-gray-200 w-[1.3rem] h-[1.3rem]  hidden "
            defaultChecked={isChecked}
            onChange={() => handleChange(isChecked)}
          />

          {isChecked ? (
            <Image
              id="image"
              src={"/checkboxChecked.svg"}
              fill={true}
              alt="checkboxChecked"
              className=" z-[4]  "
            />
          ) : (
            <Image
              id="image"
              src={"/checkboxUnchecked.svg"}
              fill={true}
              alt="checkboxUnchecked"
              className=" z-[3]  "
            />
          )}
        </div>

        <span className="text-gray-800 text-sm">
          {value.replaceAll(/\\"/g, "")}
        </span>
        <span className="text-gray-400">({amount})</span>
      </label>
    </li>
  );
};

export default SubOption;
