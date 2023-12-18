import React from "react";
import CategoryMenu from "./CategoryMenu";

type CategoryProps = {
  title: string;
  icon: React.ComponentType;
  subcategories?: subcategoriesProps;
  menuPostion: "left" | "right";
  onHover: (setOpen: boolean) => void;
};

const Category: React.FC<CategoryProps> = ({
  title,
  icon: Icon,
  menuPostion,
  subcategories,
  onHover,
}) => {
  return (
    <li
      className=" relative z-[90] flex items-center gap-3 last:text-pink-500 p-2 group hover:bg-white hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)] hover: rounded-t-lg    cursor-default"
      onMouseOver={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <p className=" text-2xl hidden font-thin xl:block">
        <Icon />
      </p>

      <p className="text-sm w-min ">{title}</p>

      <div className="bg-white absolute h-[0.65rem] w-full left-0 top-[90%] z-40 cursor-default hidden md:group-hover:block"></div>

      <div
        className={`absolute bg-white top-full w-max ${
          menuPostion === "left" ? "left-0" : "right-0"
        } py-2 text-sm rounded-b-md rounded-l-md lg:rounded-r-md cursor-default hidden md:group-hover:block group-hover:shadow-[0_0_5px_0px_rgba(0,0,0,0.2)]`}
      >
        <CategoryMenu subcategories={subcategories} />
      </div>
    </li>
  );
};

export default Category;
