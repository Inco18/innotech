import DealOfTheDay from "@/components/homePage/DealOfTheDay";
import ProductList from "@/components/homePage/ProductList";
import SalesSlider from "@/components/homePage/SalesSlider";
import Unbox from "@/components/homePage/Unbox";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import BigSlider from "@/components/homePage/BigSlider";
import ProductsSlider from "@/components/homePage/ProductsSlider";
import Brands from "@/components/homePage/Brands";
import LastWatched from "@/components/homePage/LastWatched";

export const revalidate = 60 * 60;

export default async function Home() {
  const { data: news, error: newsError } = await supabase
    .from("news")
    .select("title,description,imageUrl,created_at,id")
    .order("created_at");
  const { data: sales, error: salesError } = await supabase
    .from("sales")
    .select("*");
  const { data: tutorials, error: tutorialsError } = await supabase
    .from("tutorials")
    .select("title,description,imageUrl,created_at,id")
    .order("created_at");
  const { data: recommended, error: recommendedError } = await supabase
    .from("random_products")
    .select("manufacturer, name, price, sale_price, images, id")
    .limit(8);
  const { data: hits, error: hitsError } = await supabase
    .from("random_products")
    .select("manufacturer, name, price, sale_price, images, id, created_at")
    .limit(8);
  const { data: bestsellers, error: bestsellersError } = await supabase
    .from("random_products")
    .select(
      "manufacturer, name, price, sale_price, images, id, created_at, category"
    )
    .limit(8);
  const { data: dealOfTheDay, error: dealOfTheDayError } = await supabase
    .from("deal_of_the_day")
    .select("manufacturer, name, price, sale_price, images, id")
    .limit(1)
    .single();
  return (
    <main className="w-full flex flex-col items-center mb-10 lg:px-5 xl:px-32 px-0 max-w-[110rem] py-5 overflow-x-hidden">
      {sales && <SalesSlider sales={sales} />}
      <section className="lg:border-b-2 w-full grid grid-cols-1 lg:grid-cols-[30%_70%] 2xl:grid-cols-[25%_75%] pb-5">
        <Unbox />
        <div className="lg:hidden mt-10 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        <div className="lg:border-t-2 py-5 lg:ml-5">
          <h2 className="text-2xl font-semibold ml-5 lg:ml-0">We recommend</h2>
          <ProductList
            products={
              recommended && recommended?.length > 0
                ? recommended.map((prod) => {
                    return {
                      name: `${prod.manufacturer} ${prod.name}`,
                      price: prod.price ? prod.price : 0,
                      salePrice: prod.sale_price ? prod.sale_price : undefined,
                      imageUrl: prod.images ? prod.images[0] : "",
                      productId: prod.id ? prod.id : 0,
                    };
                  })
                : []
            }
          />
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
          <BigSlider data={news} pageUrl="/news/" />
        </section>
      )}
      <section className="lg:border-b-2 w-full grid grid-cols-1 lg:grid-cols-[30%_70%] 2xl:grid-cols-[25%_75%] pb-5">
        <div className="lg:hidden my-10 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        <DealOfTheDay
          product={
            dealOfTheDay
              ? {
                  manufacturer: dealOfTheDay.manufacturer
                    ? dealOfTheDay.manufacturer
                    : "",
                  name: dealOfTheDay.name ? dealOfTheDay.name : "",
                  price: dealOfTheDay.price ? dealOfTheDay.price : 0,
                  salePrice: dealOfTheDay.sale_price
                    ? dealOfTheDay.sale_price
                    : 0,
                  imageUrl: dealOfTheDay.images ? dealOfTheDay.images[0] : "",
                }
              : {
                  manufacturer: "",
                  name: "",
                  price: 0,
                  salePrice: 0,
                  imageUrl: "",
                }
          }
        />
        <div className="lg:hidden mt-10 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        <div className="lg:border-t-2 py-5 lg:ml-5">
          <h2 className="text-2xl font-semibold ml-5 lg:ml-0">
            This week&apos;s hits
          </h2>
          <ProductList
            products={
              hits && hits?.length > 0
                ? hits.map((prod) => {
                    return {
                      name: `${prod.manufacturer} ${prod.name}`,
                      price: prod.price ? prod.price : 0,
                      salePrice: prod.sale_price ? prod.sale_price : undefined,
                      imageUrl: prod.images ? prod.images[0] : "",
                      productId: prod.id ? prod.id : 0,
                    };
                  })
                : []
            }
          />
        </div>
        <div className="lg:hidden mt-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
      </section>
      {tutorials && (
        <section className="lg:border-b-2 w-full py-0 lg:py-5">
          <div className="flex justify-between mb-3">
            <h2 className="text-2xl font-semibold ml-5 lg:ml-0">Tutorials</h2>
            <Link
              href={"/tutorials"}
              className="flex items-center gap-2 hover:bg-gray-100 py-1 px-5 transition-colors rounded-lg text-sm"
            >
              Show all <IoChevronForwardOutline />
            </Link>
          </div>
          <BigSlider data={tutorials} pageUrl="/tutorials/" />
          <div className="lg:hidden my-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
        </section>
      )}

      <section className="lg:border-b-2 w-full py-0 lg:py-5">
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-semibold ml-5 lg:ml-0">Bestsellers</h2>
          <Link
            href={"/bestsellers"}
            className="flex items-center gap-2 hover:bg-gray-100 py-1 px-5 transition-colors rounded-lg text-sm"
          >
            Show all <IoChevronForwardOutline />
          </Link>
        </div>
        <ProductsSlider
          products={
            bestsellers && bestsellers?.length > 0
              ? bestsellers.map((prod) => {
                  return {
                    name: `${prod.manufacturer} ${prod.name}`,
                    price: prod.price ? prod.price : 0,
                    salePrice: prod.sale_price ? prod.sale_price : undefined,
                    imageUrl: prod.images ? prod.images[0] : "",
                    productId: prod.id ? prod.id : 0,
                  };
                })
              : []
          }
        />
        <div className="lg:hidden my-5 bg-gray-100 h-5 border-gray-200 border-y-[1px]" />
      </section>

      <LastWatched />
      <section className="w-full py-0 lg:py-5">
        <div className="mb-3">
          <h2 className="text-2xl font-semibold ml-5 lg:ml-0">Brands zone</h2>
        </div>
        <Brands />
      </section>
    </main>
  );
}
