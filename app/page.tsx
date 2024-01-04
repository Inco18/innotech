import DealOfTheDay from "@/components/homePage/DealOfTheDay";
import News from "@/components/homePage/News";
import ProductList from "@/components/homePage/ProductList";
import SalesSlider from "@/components/homePage/SalesSlider";
import Unbox from "@/components/homePage/Unbox";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

const placeholderProducts = [
  {
    name: "Xiaomi POCO X5 5G 8/256GB Black dwadwa wdayg yudgway dgway dgwagd wag dgaw gdya dgyaw dgawdg y awdg",
    price: 999,
    salePrice: 894,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/1.webp",
    productId: 363,
  },
  {
    name: "Samsung Galaxy S23 8/256GB Black",
    price: 4199.99,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/s23/1.webp",
    productId: 365,
  },
  {
    name: "Xiaomi POCO X5 5G 8/256GB Black",
    price: 999,
    salePrice: 894,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/1.webp",
    productId: 363,
  },
  {
    name: "Samsung Galaxy S23 8/256GB Black",
    price: 4199.99,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/s23/1.webp",
    productId: 365,
  },
  {
    name: "Xiaomi POCO X5 5G 8/256GB Black",
    price: 999,
    salePrice: 894,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/1.webp",
    productId: 363,
  },
  {
    name: "Samsung Galaxy S23 8/256GB Black",
    price: 4199.99,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/s23/1.webp",
    productId: 365,
  },
  {
    name: "Xiaomi POCO X5 5G 8/256GB Black",
    price: 999,
    salePrice: 894,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/1.webp",
    productId: 363,
  },
  {
    name: "Samsung Galaxy S23 8/256GB Black",
    price: 4199.99,
    imageUrl:
      "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/s23/1.webp",
    productId: 365,
  },
];

export default async function Home() {
  const { data: news, error: newsError } = await supabase
    .from("news")
    .select("title,description,imageUrl,created_at,id")
    .order("created_at");
  const { data: sales, error: salesError } = await supabase
    .from("sales")
    .select("*");

  return (
    <main className="w-full flex flex-col items-center mb-10 lg:px-5 xl:px-32 px-0 max-w-[110rem] py-5 overflow-x-hidden">
      {sales && <SalesSlider sales={sales} />}
      <section className="lg:border-b-2 w-full grid grid-cols-1 lg:grid-cols-[30%_70%] 2xl:grid-cols-[25%_75%] pb-5">
        <Unbox />
        <div className="lg:hidden mt-10 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        <div className="lg:border-t-2 py-5 lg:ml-5">
          <h2 className="text-2xl font-semibold ml-5 lg:ml-0">We recommend</h2>
          <ProductList products={placeholderProducts} />
        </div>
        <div className="lg:hidden mt-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
      </section>
      {news && (
        <section className="w-full py-0 lg:py-5">
          <div className="flex justify-between mb-3">
            <h2 className="text-2xl font-semibold ml-5 lg:ml-0">News</h2>
            <Link
              href={"/news"}
              className="flex items-center gap-2 hover:bg-gray-100 py-1 px-5 transition-colors rounded-lg text-sm"
            >
              Show all <IoChevronForwardOutline />
            </Link>
          </div>
          <News news={news} />
        </section>
      )}
      <section className="lg:border-b-2 w-full grid grid-cols-1 lg:grid-cols-[30%_70%] 2xl:grid-cols-[25%_75%] pb-5">
        <div className="lg:hidden my-10 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        <DealOfTheDay
          product={{
            manufacturer: "Xiaomi",
            name: "POCO X5 5G 8/256GB Black",
            price: 999,
            salePrice: 894,
            imageUrl:
              "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/poco_x5_black/1.webp",
          }}
        />
        <div className="lg:hidden mt-10 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        <div className="lg:border-t-2 py-5 lg:ml-5">
          <h2 className="text-2xl font-semibold ml-5 lg:ml-0">
            This week&apos;s hits
          </h2>
          <ProductList products={placeholderProducts} />
        </div>
        <div className="lg:hidden mt-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
      </section>
    </main>
  );
}
