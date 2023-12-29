import { supabase } from "./supabase";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function generateProductObject() {
  const ramOptions = ["4GB", "8GB", "12GB", "16GB", "32GB"];
  const processorOptions = [
    { shortName: "Intel Core i3", fullName: "Intel Core i3-12100F" },
    { shortName: "Intel Core i5", fullName: "Intel Core i5-12400F" },
    { shortName: "Intel Core i7", fullName: "Intel Core i7-12700F" },
    { shortName: "Intel Core i9", fullName: "Intel Core i9-12900F" },
    { shortName: "AMD Ryzen 3", fullName: "AMD Ryzen 3 3300X" },
    { shortName: "AMD Ryzen 5", fullName: "AMD Ryzen 5 5600X" },
    { shortName: "AMD Ryzen 7", fullName: "AMD Ryzen 7 5800X" },
    { shortName: "AMD Ryzen 9", fullName: "AMD Ryzen 9 5900X" },
    { shortName: "Apple", fullName: "Apple M1" },
    { shortName: "Intel Core i3", fullName: "Intel Core i3-11100" },
    { shortName: "Intel Core i5", fullName: "Intel Core i5-11600K" },
    { shortName: "Intel Core i7", fullName: "Intel Core i7-11700K" },
    { shortName: "Intel Core i9", fullName: "Intel Core i9-11900K" },
    { shortName: "AMD Ryzen 3", fullName: "AMD Ryzen 3 3100" },
    { shortName: "AMD Ryzen 5", fullName: "AMD Ryzen 5 3600" },
    { shortName: "AMD Ryzen 7", fullName: "AMD Ryzen 7 3700X" },
    { shortName: "AMD Ryzen 9", fullName: "AMD Ryzen 9 3900X" },
    { shortName: "Apple", fullName: "Apple M1 Pro" },
    { shortName: "Intel Core i3", fullName: "Intel Core i3-9100F" },
    { shortName: "Intel Core i5", fullName: "Intel Core i5-9400F" },
    { shortName: "Intel Core i7", fullName: "Intel Core i7-9700K" },
    { shortName: "Intel Core i9", fullName: "Intel Core i9-9900K" },
    { shortName: "AMD Ryzen 3", fullName: "AMD Ryzen 3 3200G" },
    { shortName: "AMD Ryzen 5", fullName: "AMD Ryzen 5 2600X" },
    { shortName: "AMD Ryzen 7", fullName: "AMD Ryzen 7 2700X" },
    { shortName: "AMD Ryzen 9", fullName: "AMD Ryzen 9 3950X" },
    { shortName: "Apple", fullName: "Apple M2" },
  ];
  const screenSizeOptions = ["14", "15.6", "16", "17.3"];
  const graphicsCardOptions = [
    { shortName: "RTX 4070 Ti", fullName: "Nvidia GeForce RTX 4070 Ti" },
    { shortName: "RTX 4080 Ti", fullName: "Nvidia GeForce RTX 4080 Ti" },
    { shortName: "RTX 3060", fullName: "Nvidia GeForce RTX 3060" },
    { shortName: "RTX 3070", fullName: "Nvidia GeForce RTX 3070" },
    { shortName: "RTX 3080", fullName: "Nvidia GeForce RTX 3080" },
    { shortName: "GTX", fullName: "Nvidia GeForce GTX" },
    { shortName: "AMD", fullName: "AMD" },
    { shortName: "Integrated", fullName: "Integrated" },
    { shortName: "RX 7000", fullName: "AMD Radeon RX 7000" },
    { shortName: "RX 6000", fullName: "AMD Radeon RX 6000" },
    { shortName: "RX 5000", fullName: "AMD Radeon RX 5000" },
    { shortName: "RX 500", fullName: "AMD Radeon RX 500" },
    { shortName: "Vega", fullName: "AMD Radeon Vega" },
    { shortName: "R9", fullName: "AMD Radeon R9" },
    { shortName: "R7", fullName: "AMD Radeon R7" },
    { shortName: "R5", fullName: "AMD Radeon R5" },
    { shortName: "HD", fullName: "AMD Radeon HD" },
    { shortName: "Intel Xe", fullName: "Intel Xe Graphics" },
    { shortName: "GTX 1660", fullName: "Nvidia GeForce GTX 1660" },
    { shortName: "RX 5500 XT", fullName: "AMD Radeon RX 5500 XT" },
    { shortName: "RTX 3090", fullName: "Nvidia GeForce RTX 3090" },
    { shortName: "RTX 3050", fullName: "Nvidia GeForce RTX 3050" },
    { shortName: "RX 6700 XT", fullName: "AMD Radeon RX 6700 XT" },
    { shortName: "RX 5700 XT", fullName: "AMD Radeon RX 5700 XT" },
    { shortName: "GTX 1650", fullName: "Nvidia GeForce GTX 1650" },
    { shortName: "RX 6800 XT", fullName: "AMD Radeon RX 6800 XT" },
    { shortName: "GTX 1080 Ti", fullName: "Nvidia GeForce GTX 1080 Ti" },
    { shortName: "RTX 3060 Ti", fullName: "Nvidia GeForce RTX 3060 Ti" },
  ];
  const operatingSystemOptions = ["Windows 11", "Windows 10", "macOS", "none"];
  const images = [
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/pr_2023_10_12_6_14_57_829_01.jpg",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/pr_2023_10_12_6_14_55_643_00.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/pr_2023_10_20_14_37_12_211_00.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/pr_2023_10_20_14_37_13_959_01.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/pr_2023_12_13_15_23_16_706_00.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/d0bb4b0b-1e1d-4704-a9dd-8fe60455799020231031_183918.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/d005336f-e2e9-4b4a-937c-394ee9e9fcfdimg_20231220_143901_641.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/b4ba36f7-1b1b-4709-9f51-c7046006364dimg_20231120_200427.webp",
    "https://ornlntxawpvzqcyhardf.supabase.co/storage/v1/object/public/product_images/placeholders/50f0129d-6b0f-4934-b67e-9808fd222622photo.webp",
  ];

  const ram = getRandomElement(ramOptions);
  const processor = getRandomElement(processorOptions);
  const graphicsCard = getRandomElement(graphicsCardOptions);
  const operatingSystem = getRandomElement(operatingSystemOptions);

  const productName = `Desktop ${getRandomElement([
    `G${Math.ceil(Math.random() * 99)}M${Math.ceil(Math.random() * 99)}R HERO`,
    `G${Math.ceil(Math.random() * 99)}M${Math.ceil(Math.random() * 99)}R ELITE`,
  ])} ${processor.shortName} ${ram}/${
    graphicsCard.shortName
  }/${operatingSystem}`;

  const price = (2000 + Math.random() * (15000 - 2000)).toFixed(2);

  return {
    name: productName,
    price,
    category: 2,
    description: [
      {
        header: "Product Overview",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        images: [],
      },
    ],
    specification: {
      ram,
      processor: processor.fullName,
      graphics_card: graphicsCard.fullName,
      operating_system: operatingSystem,
    },
    images,
    sale_price: (price * 0.7).toFixed(2),
    quantity_sold: Math.floor(Math.random() * 1000),
    rating: Math.floor(Math.random() * 7),
  };
}

export async function insertProducts() {
  for (let i = 0; i < 40; i++) {
    const product = await generateProductObject();

    const { data, error } = await supabase.from("products").insert(product);
    if (error) {
      console.error("Error inserting product:", error.message);
    } else {
      product;
    }
  }
}
