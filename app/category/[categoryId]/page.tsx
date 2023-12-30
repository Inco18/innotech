import FiltersMenu from "@/components/categoryPage/FiltersMenu";
import ProductsList from "@/components/categoryPage/ProductsList";
import ProductsListMenu from "@/components/categoryPage/ProductsListMenu";

import {
  CATEGORY_MENU_DEFAULT_VALUES as defaultValues,
  PAGE_SIZE,
  categoryDisplayOptions,
  categoryFilterOptions,
  navigationBarCategories,
} from "@/constants";
import { supabase } from "@/utils/supabase";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaChevronRight } from "react-icons/fa6";

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

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const { data: productData, error: productError } = await supabase
//     .from("products")
//     .select(`manufacturer, name`)
//     .eq("id", params.categoryId);
//   if (!productData || !productData[0]) notFound();
//   return {
//     title: `${productData[0].manufacturer} ${productData[0].name} - InnoTech`,
//   };
// };

const Page = async ({ params, searchParams }: Props) => {
  const {
    page = defaultValues.page,
    sort_by = defaultValues.sortBy,
    display_type = defaultValues.displayType,
  } = searchParams;
  const categoryId = params.categoryId.split("-");
  const categoryIdNumber = +categoryId[0];

  const exists = navigationBarCategories.some((category) =>
    category.subcategories.some((sub) => sub.id === categoryIdNumber)
  );

  if (!exists) return notFound();

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select(`id`)
    .eq("category", categoryIdNumber);

  if (!products || !products[0]) notFound();

  return (
    <main className="w-full flex flex-col items-center mb-10">
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
        <div className=" flex flex-col items-start">
          <div className="text-xs flex items-center gap-1 text-gray-600 py-4">
            <Link href={"/"}>InnoTech</Link>
            <FaChevronRight />
            <Link href={`/category/${params.categoryId}`}>
              {categoryId[1].replaceAll("%20", " ")}
            </Link>
          </div>
          <h1 className="flex gap-1 items-center text-lg">
            <span className=" text-3xl">
              {categoryId[1].replaceAll("%20", " ")}
            </span>
            <span className="text-gray-600">({products?.length} results)</span>
          </h1>
        </div>
        <div className="flex w-full ">
          {/* <div>
            <FiltersMenu />
          </div> */}
          <div className="w-full">
            <ProductsListMenu
              currentPage={+page}
              numOfPages={Math.ceil(products?.length / PAGE_SIZE)}
              sortBy={sort_by}
              displayType={display_type}
            />
            <Suspense fallback={<p>Loading feed...</p>}>
              <ProductsList params={params} searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
