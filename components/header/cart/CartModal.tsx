import React, { Fragment } from "react";
import CartProducts from "./CartProducts";
import { Transition, Dialog } from "@headlessui/react";
import { IoIosClose } from "react-icons/io";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CartModal = (props: Props) => {
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
          <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen ">
          <Transition.Child
            enter="transition duration-200"
            enterFrom="transform translate-x-[15rem]"
            enterTo="transform translate-x-0"
            leave="transition duration-100"
            leaveFrom="transform translate-x-0"
            leaveTo="transform translate-x-[15rem]"
            as={Fragment}
          >
            <Dialog.Panel className="ml-auto h-screen bg-white overflow-y-auto">
              <Dialog.Title
                className="bg-gray-100 p-3 border-b-2 border-gray-200 flex items-center gap-2 font-semibold text-lg"
                tabIndex={0}
              >
                <IoIosClose
                  className="text-4xl rounded-md hover:bg-gray-200 cursor-pointer"
                  onClick={props.onClose}
                />
                Cart
              </Dialog.Title>
              <CartProducts />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
