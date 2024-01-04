"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type Props = {
  sales: {
    id: number;
    created_at: string;
    name: string;
    image: string;
    imageSm: string;
  }[];
};

const SalesSlider = ({ sales }: Props) => {
  const [mouseMoved, setMouseMoved] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();
  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (!mouseMoved && e.button === 0) router.push(href);
  };

  return (
    <div className="w-full relative lg:mb-5">
      <button
        className="hidden lg:block absolute bg-white top-2/4 -left-3 text-lg p-3 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 -translate-y-3/4 active:bg-gray-300"
        onClick={() => {
          if (sliderIndex === 0) sliderRef.current?.slickGoTo(sales.length - 1);
          else sliderRef?.current?.slickPrev();
        }}
      >
        <IoChevronBackOutline />
      </button>
      <button
        className="hidden lg:block absolute bg-white top-2/4 -right-3 text-lg p-3 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 -translate-y-3/4 active:bg-gray-300"
        onClick={() => {
          if (sliderIndex === sales.length - 1) sliderRef.current?.slickGoTo(0);
          else sliderRef?.current?.slickNext();
        }}
      >
        <IoChevronForwardOutline />
      </button>
      <Slider
        ref={sliderRef}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={false}
        swipeToSlide
        arrows={false}
        rows={1}
        className="z-40 [&_.slick-list]:md:rounded-3xl [&_.slick-list]:md:!mx-0 [&_.slick-slide>div]:md:!px-0"
        beforeChange={(index, newIndex) => setSliderIndex(newIndex)}
        onEdge={(direction) => {
          if (direction === "left") sliderRef.current?.slickGoTo(0);
          else sliderRef.current?.slickGoTo(sales.length - 1);
        }}
        responsive={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1.1,
            },
          },
        ]}
      >
        {sales.map((sale) => {
          return (
            <Link
              key={sale.id}
              href={`/sale/${sale.id}-${sale.name.replaceAll(" ", "-")}`}
              onMouseMove={() => setMouseMoved(true)}
              onMouseDown={() => setMouseMoved(false)}
              onMouseUp={(e) =>
                handleLink(
                  e,
                  `/sale/${sale.id}-${sale.name.replaceAll(" ", "-")}`
                )
              }
              onClick={(e) => e.preventDefault()}
              className="outline-none w-full overflow-hidden flex justify-start"
              title={sale.name}
            >
              <Image
                src={sale.image}
                width={1440}
                height={315}
                alt={sale.name}
                loading="lazy"
                className="!hidden md:!block rounded-3xl min-h-[13rem] lg:w-full object-left object-cover outline-none shadow"
              />
              <Image
                src={sale.imageSm}
                width={416}
                height={225}
                alt={sale.name}
                loading="lazy"
                className="!block md:!hidden rounded-lg md:rounded-3xl md:min-h-[13rem] lg:w-full md:object-left md:object-cover outline-none shadow"
              />
            </Link>
          );
        })}
      </Slider>
      <div className="hidden lg:flex justify-around px-5 text-sm -mt-2 z-10">
        {sales.map((sale, i) => {
          return (
            <button
              key={sale.id}
              className="py-4 px-2 hover:bg-gray-200 rounded-b-md grow transition-colors relative"
              onClick={() => sliderRef.current?.slickGoTo(i)}
            >
              <div
                className={`absolute top-0 left-2/4 -translate-x-2/4 h-[6px] w-[95%] rounded-b-md ${
                  i === sliderIndex ? "bg-black" : ""
                }`}
              />
              {sale.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SalesSlider;
