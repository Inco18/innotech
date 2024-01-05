import CategotyFiltersMenu from "@/components/categoryPage/FiltersMenu";
import ProductsList from "@/components/categoryPage/ProductsList";
import ProductsListMenu from "@/components/categoryPage/ProductsListMenu";
import BigSlider from "@/components/homePage/BigSlider";

import {
  CATEGORY_MENU_DEFAULT_VALUES as defaultValues,
  PAGE_SIZE,
  navigationBarCategories,
  numberOfResultsPerPage,
} from "@/constants";

import { supabase } from "@/utils/supabase";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { IoChevronForwardOutline } from "react-icons/io5";

export const generateMetadata = async ({
  params,
}: {
  params: {
    categoryId: string;
  };
}): Promise<Metadata> => {
  const categoryIdParts = params.categoryId.split("-");
  const categoryIdNumber = +categoryIdParts[0];

  const { data: categoryData, error: categoryError } = await supabase
    .from("categories")
    .select(`name`)
    .eq("id", categoryIdNumber);

  if (!categoryData || !categoryData[0]) notFound();
  return {
    title: `${categoryData[0].name} - InnoTech`,
  };
};

const filterProducts = ({
  products,
  filters,
}: {
  products: CategoryProductProps[] | SpecificationPageProps[];
  filters: [string, string[]][];
}) => {
  if (filters.length === 0) return products.map((product) => product.id);

  const filteredProductIds = products.filter((product) =>
    filters.every(([filterCategory, filterValues]) => {
      const existingSpecValues = products.map((p) =>
        p.specification[filterCategory].value.replaceAll(" ", "_").toLowerCase()
      );

      const normalizedFilterValues = filterValues.map((value) =>
        value.toLowerCase()
      );

      const matchingFilterValues = normalizedFilterValues.filter((filter) =>
        existingSpecValues.includes(filter)
      );

      const productSpecValue = (
        product.specification[filterCategory].value || ""
      )
        .replaceAll(" ", "_")
        .toLowerCase();

      return matchingFilterValues.includes(productSpecValue);
    })
  );

  return filteredProductIds.map((product) => product.id);
};

// Function to check if a value is a valid number
const isValidValue = (value: number) => !isNaN(value) && value >= 0;

const Page = async ({ params, searchParams }: CategoryPageProps) => {
  const {
    page = defaultValues.page,
    sort_by = defaultValues.sortBy,
    display_type = defaultValues.displayType,
    page_size = defaultValues.pageSize,
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

  const { data: recomended = [], error: recomendedError } = await supabase
    .from("products")
    .select("name,description,images,created_at,id,quantity_sold")
    .eq("category", categoryIdNumber)
    .order("quantity_sold", { ascending: false })
    .limit(10);

  const normalizedRecomendedProducts = (recomended || []).map((product) => {
    const { id, name, images, description, created_at } = product;

    return {
      id,
      title: name,
      description: (description as { content: string }[])?.[0]?.content || "",
      imageUrl: images[0],
      created_at,
    };
  });

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

  const verifiedPageSize = numberOfResultsPerPage.includes(page_size)
    ? page_size
    : PAGE_SIZE;

  // Calculating number of pages based on PAGE_SIZE
  const numOfPages = Math.ceil(productsAmount / verifiedPageSize);

  // Validating page number
  const verifiedPageNumber = Math.min(Math.max(+page, 1), numOfPages);

  return (
    <main className="w-full flex flex-col items-center mb-10">
      <div className="w-full lg:px-16 xl:px-32 px-2 max-w-[110rem]">
        <section className=" flex flex-col items-start">
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
        </section>
        <section className="flex w-full gap-6 mt-4">
          {/* Category Filters Menu */}
          <div className="hidden md:block">
            <CategotyFiltersMenu
              searchParams={searchParams}
              categoryFilters={normalizedCategoryFilters}
              productsSpecificationsList={products}
            />
          </div>

          {/*Categoty's Recommended Products*/}
          <div className="w-full">
            {!!recomended?.length && (
              <section className="grid grid-cols-1  py-0 lg:pb-5">
                <div className="flex justify-between mb-3">
                  <h2 className="text-2xl font-semibold ml-5 lg:ml-0">
                    Recommended in category
                  </h2>
                </div>
                <BigSlider
                  data={normalizedRecomendedProducts}
                  pageUrl="/product/"
                />
              </section>
            )}
            {/* Products List Menu */}
            <ProductsListMenu
              currentPage={verifiedPageNumber}
              numOfPages={numOfPages}
              sortBy={sort_by}
              displayType={display_type}
              numOfProducts={productsAmount}
              pageSize={verifiedPageSize}
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
        </section>
      </div>
    </main>
  );
};

export default Page;
