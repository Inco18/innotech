"use client";
import { navigationBarCategories } from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import SubcategoryModal from "./SubcategoryModal";

const Modal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectedCategory = (title: string) => {
    if (!navigationBarCategories.some((ctg) => ctg.category === title.trim()))
      return;
    setSelectedCategory(title);
  };

  const resetModal = () => {
    closeModal();
    setSelectedCategory("");
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog onClose={resetModal}>
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
            className="fixed z-[100] inset-0 bg-black/60"
            aria-hidden="true"
          />
        </Transition.Child>
        <div
          className="fixed inset-0 flex w-screen z-[999]"
          onClick={resetModal}
        >
          <div className="absolute left-0 h-screen overflow-hidden">
            <Transition.Child
              enter="transition duration-200"
              enterFrom="transform translate-x-[-15rem]"
              enterTo="transform translate-x-0"
              leave="transition duration-100"
              leaveFrom="transform translate-x-0"
              leaveTo="transform translate-x-[-15rem]"
              as={Fragment}
            >
              <Dialog.Panel className="h-screen  bg-white overflow-y-auto">
                <Dialog.Title
                  className="bg-gray-100 p-1 border-b-2 border-gray-200 flex items-center gap-2 font-semibold text-xl "
                  tabIndex={0}
                >
                  <div
                    className=" text-2xl rounded-lg p-2 hover:bg-gray-300"
                    onClick={closeModal}
                  >
                    <RxCross2 />
                  </div>
                  Menu
                </Dialog.Title>

                <div className="flex flex-col gap-2 pt-1 px-4">
                  <p className=" text-gray-500 py-2 text-[14px] font-semibold">
                    Categorys
                  </p>
                  <ul className=" flex flex-col gap-3">
                    {navigationBarCategories.map(({ category, icon: Icon }) => (
                      <li
                        key={category}
                        className=" list-none cursor-pointer last:text-pink-500"
                        onClick={() => handleSelectedCategory(category)}
                      >
                        <div className=" flex justify-between items-center ">
                          <div className=" flex items-center gap-3 mr-7">
                            <span className=" text-[1.6rem]">
                              <Icon />
                            </span>
                            <span className=" text-[.9rem]">{category}</span>
                          </div>
                          <div className=" text-gray-400 ">
                            <FaAngleRight />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <SubcategoryModal
              selectedCategory={selectedCategory}
              isOpen={!!selectedCategory}
              closeModal={() => setSelectedCategory("")}
            />
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
