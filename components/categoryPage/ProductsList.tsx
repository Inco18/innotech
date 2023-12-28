import { PAGE_SIZE } from "@/constants";
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
  };
};

const ProductsList = async ({ params, searchParams }: Props) => {
  const categoryId = params.categoryId.split("-");
  const categoryIdNumber = +categoryId[0];

  const { page = 1, sort_by = "popularity_desc" } = searchParams;

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select(`id,name,price,specification,sale_price`)
    .eq("category", categoryIdNumber)
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);
  if (!products || !products[0]) notFound();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-4 w-[60vw]">
      {products?.map((product) => (
        <ProductListElement key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
