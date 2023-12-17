import Link from "next/link";

import React from "react";
import { FaAngleRight } from "react-icons/fa";

const SubcategoryLink = ({ id, name }: { id: number; name: string }) => {
  return (
    <Link
      href={`/${id}-${name}`}
      className="flex justify-between items-center p-2 hover:bg-gray-100"
    >
      <span className=" pr-8"> {name}</span> <FaAngleRight />
    </Link>
  );
};

export default SubcategoryLink;
