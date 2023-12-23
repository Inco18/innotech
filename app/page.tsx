import ProductList from "@/components/homePage/ProductList";
import Unbox from "@/components/homePage/Unbox";

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

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center mb-10 lg:px-5 xl:px-32 px-2 max-w-[110rem] py-5">
      <section className="border-b-2 w-full grid grid-cols-1 lg:grid-cols-[30%_70%] 2xl:grid-cols-[25%_75%] pb-5">
        <Unbox />
        <div className="border-t-2 py-5 ml-5">
          <h2 className="text-2xl font-semibold">We recommend</h2>
          <ProductList products={placeholderProducts} />
        </div>
      </section>
    </main>
  );
}
