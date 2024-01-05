"use client";
import { getRandomInt } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  product: {
    manufacturer: string;
    name: string;
    price: number;
    salePrice: number;
    imageUrl: string;
  };
};

const DealOfTheDay = ({ product }: Props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [soldQuantity, setSoldQunatity] = useState(0);
  const [actDate, setActDate] = useState<Date>();
  useEffect(() => {
    const totalQuantityTemp = getRandomInt(100, 1000);
    setTotalQuantity(totalQuantityTemp);
    setSoldQunatity(getRandomInt(0, totalQuantityTemp));

    setActDate(new Date());
  }, []);
  const leftQuantity = totalQuantity - soldQuantity;

  useEffect(() => {
    const dateInterval = setInterval(() => setActDate(new Date()), 1000);
    return () => clearInterval(dateInterval);
  }, []);

  const dateToPay = new Date();
  dateToPay.setUTCHours(22, 0, 0);
  let timeDiff = actDate ? dateToPay.getTime() - actDate.getTime() : 0;
  let timeDiffToCalc = timeDiff;
  const diffHours = Math.floor(timeDiffToCalc / 1000 / 60 / 60);
  timeDiffToCalc -= diffHours * 1000 * 60 * 60;
  const diffMinutes = Math.floor(timeDiffToCalc / 1000 / 60);
  timeDiffToCalc -= diffMinutes * 1000 * 60;
  const diffSeconds = Math.floor(timeDiffToCalc / 1000);

  return (
    <div className="p-[2px] rounded-lg mx-2 lg:mx-0 bg-gradient-to-b from-[#fa0064] via-black to-[#fa0064]">
      <Link href={"/dealoftheday"}>
        <div className="bg-white h-full rounded-md p-4 relative">
          <div className="block md:hidden lg:block bg-zinc-500 text-white px-6 py-1 rounded-lg absolute text-center right-4">
            <p className="text-sm">Save</p>
            <p className="text-lg">
              {(product.price - product.salePrice).toFixed(0)} zł
            </p>
          </div>
          <h2 className="text-2xl font-semibold">Deal of the day</h2>
          <div className="flex flex-col md:flex-row md:justify-around lg:justify-normal lg:flex-col">
            <div className="flex flex-col items-center">
              <Image src={product.imageUrl} width={250} height={200} alt="" />
              <h3 className="text-xl text-center">{`${product.manufacturer} ${product.name}`}</h3>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-semibold my-3 md:my-0 lg:my-3">
                {product.salePrice.toFixed(2)} zł
              </p>
              <p className="text-lg hidden md:block lg:hidden text-[#fa0064]">
                Save {(product.price - product.salePrice).toFixed(0)} zł
              </p>
              <p className="text-xs w-full text-gray-600 text-left md:text-center lg:text-left">
                <span className="text-base line-through">
                  {product.price.toFixed(2)} zł
                </span>{" "}
                - regular price
              </p>
              <p className="text-xs w-full text-gray-600 text-left md:text-center lg:text-left">
                {product.price.toFixed(2)} zł - lowest price from 30 days before
                discount
              </p>
              <div className="w-full my-3">
                <div className="flex justify-between w-full items-center">
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    left{" "}
                    <span className="text-black text-xl font-medium">
                      {leftQuantity}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    sold{" "}
                    <span className="text-black text-xl font-medium">
                      {soldQuantity}
                    </span>
                  </p>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-300 mt-1">
                  <div
                    style={{
                      width: `${(leftQuantity / totalQuantity) * 100}%`,
                    }}
                    className="bg-gradient-to-r from-[#0ed0ff] to-[#0083fa] h-full rounded-full"
                  />
                </div>
              </div>
              <div className="w-full text-center flex flex-col items-center">
                {timeDiff > 0 ? (
                  <>
                    <p className="text-sm">Hurry up, this offer ends in:</p>
                    <div className="flex items-center mt-2 gap-4 mx-auto">
                      <div className="flex flex-col items-center text-xs ">
                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-300 text-2xl rounded-lg relative">
                          {diffHours <= 9 ? "0" : ""}
                          {diffHours}
                          <span className="absolute -right-3 text-2xl top-2/4 -translate-y-2/4">
                            :
                          </span>
                        </div>
                        hours
                      </div>

                      <div className="flex flex-col items-center text-xs">
                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-300 text-2xl rounded-lg relative">
                          {diffMinutes <= 9 ? "0" : ""}
                          {diffMinutes}
                          <span className="absolute -right-3 text-2xl top-2/4 -translate-y-2/4">
                            :
                          </span>
                        </div>
                        mins
                      </div>
                      <div className="flex flex-col items-center text-xs">
                        <div className="w-12 h-12 flex items-center justify-center bg-zinc-300 text-2xl rounded-lg">
                          {diffSeconds <= 9 ? "0" : ""}
                          {diffSeconds}
                        </div>
                        secs
                      </div>
                    </div>
                  </>
                ) : actDate ? (
                  <p className="text-xl mt-6">This offer has ended</p>
                ) : (
                  <p className="text-xl mt-6"></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DealOfTheDay;
