import CategotyFiltersMenu from "@/components/categoryPage/FiltersMenu";
import ProductsList from "@/components/categoryPage/ProductsList";
import ProductsListMenu from "@/components/categoryPage/ProductsListMenu";

import {
  CATEGORY_MENU_DEFAULT_VALUES as defaultValues,
  PAGE_SIZE,
  navigationBarCategories,
} from "@/constants";

import { supabase } from "@/utils/supabase";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaChevronRight } from "react-icons/fa6";

// type Props = {
//   params: {
//     categoryId: string;
//   };
//   searchParams: {
//     page?: number;
//     sort_by?: string;
//     display_type?: string;
//     from?: number;
//     to?: number;
//   };
// };

// // export const generateMetadata = async ({
// //   params,
// // }: Props): Promise<Metadata> => {
// //   const { data: productData, error: productError } = await supabase
// //     .from("products")
// //     .select(`manufacturer, name`)
// //     .eq("id", params.categoryId);
// //   if (!productData || !productData[0]) notFound();
// //   return {
// //     title: `${productData[0].manufacturer} ${productData[0].name} - InnoTech`,
// //   };
// // };

// const filterProducts = ({
//   products,
//   filters,
// }: {
//   products: CategoryProductProps[] | SpecificationPageProps[];
//   filters: [string, string[]][];
// }) => {
//   if (filters.length === 0) return products.map((pro) => pro.id);

//   const filtered = products.filter((product) =>
//     filters.every(([filterCategory, filterValues]) => {
//       const normalizedFilterValues = filterValues.map((value) =>
//         value.toLowerCase()
//       );

//       const productSpecValue = (
//         product.specification[filterCategory].value || ""
//       )
//         .replaceAll(" ", "_")
//         .toLowerCase();

//       return normalizedFilterValues.includes(productSpecValue);
//     })
//   );

//   return filtered.map((pro) => pro.id);
// };

// const isValidValue = (value: number) => !isNaN(value) && value >= 0;

// const Page = async ({ params, searchParams }: Props) => {
//   const {
//     page = defaultValues.page,
//     sort_by = defaultValues.sortBy,
//     display_type = defaultValues.displayType,
//     from = 0,
//     to = 0,
//   } = searchParams;

//   const categoryId = params.categoryId.split("-");
//   const categoryIdNumber = +categoryId[0];

//   const exists = navigationBarCategories.some((category) =>
//     category.subcategories.some((sub) => sub.id === categoryIdNumber)
//   );

//   if (!exists) return notFound();

//   const { data: specification, error: productsError } = await supabase
//     .from("products")
//     .select(`price , sale_price , specification , id`)
//     .eq("category", categoryIdNumber);

//   const { data: categoryFilters, error: categoryFiltersError } = await supabase
//     .from("categories")
//     .select(`filters`)
//     .eq("id", categoryIdNumber);

//   const products = specification;

//   if (!products || !products[0]) notFound();

//   const priceRange = products.reduce(
//     (acc, product) => {
//       const price = product.sale_price ? product.sale_price : product.price;

//       if (price < acc.min) {
//         acc.min = price;
//       }

//       if (price > acc.max) {
//         acc.max = price;
//       }

//       return acc;
//     },
//     { min: 0, max: 0 }
//   );

//   const checkedFrom = isValidValue(from)
//     ? from >= priceRange.min && from <= priceRange.max
//       ? from
//       : priceRange.min
//     : 0;
//   const checkedTo = isValidValue(to)
//     ? to >= priceRange.min && to <= priceRange.max
//       ? to
//       : priceRange.min
//     : 0;

//   const normalizedCategoryFilters = categoryFilters?.[0]?.filters;

//   const appliedFilters = Object.entries(searchParams)
//     .filter(([key]) =>
//       Object.keys(normalizedCategoryFilters as string[]).includes(key)
//     )
//     .map(
//       ([key, values]) =>
//         [key, Array.isArray(values) ? values : [values]] as [string, string[]]
//     );

//   const filteredProductsPrices = products.filter((product) => {
//     const cost = product.sale_price || product.price;

