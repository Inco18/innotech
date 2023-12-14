"use client";

import { useCartContext } from "@/context/cart-context";
import React, { useEffect, useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiCircleCheck, CiClock2, CiDeliveryTruck } from "react-icons/ci";
import { TbCalendarDollar } from "react-icons/tb";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

type Props = {};

const ProductInfo = (props: Props) => {
  const cartContext = useCartContext();
  const [actDate, setActDate] = useState(new Date());

  //TODO:
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    cartContext.addProductToCart();
  };

  useEffect(() => {
    const dateInterval = setInterval(() => setActDate(new Date()), 1000 * 60);
    return () => clearInterval(dateInterval);
  }, []);

  const dateToPay = new Date();
  dateToPay.setUTCHours(16, 0, 0, 0);
  let timeDiff = dateToPay.getTime() - actDate.getTime();
  const diffHours = Math.floor(timeDiff / 1000 / 60 / 60);
  timeDiff -= diffHours * 1000 * 60 * 60;
  const diffMinutes = Math.floor(timeDiff / 1000 / 60);

  return (
    <div className="flex flex-col gap-2 justify-between my-3 lg:flex-row">
      <div className="flex-1 border-y-2 h-fit py-3 order-2 lg:order-1">
        <ul className="text-sm">
          <li className="my-1">
            <span className="text-gray-500">Screen size:</span> 6,67"
          </li>
          <li className="my-1">
            <span className="text-gray-500">Processor:</span> Qualcomm
            Snapdragon 695
          </li>
          <li className="my-1">
            <span className="text-gray-500">Ram:</span> 8GB
          </li>
          <li className="my-1">
            <span className="text-gray-500">Memory:</span> 256GB
          </li>
        </ul>
        <Link
          href={"#specification"}
          className="flex items-center gap-2 text-sm mt-2 hover:bg-gray-100 w-fit py-1 px-2 rounded-lg transition-colors"
        >
          Go to full specification <HiOutlineChevronDoubleDown />
        </Link>
      </div>
      <div className="md:border-2 border-gray-200 rounded-lg lg:max-w-[16rem] xl:max-w-xs 2xl:max-w-none order-1 lg:order-2">
        <div className="flex flex-col md:items-end md:p-3 md:text-right ">
          <div className="flex items-center gap-2 md:gap-0 md:flex-col md:items-end">
            <div className="bg-green-100 w-fit py-1 px-3 text-sm rounded-md text-green-800 order-2 md:order-1">
              Save 105,00 zł
            </div>
            <p className="text-3xl my-1 order-1 md:order-2">894,00 zł</p>
          </div>
          <p className="text-sm">
            Regular price: <span className="line-through">999,00 zł</span>
          </p>
          <p className="text-sm">
            Lowest price from 30 days before discount: 894,00 zł
          </p>
          <form
            className="flex items-center w-full gap-3 my-2"
            onSubmit={handleSubmit}
          >
            <input
              type="number"
              name="quantity"
              defaultValue={1}
              min={1}
              max={99}
              className="border-2 border-gray-200 rounded-lg p-2 w-16"
            />
            <button className="flex items-center gap-2 justify-center flex-1 p-2 rounded-md bg-green-600 hover:bg-green-800 text-white">
              <MdOutlineAddShoppingCart />
              Add to cart
            </button>
          </form>
        </div>
        <div className="text-sm xl:text-base border-2 rounded-lg md:border-0">
          <div className="flex items-center gap-4 px-3 py-1 xl:py-2 cursor-pointer hover:bg-gray-100 md:border-t-2">
            <CiCircleCheck className="text-3xl" />
            <div>
              <p className="text-green-700">Available</p>
              <p className="text-gray-500 text-sm">Learn more</p>
            </div>
          </div>
          {actDate.getHours() < 16 && (
            <div className="flex items-center gap-4 px-3 py-1 xl:py-2 cursor-pointer hover:bg-gray-100 border-t-2">
              <CiClock2 className="text-3xl" />
              <div>
                <p>Buy now, receive tomorrow</p>
                <p className="text-gray-500 text-sm">
                  Pay in{" "}
                  <span className="text-green-700" suppressHydrationWarning>
                    {`${diffHours <= 9 ? "0" : ""}${diffHours}h
                      ${diffMinutes <= 9 ? "0" : ""}${diffMinutes}min`}
                  </span>
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center gap-4 px-3 py-1 xl:py-2 cursor-pointer hover:bg-gray-100 border-t-2">
            <CiDeliveryTruck className="text-3xl " />
            <div>
              <p className="text-green-700">Free delivery</p>
              <p className="text-gray-500 text-sm">Check the details</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-3 py-1 xl:py-2 cursor-pointer hover:bg-gray-100 border-t-2">
            <TbCalendarDollar className="text-3xl stroke-1" />
            <div>
              <p>Installment only 25 zł</p>
              <p className="text-gray-500 text-sm">Calculate installments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-3 py-1 xl:py-2 cursor-pointer hover:bg-gray-100 border-t-2">
            <IoStorefrontOutline className="text-3xl" />
            <div>
              <p>Available in stores</p>
              <p className="text-gray-500 text-sm">Pick store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
