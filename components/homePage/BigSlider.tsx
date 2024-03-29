"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type Props = {
  data: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    created_at: string;
  }[];
  pageUrl: string;
};

const BigSlider = ({ data, pageUrl }: Props) => {
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

  return (
    <div className="relative">
      {sliderIndex != 0 && (
        <button
          className="hidden lg:block absolute bg-white top-1/4 -left-3 text-lg p-2 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 active:bg-gray-300"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <IoChevronBackOutline />
        </button>
      )}
      {sliderIndex != data.length - 4 && (
        <button
          className="hidden lg:block absolute bg-white top-1/4 -right-3 text-lg p-2 rounded-lg text-black shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] z-50 hover:bg-gray-200 active:bg-gray-300"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <IoChevronForwardOutline />
        </button>
      )}
      <Slider
        ref={sliderRef}
        slidesToShow={4}
        slidesToScroll={1}
        infinite={false}
        swipeToSlide
        arrows={false}
        rows={1}
        beforeChange={(index, newIndex) => setSliderIndex(newIndex)}
        responsive={[
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3.5,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2.5,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1.5,
            },
          },
        ]}
      >
        {data.map((data) => {
          return (
            <div className="py-1" key={data.id} title={data.title}>
              <Link
                href={`${pageUrl}${data.id}`}
                onMouseMove={() => setMouseMoved(true)}
                onMouseDown={() => setMouseMoved(false)}
                onMouseUp={(e) => handleLink(e, `${pageUrl}${data.id}`)}
                onClick={(e) => e.preventDefault()}
                className="outline-none"
              >
                <Image
                  src={data.imageUrl}
                  width={309}
                  height={218}
                  alt=""
                  className="rounded-lg w-full object-contain max-h-52 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08),rgba(0,0,0,0.08)_0px_0px_2px_1px] mb-2"
                />
              </Link>
              <Link
                href={`${pageUrl}${data.id}`}
                onMouseMove={() => setMouseMoved(true)}
                onMouseDown={() => setMouseMoved(false)}
                onMouseUp={(e) => handleLink(e, `${pageUrl}${data.id}`)}
                onClick={(e) => e.preventDefault()}
                className="outline-none"
                draggable={false}
              >
                <h3 className="font-medium text-lg line-clamp-2">
                  {data.title}
                </h3>
              </Link>
              <p className="line-clamp-1 text-sm">{data.description}</p>
              <div className="flex text-xs mt-2">
                <p>{new Date(data.created_at).toDateString()}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BigSlider;
