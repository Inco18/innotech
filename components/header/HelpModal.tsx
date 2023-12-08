import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { PiHeadset, PiPhone } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";

type Props = {
  open: boolean;
  onClose: () => void;
};

const HelpModal = (props: Props) => {
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
                Help and contact
              </Dialog.Title>
              <div className="flex flex-col py-2">
                <Link
                  href={"/delivery-status"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  Delivery status
                </Link>

                <Link
                  href={"/delivery"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  Delivery
                </Link>

                <Link
                  href={"/installment"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  Installment
                </Link>

                <Link
                  href={"/leasing"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  Leasing
                </Link>

                <Link
                  href={"/insurance"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  Insurance
                </Link>

                <Link
                  href={"/returns-and-complaints"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  Returns and complaints
                </Link>

                <Link
                  href={"/faq"}
                  className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  FAQ
                </Link>
              </div>
              <p className="font-semibold py-2 px-4 text-gray-700">
                Contact with us
              </p>
              <div className="flex flex-col">
                <Link
                  href={"/contact"}
                  className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  <PiHeadset className="text-xl" />
                  Contact
                </Link>
                <Link
                  href={"mailto:innotech@innotech.com"}
                  className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  <MdOutlineEmail className="text-xl" />
                  innotech@innotech.com
                </Link>
                <Link
                  href={"tel:123456789"}
                  className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
                >
                  <PiPhone className="text-xl" />
                  123 456 789
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default HelpModal;
