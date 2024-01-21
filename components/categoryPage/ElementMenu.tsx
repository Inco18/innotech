import { categoryElementMenu } from "@/constants";
import { useCartContext } from "@/context/cart-context";
import React from "react";

const ElementMenu = ({ product }: { product: Product }) => {
  const { addProductToCart } = useCartContext();

  const handleClick = (label: string) => (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    const addToCartLabel = categoryElementMenu.at(-1)?.label;
    if (label === addToCartLabel) {
      addProductToCart(product);
    }
  };

  return categoryElementMenu.map(({ icon: Icon, label, color }) => (
    <button
      className={` rounded-lg h-[2.6rem] w-[2.6rem]  bg-white text-gray-500  text-xl flex justify-center items-center transition-colors duration-300  ${
        color
          ? `border rounded-lg  border-${color} text-${color} hover:bg-${color} hover:text-white`
          : "hover:bg-gray-100"
      }`}
      title={label}
      key={label}
      onClick={handleClick(label)}
    >
      <Icon />
    </button>
  ));
};

export default ElementMenu;
