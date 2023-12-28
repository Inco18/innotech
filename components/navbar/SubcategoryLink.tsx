import Link from "next/link";

import React from "react";
import { FaAngleRight } from "react-icons/fa";

const SubcategoryLink = ({ id, name }: { id: number; name: string }) => {
  return (
    <Link
      href={`/category/${id}-${name}`}
      className="flex justify-between items-center p-2 hover:bg-gray-100"
    >
      <span className=" pr-8"> {name}</span>
      <div className=" text-gray-400 ">
        <FaAngleRight />
      </div>
    </Link>
  );
};

export default SubcategoryLink;
