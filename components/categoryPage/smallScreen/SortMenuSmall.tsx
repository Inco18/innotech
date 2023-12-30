import React from "react";

const SortMenuSmall = ({ sortBy }: { sortBy: string }) => {
  return (
    <button className=" md:hidden  flex items-center justify-center  border-r border-gray-200 font-medium cursor-pointer w-full ">
      <div className=" flex flex-col">
        <span className=" font-semibold text-[15px]">Sortowanie</span>
        <span>
          <span className=" font-light text-gray-400 text-[13px]">
            Od napopularnieszych
          </span>
        </span>
      </div>
    </button>
  );
};

export default SortMenuSmall;