//     return (
//       (checkedFrom === 0 || +checkedFrom <= cost) &&
//       (checkedTo === 0 || cost <= +checkedTo)
//     );
//   });

//   const filteredProductsIds = filterProducts({
//     products: filteredProductsPrices,
//     filters: appliedFilters,
//   });
//   const productsAmount = filteredProductsIds?.length || 0;

//   const numOfPages = Math.ceil(productsAmount / PAGE_SIZE);
//   const verifiedPageNumber = Math.min(Math.max(+page, 1), numOfPages);

//   return (
//     <main className="w-full flex flex-col items-center mb-10">
//       <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
//         <div className=" flex flex-col items-start">
//           <div className="text-xs flex items-center gap-1 text-gray-600 py-4">
//             <Link href={"/"}>InnoTech</Link>
//             <FaChevronRight />
//             <Link href={`/category/${params.categoryId}`}>
//               {categoryId[1].replaceAll("%20", " ")}
//             </Link>
//           </div>
//           <h1 className="flex gap-1 items-center text-lg">
//             <span className=" text-3xl">
//               {categoryId[1].replaceAll("%20", " ")}
//             </span>
//             <span className="text-gray-600">({productsAmount} results)</span>
//           </h1>
//         </div>
//         <div className="flex w-full gap-6">
//           <div className=" hidden md:block">
//             <CategotyFiltersMenu
//               searchParams={searchParams}
//               categoryFilters={normalizedCategoryFilters}
//               productsSpecificationsList={specification}
//             />
//           </div>
//           <div className="w-full">
//             <ProductsListMenu
//               currentPage={verifiedPageNumber}
//               numOfPages={Math.ceil(productsAmount / PAGE_SIZE)}
//               sortBy={sort_by}
//               displayType={display_type}
//               numOfProducts={productsAmount}
//             >
//               <Suspense fallback={<p>Loading feed...</p>}>
//                 <ProductsList
//                   params={params}
//                   searchParams={searchParams}
//                   productsAmount={productsAmount}
//                   productsIds={filteredProductsIds}
//                 />
//               </Suspense>
//             </ProductsListMenu>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Page;

type Props = {
  params: {
    categoryId: string;
  };
  searchParams: {
    page?: number;
    sort_by?: string;
    display_type?: string;
    from?: number;
    to?: number;
  };
};

// // export const generateMetadata = async ({
// //   params,
// // }: Props): Promise<Metadata> => {
// //   const { data: productData, error: productError } = await supabase
// //     .from("products")
// //     .select(`manufacturer, name`)
// //     .eq("id", params.categoryId);
// //   if (!productData || !productData[0]) notFound();
// //   return {
// //     title: `${productData[0].manufacturer} ${productData[0].name} - InnoTech`,
// //   };
// // };

// Function to filter products based on selected filters
const filterProducts = ({
  products,
  filters,
}: {
  products: CategoryProductProps[] | SpecificationPageProps[];
  filters: [string, string[]][];
}) => {
  if (filters.length === 0) return products.map((product) => product.id);

  const filtered = products.filter((product) =>
    filters.every(([filterCategory, filterValues]) => {
      const normalizedFilterValues = filterValues.map((value) =>
        value.toLowerCase()
      );

      const productSpecValue = (
        product.specification[filterCategory].value || ""
      )
        .replaceAll(" ", "_")
        .toLowerCase();

      return normalizedFilterValues.includes(productSpecValue);
    })
  );

  return filtered.map((product) => product.id);
};

// Function to check if a value is a valid number
const isValidValue = (value: number) => !isNaN(value) && value >= 0;

