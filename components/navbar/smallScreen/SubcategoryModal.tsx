import { navigationBarCategories } from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import SubcategoryLink from "../SubcategoryLink";

const SubcategoryModal = ({
  closeModal,
  isOpen,
  selectedCategory,
}: {
  isOpen: boolean;
  selectedCategory: string;
  closeModal: () => void;
}) => {
  const subcategorys =
    navigationBarCategories?.find((ctg) => ctg.category === selectedCategory)
      ?.subcategories || [];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Transition.Child
        enter="transition duration-200"
        enterFrom="transform translate-x-[20rem]"
        enterTo="transform translate-x-0"
        leave="transition duration-200"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-[20rem]"
        as={Fragment}
      >
        <Dialog.Panel className="absolute  right-0 top-0 h-screen w-full bg-white overflow-y-auto">
          <Dialog.Title
            className="bg-gray-100 p-1 border-b-2 border-gray-200  flex items-center gap-2 font-semibold text-base focus:outline-none"
            tabIndex={0}
          >
            <div
              className=" text-2xl rounded-lg p-2 hover:bg-gray-300"
              onClick={closeModal}
            >
              <FaChevronLeft />
            </div>
            {selectedCategory}
          </Dialog.Title>

          <ul className=" flex flex-col gap-1 pt-1 px-4">
            {subcategorys.map(({ name, id }) => (
              <li key={id} className=" list-none cursor-pointer">
                <SubcategoryLink id={id} name={name} />
              </li>
            ))}
          </ul>
        </Dialog.Panel>
      </Transition.Child>
    </Transition>
  );
};

export default SubcategoryModal;
