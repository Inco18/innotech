import Link from "next/link";
import React from "react";

const CategoryLink = ({ title, url }: { title: string; url: string }) => {
  return (
    <li>
      <Link key={title} href={url} className=" block hover:underline">
        {title}
      </Link>
    </li>
  );
};

export default CategoryLink;
