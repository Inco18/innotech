import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { RxCross2 } from "react-icons/rx";
import SubOption from "../SubOption";
import { addRemoveSearchParams, removeSearchParams } from "@/utils/url";
import { useRouter } from "next/navigation";
import useWindowDimensions from "@/hooks/useWindowSize";
import FiltersSubMenuModal from "../FiltersSubMenuModal";
import PriceInputs from "../PriceInputs";

const FiltersMenuSmall = ({
  searchParams,
  categoryFilters,
  productsSpecificationsList,
  numOfProducts,
  children,
}: FiltersMenuSmall) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSmall, setIsOpenSmall] = useState(false);
  const router = useRouter();

  const { width = 0 } = useWindowDimensions();

  const newCategoryFilters: NewCategoryFiltersProps = {};

  productsSpecificationsList.forEach(
    ({
      specification,
    }: {
      specification: { [key: string]: { value: string } };
    }) => {
      Object.entries(specification).forEach(
        ([key, { value }]: [string, { value: string }]) => {
          if (categoryFilters[key]) {
            const filter = newCategoryFilters[key] || { values: [] };

            const existingOption = filter.values.find(
              (option) => option?.value === value
            );

            if (existingOption) {
              existingOption.amount += 1;
            } else {
              filter.values.push({ value, amount: 1 });
            }
            if (categoryFilters[key].min && categoryFilters[key].max) {
              filter.min = categoryFilters[key].min;
              filter.max = categoryFilters[key].max;
            }
            filter.type = categoryFilters[key].type;
            newCategoryFilters[key] = filter;
          }
        }
      );
    }
  );

  const filtersNames = Object.keys(newCategoryFilters);
  const [selected, setSelected] = useState(filtersNames[0]);

  const selectedFilters = newCategoryFilters?.[selected]?.values || [];

  const filtersAmountAll = Object.entries(searchParams).reduce(
    (acc, [key, values]) => {
      if (Object.keys(categoryFilters).includes(key)) {
        return (acc += Array.isArray(values) ? values.length : 1);
      }
      return acc;
    },
    0
  );

  const selectedOptionFiltersAmount = searchParams[selected]
    ? Array.isArray(searchParams[selected])
      ? searchParams[selected]?.length
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

  const handleClearSearchParmas = () => {
    const newPathName = removeSearchParams([
      ...Object.keys(newCategoryFilters),
      "to",
      "from",
    ]);
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
                    Filters ({filtersAmountAll || 0})
                    <div
                      className=" text-2xl rounded-lg p-2 hover:bg-gray-300"
                      onClick={closeModal}
                    >
                      <RxCross2 />
                    </div>
                  </Dialog.Title>

                  <div className="overflow-y-auto w-full">
                    <div className="flex max-h-[60vh] ">
                      <div className=" overflow-y-auto w-full sm:max-w-[20rem]">
                        <ul>
                          {["price", ...Object.keys(newCategoryFilters)].map(
                            (e, index) => {
                              const appliedFilters = searchParams[e]
                                ? Array.isArray(searchParams[e])
                                  ? searchParams[e]
                                  : [searchParams[e]]
                                : [];

                              return (
                                <li
                                  className={`px-5 pr-10 min-w-[20rem] py-2 text-[15px] cursor-pointer overflow-hidden relative capitalize ${
                                    e === selected
                                      ? " bg-gray-100 text-blue-500 "
                                      : ""
                                  }`}
                                  key={e}
                                  onClick={() => {
                                    setSelected(e);
                                    if (width <= 412) {
                                      setIsOpenSmall(true);
                                    }
                                  }}
                                >
                                  {e === selected && (
                                    <div className=" absolute bg-blue-500 rounded-[3px] -left-[11px] h-[60%] w-4 top-1/2 -translate-y-[50%]" />
                                  )}
                                  <div className="flex flex-col">
                                    <p className="">{`${e.replaceAll(
                                      "_",
                                      " "
                                    )}`}</p>

                                    {appliedFilters.length > 0 && (
                                      <p className="text-xs text-gray-500 truncate w-full">
                                        {`${
                                          appliedFilters.length
                                        }: ${appliedFilters
                                          .map(
                                            (option: string, index: number) =>
                                              `${option.replaceAll("_", " ")}${
                                                index ===
                                                appliedFilters.length - 1
                                                  ? ""
                                                  : ", "
                                              }`
                                          )
                                          .join("")}`}
                                      </p>
                                    )}
                                  </div>
                                </li>
                              );
                            }
                          )}
                        </ul>

                        <FiltersSubMenuModal
                          searchParams={searchParams}
                          categoryFilters={categoryFilters}
                          newCategoryFilters={newCategoryFilters}
                          selected={selected}
                          isOpen={isOpenSmall}
                          setIsOpen={setIsOpenSmall}
                        />
                      </div>
                      <div className="overflow-y-auto flex-col flex-1 hidden sm:flex">
                        <div className="  flex justify-between px-6 py-3 items-center">
                          <span className=" capitalize font-semibold text-lg">
                            {selected.replaceAll("_", " ")}
                          </span>

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
                        onClick={handleClearSearchParmas}
                      >
                        Clear all
                      </span>
                      <button
                        className=" bg-[#0082fa] w-[20rem]  rounded-lg py-[10px] text-white  text-base font-normal"
                        onClick={closeModal}
                      >
                        Show results ({numOfProducts})
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

export default FiltersMenuSmall;
