"use client";
import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import {
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "@/app/globals.css";
import useWindowDimensions from "@/hooks/useWindowSize";

const imagesArr = [
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_31_8_41_34_194_00.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_31_8_41_45_638_07.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_31_8_41_42_261_05.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_31_8_41_43_990_06.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_31_8_41_39_108_03.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_31_8_41_35_927_01.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/1/pr_2023_1_31_8_41_47_304_08.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/1/pr_2023_1_31_8_41_48_759_09.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/1/pr_2023_1_31_8_41_50_630_10.jpg",
  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/1/pr_2023_1_31_8_41_40_774_04.jpg",
];

const Images = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLighboxOpen] = useState(false);
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className="flex flex-col justify-center items-center p-2">
        <Image
          src={imagesArr[activeImage]}
          onClick={() => setLighboxOpen(true)}
          width={500}
          height={500}
          alt=""
          className="cursor-pointer object-cover h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] aspect-square"
        />
        <div className="py-4 flex gap-1">
          {imagesArr.map((imageSrc, i) => {
            if (width! < 640 && i === 4 && imagesArr.length > 5) {
              return (
                <button
                  className="h-12 w-12 border-2 border-gray-200 rounded-lg p-1 cursor-pointer shrink-0 hover:border-gray-400"
                  key={imageSrc}
                  onClick={() => setLighboxOpen(true)}
                >
                  +{imagesArr.length - i}
                </button>
              );
            }
            if (
              width! >= 640 &&
              width! < 1536 &&
              i === 5 &&
              imagesArr.length > 6
            ) {
              return (
                <button
                  className="h-12 w-12 md:h-16 md:w-16 border-2 border-gray-200 rounded-lg p-1 cursor-pointer shrink-0 hover:border-gray-400"
                  key={imageSrc}
                  onClick={() => setLighboxOpen(true)}
                >
                  +{imagesArr.length - i}
                </button>
              );
            }
            if (width! >= 1536 && i === 7 && imagesArr.length > 8) {
              return (
                <button
                  className="h-16 w-16 border-2 border-gray-200 rounded-lg p-1 cursor-pointer shrink-0 hover:border-gray-400"
                  key={imageSrc}
                  onClick={() => setLighboxOpen(true)}
                >
                  +{imagesArr.length - i}
                </button>
              );
            }
            return (
              <Image
                src={imageSrc}
                onMouseEnter={() => setActiveImage(i)}
                onClick={() => setLighboxOpen(true)}
                width={75}
                height={75}
                alt=""
                key={imageSrc}
                className={`border-2 border-gray-200 rounded-lg p-1 cursor-pointer object-cover h-12 w-12 md:h-16 md:w-16 ${
                  i > 4 && i <= 5 ? "hidden sm:block" : ""
                } ${i > 5 && i <= 7 ? "hidden 2xl:block" : ""} ${
                  i > 7 ? "hidden" : ""
                } ${activeImage === i && "border-gray-400"}`}
              />
            );
          })}
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLighboxOpen(false)}
        slides={imagesArr.map((imageSrc) => {
          return {
            src: imageSrc,
          };
        })}
        carousel={{ finite: true, spacing: "0px", preload: 10 }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ swipe: 250 }}
        thumbnails={{
          padding: 2,
          border: 2,
          imageFit: "cover",
          height: 40,
          width: 40,
        }}
        index={activeImage}
        plugins={[Thumbnails, Zoom, Fullscreen]}
      />
    </>
  );
};

export default Images;
