import React from "react";
import SubcategoryLink from "./SubcategoryLink";

const CategoryMenu = ({
  subcategories,
}: {
  subcategories?: subcategoriesProps;
}) => {
  return (
    <div className=" list-none flex flex-col ">
      {subcategories?.map(({ id, name }) => (
        <SubcategoryLink key={id} id={id} name={name} />
      ))}
    </div>
  );
};

export default CategoryMenu;
