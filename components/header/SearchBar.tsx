"use client";

import { supabase } from "@/utils/supabase";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  sale_price: number;
};

const SearchBar = ({
  query,
  isOpen,
  setIsOpen,
}: {
  query: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const { data = [], error } = await supabase
      .from("products")
      .select("name, id, price,sale_price")
      .ilike("name", `%${query}%`)
      .limit(10);
    setProducts((data as Product[]) || []);
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        fetchProducts();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query, fetchProducts]);

  if (!query) return null;

  return (
    <section
      className={` absolute w-full bg-white top-[calc(100%+2px)]  z-[90] rounded-lg overflow-hidden border border-gray-200] shadow-[0_2px_10px_0px_rgba(0,0,0,0.2)] ${
        isOpen ? "" : "hidden"
      } `}
    >
      <div>
        <ul>
          {products.map(({ id, name, price, sale_price }) => (
            <li key={id} className="w-full ">
              <Link
                className="py-3 px-4   hover:bg-gray-100 w-full flex"
                href={`/product/${id}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex justify-between w-full gap-4 items-center">
                  <div className="text-sm ">{name}</div>
                  <span className="text-md">
                    {sale_price ? sale_price : price}zł
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchBar;
