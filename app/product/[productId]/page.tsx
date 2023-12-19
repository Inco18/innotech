import Images from "@/components/productPage/Images";
import Opinions from "@/components/productPage/Opinions";
import ProductDescription from "@/components/productPage/ProductDescription";
import ProductInfo from "@/components/productPage/ProductInfo";
import ProductPageNav from "@/components/productPage/ProductPageNav";
import Rating from "@/components/productPage/Rating";
import Specification from "@/components/productPage/Specification";
import { supabase } from "@/utils/supabase";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type Props = {
  params: {
    productId: string;
  };
};

export const revalidate = 0;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { data: productData, error: productError } = await supabase
    .from("products")
    .select(`manufacturer, name`)
    .eq("id", params.productId);
  if (!productData || !productData[0]) notFound();
  return {
    title: `${productData[0].manufacturer} ${productData[0].name} - InnoTech`,
  };
};

const page = async ({ params }: Props) => {
  const { data: productData, error: productError } = await supabase
    .from("products")
    .select(`*, categories (*)`)
    .eq("id", params.productId);
  if (!productData || !productData[0]) notFound();
  const { data: opinionsData, error: opinionsError } = await supabase
    .from("opinions")
    .select(`*`)
    .eq("product_id", params.productId)
    .order("created_at", { ascending: false });
  const productRating = opinionsData
    ? opinionsData?.reduce((acc, cur) => acc + cur.rating, 0) /
      opinionsData.length
    : 0;
  const product = productData[0];

  return (
    <main className="w-full flex flex-col items-center mb-10">
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
        <div className="text-xs flex items-center gap-1 text-gray-600 py-6">
          <Link href={"/"}>InnoTech</Link>
          <FaChevronRight />
          <Link
            href={`/category/${
              product.categories?.id
            }-${product.categories?.name?.split(" ").join("-").toLowerCase()}`}
          >
            {product.categories?.name}
          </Link>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <Images imagesArr={product.images} />
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              {product.manufacturer} {product.name}
            </h1>
            <Link
              href={"#opinions"}
              className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black hover:underline"
            >
              <Rating rating={productRating} starsSize="text-xs" />(
              {opinionsData?.length} opinions)
            </Link>
            <p className="text-sm text-gray-400">
              product id: {params.productId}
            </p>
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
      <ProductPageNav />
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem] my-5">
        <div className="h-[2px] bg-gray-200 flex">
          <div className="w-16 h-full bg-black" />
          <div className="h-full w-16 bg-gray-400" />
        </div>
        <ProductDescription
          description={JSON.parse(JSON.stringify(product.description))}
        />
        <div className="h-[2px] bg-gray-200 flex">
          <div className="w-16 h-full bg-black" />
          <div className="h-full w-16 bg-gray-400" />
        </div>
        <Specification
          specification={JSON.parse(JSON.stringify(product.specification))}
        />
        <div className="h-[2px] bg-gray-200 flex">
          <div className="w-16 h-full bg-black" />
          <div className="h-full w-16 bg-gray-400" />
        </div>
        <Opinions
          productId={parseInt(params.productId)}
          productImage={product.images[0]}
          productManufacturer={product.manufacturer}
          productModel={product.name}
          rating={productRating}
          opinions={opinionsData ? opinionsData : []}
        />
      </div>
    </main>
  );
};

export default page;
