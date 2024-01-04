"use client";
import { homePageBrands } from "@/constants";
import useWindowDimensions from "@/hooks/useWindowSize";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Slider from "react-slick";

const Brands = () => {
  const { width } = useWindowDimensions();
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const mappedProducts = homePageBrands.map((brand) => {
    return (
      <div className="group min-w-[10rem] h-24" key={brand}>
        <div className="w-full h-full flex items-center justify-center ">
          <Image
            src={brand}
            width={100}
            height={100}
            alt=""
            className="max-h-[60px] opacity-50 grayscale hover:opacity-100 hover:grayscale-0 cursor-pointer"
          />
        </div>
      </div>
    );
  });
  return (
    <div className={`${width ? "block" : "flex"} relative`}>
      {sliderIndex != 0 && (
        <button
          className="hidden lg:block absolute bg-white top-2/4 -translate-y-2/4 -left-3 text-lg p-2 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 active:bg-gray-300"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <IoChevronBackOutline />
        </button>
      )}
      {width &&
        ((width >= 1280 && sliderIndex != homePageBrands.length - 6) ||
          (width < 1280 && sliderIndex != homePageBrands.length - 5)) && (
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
          className="cursor-grab"
          beforeChange={(index, newIndex) => setSliderIndex(newIndex)}
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
          {mappedProducts}
        </Slider>
      ) : (
        mappedProducts
      )}
    </div>
  );
};

export default Brands;
