"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
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
        onClick={() => sliderRef?.current?.slickPrev()}
      >
        <IoChevronBackOutline />
      </button>
      <button
        className="hidden lg:block absolute bg-white top-2/4 -right-3 text-lg p-3 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 -translate-y-3/4 active:bg-gray-300"
        onClick={() => sliderRef?.current?.slickNext()}
      >
        <IoChevronForwardOutline />
      </button>
      <Slider
        ref={sliderRef}
        slidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        swipeToSlide
        arrows={false}
        rows={1}
        className="z-40 [&_.slick-list]:rounded-3xl [&_.slick-list]:!mx-0 [&_.slick-slide>div]:!px-0"
        beforeChange={(index, newIndex) => setSliderIndex(newIndex)}
        responsive={[
          {
            breakpoint: 750,
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
              key={sale.id}
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
              className="py-4 px-2 hover:bg-gray-200 rounded-b-md grow transition-colors relative"
              onClick={() => sliderRef.current?.slickGoTo(i)}
              key={i}
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
