import Images from "@/components/productPage/Images";
import ProductDescription from "@/components/productPage/ProductDescription";
import ProductInfo from "@/components/productPage/ProductInfo";
import ProductPageNav from "@/components/productPage/ProductPageNav";
import Rating from "@/components/productPage/Rating";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return {
    title: "Xiaomi POCO X5 5G 8/256GB Black - InnoTech",
  };
};

const page = ({ params }: Props) => {
  return (
    <main className="w-full flex flex-col items-center mb-10">
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
        <div className="text-xs flex items-center gap-1 text-gray-600 py-6">
          <Link href={"/"}>InnoTech</Link>
          <FaChevronRight />
          <Link href={"/category/9-smartphones-and-phones"}>Smartphones</Link>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <Images />
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Xiaomi POCO X5 5G 8/256GB Black
            </h1>
            <Rating rating={5.5} />
            <p className="text-sm text-gray-400">
              product id: {params.productId}
            </p>
            <ProductInfo />
          </div>
        </div>
      </div>
      <ProductPageNav />
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem] my-5">
        <div className="h-[2px] bg-gray-200 flex">
          <div className="w-16 h-full bg-black" />
          <div className="h-full w-16 bg-gray-400" />
        </div>
        <ProductDescription description={[]} />
      </div>
    </main>
  );
};

export default page;
