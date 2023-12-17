import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoIosClose } from "react-icons/io";
import { helpAndContactLinks } from "@/constants";

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
                {helpAndContactLinks.helpLinks.map((link) => {
                  return (
                    <Link
                      href={link.url}
                      className="py-2 px-4 outline-none hover:bg-gray-200 focus:bg-gray-200"
                      key={link.title}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
              <p className="font-semibold py-2 px-4 text-gray-700">
                Contact with us
              </p>
              <div className="flex flex-col">
                {helpAndContactLinks.contactLinks.map((link) => {
                  return (
                    <Link
                      href={link.url}
                      className="py-2 px-4 flex items-center gap-2 outline-none hover:bg-gray-200 focus:bg-gray-200"
                      key={link.title}
                    >
                      <link.icon className="text-xl" />
                      {link.title}
                    </Link>
                  );
                })}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default HelpModal;
