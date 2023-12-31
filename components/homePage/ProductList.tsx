"use client";
import { useCartContext } from "@/context/cart-context";
import useWindowDimensions from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
type Props = {
  products: {
    name: string;
    price: number;
    salePrice?: number;
    imageUrl: string;
    productId: number;
  }[];
};

const ProductList = ({ products }: Props) => {
  const { width } = useWindowDimensions();
  const { addProductToCart } = useCartContext();
  const [mouseMoved, setMouseMoved] = useState(false);
  const router = useRouter();

  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (!mouseMoved && e.button === 0) router.push(href);
  };

  const mappedProducts = products.map((product) => {
    return (
      <div className="flex flex-col items-center p-2 lg:hover:shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] rounded-lg group min-w-[10rem] h-full">
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
    <div
      className={`${
        width ? "block" : "flex"
      } lg:grid lg:grid-cols-4 gap-x-1 gap-y-10 pt-5`}
    >
      {width && width <= 768 ? (
        <Slider
          slidesToShow={4.5}
          infinite={false}
          swipeToSlide
          responsive={[
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
            <div className="h-[14rem]">{prod}</div>
          ))}
        </Slider>
      ) : (
        mappedProducts
      )}
    </div>
  );
};

export default ProductList;
