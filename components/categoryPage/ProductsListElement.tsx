"use client";

import { formatSpecificationName } from "@/utils/formatters";

import Image from "next/image";
import React from "react";
import Rating from "../productPage/Rating";
import { BsCartPlus } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { categoryDisplayOptions } from "@/constants";
import TileElement from "./displayTypes/TileElement";
import DetailedElement from "./displayTypes/DetailedElement";
import SimplifiedElement from "./displayTypes/SimplifiedElement";

interface ProductListElement extends CategoryProductProps {
  display_type: string;
}

const ProductListElement = ({ display_type, ...props }: ProductListElement) => {
  switch (display_type) {
    case categoryDisplayOptions[1].query:
      return <DetailedElement {...props} />;
    case categoryDisplayOptions[2].query:
      return <SimplifiedElement {...props} />;
    default:
      return <TileElement {...props} />;
  }
};

export default ProductListElement;
