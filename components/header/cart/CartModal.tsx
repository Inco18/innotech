"use client";
import React, { Fragment } from "react";
import CartProducts from "./CartProducts";
import { Transition, Dialog } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";
import { useCartContext } from "@/context/cart-context";
import Link from "next/link";
import { CiCircleInfo } from "react-icons/ci";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CartModal = (props: Props) => {
  const { totalPrice, totalSaved, totalQuantity } = useCartContext();
  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog onClose={props.onClose}>
        <Transition.Child
          enter="transition duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          as={Fragment}
        >
          <div
            className="fixed inset-0 bg-black/60 z-[998]"
            aria-hidden="true"
          />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen z-[999]">
          <Transition.Child
            enter="transition duration-200"
            enterFrom="transform translate-x-[15rem]"
            enterTo="transform translate-x-0"
            leave="transition duration-100"
            leaveFrom="transform translate-x-0"
            leaveTo="transform translate-x-[15rem]"
            as={Fragment}
          >
            <Dialog.Panel className="ml-auto h-full bg-white max-w-sm flex flex-col">
              <Dialog.Title
                className="bg-gray-100 p-3 border-b-2 border-gray-200 flex items-center gap-2 font-semibold text-lg"
                tabIndex={0}
              >
                <IoIosClose
                  className="text-4xl rounded-md hover:bg-gray-200 cursor-pointer"
                  onClick={props.onClose}
                />
                <div className="flex justify-between items-center w-full">
                  <span className="text-xl font-medium">
                    Cart{" "}
                    <span className="text-gray-500">({totalQuantity})</span>
                  </span>
                  <Link
                    href={"/cart"}
                    className="text-blue-500 hover:text-blue-600 text-sm"
                    onClick={props.onClose}
                  >
                    Edit
                  </Link>
                </div>
              </Dialog.Title>
              <div className="flex gap-3 px-3 py-1 border-b-2">
                <CiCircleInfo className="text-4xl" />
                <p className="mt-1 text-sm">
                  Complete the order - adding products to the cart does not mean
                  reserving them.
                </p>
              </div>
              <CartProducts onClose={props.onClose} />
              <div className="bg-gray-100 p-3 rounded-md border-t-2 flex flex-col gap-1 mt-auto">
                {totalSaved > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <p>You save</p>
                    <p>{totalSaved.toFixed(2)} zł</p>
                  </div>
                )}
                <div className="flex text-base justify-between font-medium">
                  <p>To pay</p>
                  <p>{totalPrice.toFixed(2)} zł</p>
                </div>
                <Link
                  href={"/cart"}
                  className="bg-green-600 text-white p-2 w-full rounded-lg text-base text-center"
                  onClick={props.onClose}
                >
                  Go to cart
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
