"use client";
import { useCartContext } from "@/context/cart-context";
import useWindowDimensions from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Slider from "react-slick";

type Props = {
  products: {
    name: string;
    price: number;
    salePrice?: number;
    imageUrl: string;
    productId: number;
  }[];
};

const ProductsSlider = ({ products }: Props) => {
  const { width } = useWindowDimensions();
  const { addProductToCart } = useCartContext();
  const [mouseMoved, setMouseMoved] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const router = useRouter();
  const sliderRef = useRef<Slider>(null);

  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (!mouseMoved && e.button === 0) router.push(href);
  };

  const mappedProducts = products.map((product) => {
    return (
      <div
        className="flex flex-col items-center p-2 lg:hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] rounded-lg group min-w-[10rem] h-full"
        key={product.productId}
      >
        <Link
          href={`/product/${product.productId}`}
          onMouseMove={() => setMouseMoved(true)}
          onMouseDown={() => setMouseMoved(false)}
          onMouseUp={(e) => handleLink(e, `/product/${product.productId}`)}
          onClick={(e) => e.preventDefault()}
          className="outline-none"
        >
          <Image src={product.imageUrl} width={150} height={150} alt="" />
        </Link>
        <Link
          href={`/product/${product.productId}`}
          className="text-left w-full text-sm line-clamp-2"
          onMouseMove={() => setMouseMoved(true)}
          onMouseDown={() => setMouseMoved(false)}
          onMouseUp={(e) => handleLink(e, `/product/${product.productId}`)}
          onClick={(e) => e.preventDefault()}
          draggable={false}
        >
          {product.name}
        </Link>
        <div className="flex justify-between w-full text-sm mt-auto items-end min-h-[2.5rem]">
          <div className="flex flex-col">
            {product.salePrice && (
              <span className="text-gray-500 line-through">
                {product.price.toFixed(2)} zł
              </span>
            )}
            <span>
              {product.salePrice
                ? product.salePrice.toFixed(2)
                : product.price.toFixed(2)}{" "}
              zł
            </span>
          </div>
          <div
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
            onClick={() => {
              if (!mouseMoved)
                addProductToCart({
                  id: product.productId,
                  name: product.name,
                  imageUrl: product.imageUrl,
                  price: product.price,
                  salePrice: product.salePrice ? product.salePrice : undefined,
                  quantity: 1,
                });
            }}
            className="hidden group-hover:block text-lg text-green-600 border-green-600 border-[1px] p-2 rounded-lg cursor-pointer hover:bg-green-600 hover:text-white"
          >
            <BsCartPlus />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className={`${width ? "block" : "flex"} relative`}>
      {products.length > 5 && sliderIndex != 0 && (
        <button
          className="hidden lg:block absolute bg-white top-2/4 -translate-y-2/4 -left-3 text-lg p-2 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 active:bg-gray-300"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <IoChevronBackOutline />
        </button>
      )}
      {width &&
        ((width >= 1280 &&
          products.length > 6 &&
          sliderIndex != products.length - 6) ||
          (width < 1280 &&
            products.length > 5 &&
            sliderIndex != products.length - 5)) && (
          <button
            className="hidden lg:block absolute bg-white top-2/4 -translate-y-2/4 -right-3 text-lg p-2 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 active:bg-gray-300"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <IoChevronForwardOutline />
          </button>
        )}
      {width ? (
        <Slider
          ref={sliderRef}
          slidesToShow={6}
          slidesToScroll={1}
          infinite={false}
          arrows={false}
          swipeToSlide
          rows={1}
          beforeChange={(index, newIndex) => setSliderIndex(newIndex)}
          className="[&_.slick-list]:py-1 [&_.slick-track]:!ml-0"
          responsive={[
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4.5,
              },
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 3.5,
              },
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {mappedProducts.map((prod) => (
            <div className="h-[14rem]" key={prod.key}>
              {prod}
            </div>
          ))}
        </Slider>
      ) : (
        mappedProducts
      )}
    </div>
  );
};

export default ProductsSlider;
