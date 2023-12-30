"use client";

import React, { Fragment } from "react";

import { categoryDisplayOptions } from "@/constants";
import TileElement from "./displayTypes/TileElement";
import DetailedElement from "./displayTypes/DetailedElement";
import SimplifiedElement from "./displayTypes/SimplifiedElement";
import { useRouter } from "next/navigation";

interface ProductListElement extends CategoryProductProps {
  display_type: string;
}

const ProductListElement: React.FC<ProductListElement> = ({
  display_type,
  ...props
}) => {
  const { id } = props;
  const router = useRouter();

  const getDisplayComponent = () => {
    switch (display_type) {
      case categoryDisplayOptions[1].query:
        return <DetailedElement {...props} />;
      case categoryDisplayOptions[2].query:
        return <SimplifiedElement {...props} />;
      default:
        return <TileElement {...props} />;
    }
  };

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return <div onClick={handleClick}>{getDisplayComponent()}</div>;
};

export default ProductListElement;
