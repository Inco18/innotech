import React from "react";
import { PiHeadset } from "react-icons/pi";

const Help = () => {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer">
      <PiHeadset className="text-2xl" />
      <p className="text-xs">Help and contact</p>
    </div>
  );
};

export default Help;
