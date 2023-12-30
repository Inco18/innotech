import { categoryElementMenu } from "@/constants";
import React from "react";

const ElementMenu = () => {
  return categoryElementMenu.map(({ icon: Icon, label, color }) => (
    <button
      className={` rounded-lg h-[2.6rem] w-[2.6rem]  bg-white text-gray-500  text-xl flex justify-center items-center transition-colors duration-300  ${
        color
          ? `border rounded-lg  border-${color} text-${color} hover:bg-${color} hover:text-white`
          : "hover:bg-gray-100"
      }`}
      title={label}
      key={label}
    >
      <Icon />
    </button>
  ));
};

export default ElementMenu;
