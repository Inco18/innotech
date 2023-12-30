import {
  CATEGORY_MENU_DEFAULT_VALUES,
  categoryDisplayOptions,
  categoryFilterOptions,
  CATEGORY_MENU_DEFAULT_VALUES as defaultValues,
  PAGE_SIZE,
} from "@/constants";
import { supabase } from "@/utils/supabase";
import React from "react";
import ProductListElement from "./ProductsListElement";
import { notFound } from "next/navigation";

//Max 30 items for page

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    page?: number;
    sort_by?: string;
    display_type?: string;
  };
};

const sortProducts = ({
  products,
  sort_by,
}: {
  products: CategoryProductProps[];
  sort_by: string;
}) => {
  switch (sort_by) {
    case categoryFilterOptions[1].query: //rating_desc
      return products.sort((a, b) => b.rating - a.rating);
    case categoryFilterOptions[2].query: //price_asc
      return products.sort((a, b) => a.price - b.price);
    case categoryFilterOptions[3].query: //price_desc
      return products.sort((a, b) => b.price - a.price);
    default:
      return products.sort((a, b) => b.quantity_sold - a.quantity_sold); //popularity_desc
  }
};

const ProductsList = async ({ params, searchParams }: Props) => {
  const categoryId = params.categoryId.split("-");
  const categoryIdNumber = +categoryId[0];

  const {
    page = defaultValues.page,
    sort_by = defaultValues.sortBy,
    display_type = defaultValues.displayType,
  } = searchParams;

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select(
      `id,name,price,specification,sale_price,images,rating,quantity_sold`
    )
    .eq("category", categoryIdNumber)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  if (!products || !products[0]) notFound();

  const selectedDisplayType =
    categoryDisplayOptions.find((option) => option.query === display_type)
      ?.query || CATEGORY_MENU_DEFAULT_VALUES.displayType;

  const sortedProducts = sortProducts({ products, sort_by });

  const tile_view =
    selectedDisplayType === categoryDisplayOptions[0].query &&
    `grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]`;
  const detailed_list_view =
    selectedDisplayType === categoryDisplayOptions[1].query && `flex flex-col`;
  const simplified_list_view =
    selectedDisplayType === categoryDisplayOptions[2].query &&
    `grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] sm:flex sm:flex-col `;

  const displayType = tile_view || detailed_list_view || simplified_list_view;

  return (
    <div className={`grid ${displayType}`}>
      {sortedProducts?.map((product) => (
        <ProductListElement
          {...product}
          display_type={selectedDisplayType}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default ProductsList;