const Page = async ({ params, searchParams }: Props) => {
  const {
    page = defaultValues.page,
    sort_by = defaultValues.sortBy,
    display_type = defaultValues.displayType,
    from = 0,
    to = 0,
  } = searchParams;

  // Extracting category ID
  const categoryIdParts = params.categoryId.split("-");
  const categoryIdNumber = +categoryIdParts[0];

  // Checking if the category exists in the navigation bar
  const categoryExists = navigationBarCategories.some((category) =>
    category.subcategories.some((sub) => sub.id === categoryIdNumber)
  );

  if (!categoryExists) return notFound();

  // Fetching product data and category filters from the database
  const { data: productsData, error: productsError } = await supabase
    .from("products")
    .select(`price, sale_price, specification, id`)
    .eq("category", categoryIdNumber);

  const { data: categoryFiltersData, error: categoryFiltersError } =
    await supabase
      .from("categories")
      .select(`filters`)
      .eq("id", categoryIdNumber);

  const products = productsData;

  if (!products || !products[0]) notFound();

  // Calculating price range for products
  const priceRange = products.reduce(
    (acc, product) => {
      const price = product.sale_price ? product.sale_price : product.price;

      if (price < acc.min) {
        acc.min = price;
      }

      if (price > acc.max) {
        acc.max = price;
      }

      return acc;
    },
    { min: 0, max: 0 }
  );

  // Validating and checking 'from' and 'to' values
  const checkedFrom = isValidValue(from)
    ? from >= priceRange.min && from <= priceRange.max
      ? from
      : priceRange.min
    : 0;

  const checkedTo = isValidValue(to)
    ? to >= priceRange.min && to <= priceRange.max
      ? to
      : priceRange.min
    : 0;

  // Normalizing category filters
  const normalizedCategoryFilters = categoryFiltersData?.[0]?.filters;

  // Extracting applied filters from searchParams
  const appliedFilters = Object.entries(searchParams)
    .filter(([key]) =>
      Object.keys(normalizedCategoryFilters as string[]).includes(key)
    )
    .map(
      ([key, values]) =>
        [key, Array.isArray(values) ? values : [values]] as [string, string[]]
    );

  // Filtering products based on price range
  const filteredProductsPrices = products.filter((product) => {
    const cost = product.sale_price || product.price;

    return (
      (checkedFrom === 0 || +checkedFrom <= cost) &&
      (checkedTo === 0 || cost <= +checkedTo)
    );
  });

  // Filtering products based on applied filters
  const filteredProductsIds = filterProducts({
    products: filteredProductsPrices,
    filters: appliedFilters,
  });

  const productsAmount = filteredProductsIds?.length || 0;

  // Calculating number of pages based on PAGE_SIZE
  const numOfPages = Math.ceil(productsAmount / PAGE_SIZE);

  // Validating page number
  const verifiedPageNumber = Math.min(Math.max(+page, 1), numOfPages);

  return (
    <main className="w-full flex flex-col items-center mb-10">
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
        <div className=" flex flex-col items-start">
          {/* Breadcrumb */}
          <div className="text-xs flex items-center gap-1 text-gray-600 py-4">
            <Link href={"/"}>InnoTech</Link>
            <FaChevronRight />
            <Link href={`/category/${params.categoryId}`}>
              {categoryIdParts[1].replaceAll("%20", " ")}
            </Link>
          </div>
          {/* Category title */}
          <h1 className="flex gap-1 items-center text-lg">
            <span className="text-3xl">
              {categoryIdParts[1].replaceAll("%20", " ")}
            </span>
            <span className="text-gray-600">({productsAmount} results)</span>
          </h1>
        </div>
        <div className="flex w-full gap-6">
          {/* Category Filters Menu */}
          <div className="hidden md:block">
            <CategotyFiltersMenu
              searchParams={searchParams}
              categoryFilters={normalizedCategoryFilters}
              productsSpecificationsList={products}
            />
          </div>
          {/* Products List Menu */}
          <div className="w-full">
            <ProductsListMenu
              currentPage={verifiedPageNumber}
              numOfPages={Math.ceil(productsAmount / PAGE_SIZE)}
              sortBy={sort_by}
              displayType={display_type}
              numOfProducts={productsAmount}
            >
              <Suspense fallback={<p>Loading feed...</p>}>
                {/* Products List */}
                <ProductsList
                  params={params}
                  searchParams={searchParams}
                  productsAmount={productsAmount}
                  productsIds={filteredProductsIds}
                />
              </Suspense>
            </ProductsListMenu>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
