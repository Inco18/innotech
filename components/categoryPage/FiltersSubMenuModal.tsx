import { navigationBarCategories } from "@/constants";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { RxCross2 } from "react-icons/rx";

import { addRemoveSearchParams, removeSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import useWindowDimensions from "@/hooks/useWindowSize";
import SubOption from "./SubOption";
import PriceInputs from "./PriceInputs";

const FiltersSubMenuModal = ({
  searchParams,
  categoryFilters,
  newCategoryFilters,
  selected,
  isOpen,
  setIsOpen,
  children,
}: FiltersSubMenuModalProps) => {
  const router = useRouter();

  const selectedFilters: { value: string; amount: number }[] =
    newCategoryFilters[selected]?.values || [];

  const selectedOptionFiltersAmount = searchParams[selected]
    ? Array.isArray(searchParams[selected])
      ? searchParams[selected].length
      : 1
    : 0;

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleAddAll = () => {
    const prepearedValue = selectedFilters.map(({ value }) =>
      value.replaceAll(" ", "_")
    );

    const newPathName = addRemoveSearchParams(
      selected,
      prepearedValue,
      Object.keys(categoryFilters),
      false
    );
    router.push(newPathName);
  };

  const handleRemoveAll = () => {
    const newPathName = removeSearchParams([selected]);
    router.push(newPathName);
  };

  return (
    <>
      {children && React.cloneElement(children, { onClick: openModal })}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[999]"
          onClose={() => {
            closeModal();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-[100%]"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[100%]"
              >
                <Dialog.Panel className=" w-[90vw]  max-w-[100rem] transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    className="bg-gray-100  border-b-2 border-gray-200 flex items-center justify-between gap-2 font-semibold text-xl  px-5 py-3"
                    tabIndex={0}
                  >
                    <span className=" capitalize font-semibold text-lg">
                      {selected.replaceAll("_", " ")}
                    </span>
                    <div
                      className=" text-2xl rounded-lg p-2 hover:bg-gray-300"
                      onClick={closeModal}
                    >
                      <RxCross2 />
                    </div>
                  </Dialog.Title>

                  <div className="overflow-y-auto w-full">
                    <div className="flex max-h-[60vh] ">
                      <div className="overflow-y-auto flex-col flex-1 flex">
                        <div className="  flex justify-between px-6 py-3 items-center">
                          {selectedOptionFiltersAmount ? (
                            <span
                              className="text-[12px] text-gray-500 cursor-pointer inline-block"
                              onClick={handleRemoveAll}
                            >
                              Clear ({selectedOptionFiltersAmount})
                            </span>
                          ) : (
                            selected === "price" || (
                              <span
                                className="text-[12px] text-gray-500 cursor-pointer inline-block"
                                onClick={handleAddAll}
                              >
                                Select all
                              </span>
                            )
                          )}
                        </div>

                        <ul className="px-6 grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
                          {selectedFilters
                            .sort((a, b) => a.value.localeCompare(b.value))
                            .map(({ value, amount }) => (
                              <SubOption
                                value={value}
                                amount={amount}
                                filterName={selected}
                                searchParams={searchParams}
                                categoryFilters={Object.keys(categoryFilters)}
                                key={value}
                              />
                            ))}
                        </ul>
                        {selected === "price" && (
                          <div className="mx-auto">
                            <PriceInputs searchParams={searchParams} />
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className="bg-gray-100  border-t-2 border-gray-200 flex items-center justify-end gap-2 font-semibold text-xl py-2 px-4 "
                      tabIndex={0}
                    >
                      <span
                        className="text-gray-300 text-sm cursor-pointer mr-5"
                        onClick={handleRemoveAll}
                      >
                        Clear all
                      </span>
                      <button
                        className=" bg-[#0082fa] w-[20rem]  rounded-lg py-[10px] text-white  text-base font-normal"
                        onClick={closeModal}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FiltersSubMenuModal;
