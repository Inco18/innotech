"use client";

import { supabase } from "@/utils/supabase";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

const SearchBar = ({ query }: { query: string }) => {
  const [timeLeft, setTimeLeft] = useState(3);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const { data = [], error } = await supabase
      .from("products")
      .select("name, id, price")
      .ilike("name", `%${query}%`)
      .limit(10);
    setProducts((data as Product[]) || []);
  }, [query]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft === 0 && query) {
        fetchProducts();
      } else {
        setTimeLeft((time) => Math.max(time - 1, 0));
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query, timeLeft, fetchProducts]);

  useEffect(() => {
    setTimeLeft(3);
  }, [query, fetchProducts]);

  if (!query) return null;
  return (
    <section className=" absolute w-full bg-white top-[calc(100%+2px)]  z-[90] rounded-lg overflow-hidden border border-gray-200] shadow-[0_2px_10px_0px_rgba(0,0,0,0.2)] ">
      {timeLeft > 0 && (
        <div className="w-full text-center py-4  px-2">
          Time left to search: {timeLeft} seconds
        </div>
      )}
      <div>
        <ul>
          {products.map(({ id, name, price }) => (
            <li key={id} className="w-full ">
              <Link
                className="py-3 px-4   hover:bg-gray-100 w-full flex"
                href={`/product/${id}`}
              >
                <div className="flex justify-between w-full gap-4 items-center">
                  <div className="text-sm ">{name}</div>
                  <span className="text-md">{price}zł</span>
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
