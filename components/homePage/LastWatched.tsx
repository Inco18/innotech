"use client";
import React, { useEffect, useState } from "react";
import ProductsSlider from "./ProductsSlider";
import { supabase } from "@/utils/supabase";
import Spinner from "../ui/Spinner";

type productsArr = {
  name: string;
  price: number;
  salePrice?: number | undefined;
  imageUrl: string;
  productId: number;
}[];

const LastWatched = () => {
  const [products, setProducts] = useState<productsArr>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const item = localStorage.getItem("lastProducts");
    const idArray: number[] = item ? JSON.parse(item) : [];
    const fetchData = async () => {
      console.log(idArray);
      const { data, error } = await supabase
        .from("products")
        .select("manufacturer,name,price,sale_price,images,id")
        .in("id", idArray);
      if (!data) return;
      data.sort((a, b) => idArray.indexOf(a.id) - idArray.indexOf(b.id));
      setProducts(
        data?.map((prod) => {
          return {
            name: `${prod.manufacturer} ${prod.name}`,
            price: prod.price,
            salePrice: prod.sale_price ? prod.sale_price : undefined,
            imageUrl: prod.images[0],
            productId: prod.id,
          };
        })
      );
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return products && products?.length > 0 ? (
    <section className="lg:border-b-2 w-full py-0 lg:py-5">
      <div className="flex justify-between mb-3">
        <h2 className="text-2xl font-semibold ml-5 lg:ml-0">Last watched</h2>
      </div>
      <ProductsSlider products={products} />
      <div className="lg:hidden my-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
    </section>
  ) : isLoading ? (
    <section className="lg:border-b-2 w-full py-0 lg:py-5">
      <div className="flex justify-between mb-3">
        <h2 className="text-2xl font-semibold ml-5 lg:ml-0">Last watched</h2>
      </div>
      <div className="flex justify-center items-center h-56">
        <Spinner scale={1} />
      </div>
      <div className="lg:hidden my-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
    </section>
  ) : null;
};

export default LastWatched;
