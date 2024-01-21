import { categoryFilterOptions, numberOfResultsPerPage } from "@/constants";
import { updateMultipleSearchParams } from "@/utils/url";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { useState, Fragment } from "react";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdRadioButtonChecked } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const SortMenuSmall = ({
  defaultSortBy,
  defaultPageSize,
}: {
  defaultSortBy: string;
  defaultPageSize: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const router = useRouter();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleClick = () => {
    const updatedUrl = updateMultipleSearchParams({
      page_size: pageSize,
      sort_by: sortBy,
    });
    router.push(updatedUrl);
    closeModal();
  };

  const sortLabel = categoryFilterOptions.find(
    (e) => e.query === defaultSortBy
  )?.label;

  return (
    <>
      <button
        className="  flex items-center justify-center  border-r border-gray-200 font-medium cursor-pointer w-full "
        onClick={openModal}
      >
        <div className=" flex flex-col">
          <span className=" font-semibold text-[15px]">Sorting</span>

          <span className=" font-light text-gray-400 text-[13px]">
            {sortLabel}
          </span>
        </div>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-[100%]"
                enterTo="opacity-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-[100%]"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    className="bg-gray-100  border-b-2 border-gray-200 flex items-center justify-between gap-2 font-semibold text-xl  px-5 py-3"
                    tabIndex={0}
                  >
                    Sorting
                    <div
                      className=" text-2xl rounded-lg p-2 hover:bg-gray-300"
                      onClick={closeModal}
                    >
                      <RxCross2 />
                    </div>
                  </Dialog.Title>
                  <p className="bg-gray-100 px-3 py-2 font-medium text-gray-700  border-b-2 border-gray-200 w-full">
                    Sort by
                  </p>
                  <div className=" ">
                    <ul>
                      {categoryFilterOptions.map(({ label, query }) => (
                        <li
                          className="flex gap-3 items-center py-4   border-b border-gray-200 last:border-b-0 px-3 text-gray-700 text-sm "
                          onClick={() => {
                            setSortBy(query);
                          }}
                          key={query}
                        >
                          {sortBy === query ? (
                            <MdRadioButtonChecked className="text-2xl text-black" />
                          ) : (
                            <IoIosRadioButtonOff className="text-2xl text-gray-300" />
                          )}
                          <span>{label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="bg-gray-100 px-3 py-2 font-medium text-gray-700  border-y-2 border-gray-200 w-full">
                    Number of results per page
                  </p>
                  <div className="">
                    <ul>
                      {numberOfResultsPerPage.map((option) => (
                        <li
                          className="flex gap-3 items-center py-4   border-b border-gray-200 last:border-b-0 px-3 text-gray-700 text-sm "
                          onClick={() => {
                            setPageSize(option);
                          }}
                          key={option}
                        >
                          {pageSize === option ? (
                            <MdRadioButtonChecked className="text-2xl text-black" />
                          ) : (
                            <IoIosRadioButtonOff className="text-2xl text-gray-300" />
                          )}
                          <span>{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className="bg-gray-100  border-t-2 border-gray-200 flex items-center justify-between gap-2 font-semibold text-xl py-2 px-4 "
                    tabIndex={0}
                  >
                    <button
                      className=" bg-[#0082fa] w-full rounded-lg py-[10px] text-white  text-base font-normal"
                      onClick={handleClick}
                    >
                      Save
                    </button>
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

export default SortMenuSmall;
