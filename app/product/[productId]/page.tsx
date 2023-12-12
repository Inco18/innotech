import Images from "@/components/productPage/Images";
import ProductInfo from "@/components/productPage/ProductInfo";
import Rating from "@/components/productPage/Rating";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  params: {
    productId: string;
  };
};

const page = ({ params }: Props) => {
  return (
    <main className="w-full lg:px-32 px-8 max-w-[110rem]">
      <div className="text-xs flex items-center gap-1 text-gray-600 py-6">
        <Link href={"/"}>InnoTech</Link>
        <FaChevronRight />
        <Link href={"/category/28-processors"}>Processors</Link>
      </div>
      <div className="flex gap-2 flex-col md:flex-row">
        <Images />
        <div className="flex-1">
          <h1 className="text-3xl">AMD Ryzen 7 7800X3D</h1>
          <Rating rating={5.5} />
          <p className="text-sm text-gray-400">
            product id: {params.productId}
          </p>
          <ProductInfo />
        </div>
      </div>
    </main>
  );
};

export default page;
