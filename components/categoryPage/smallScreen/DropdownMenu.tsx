import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IconType } from "react-icons";
import { BsThreeDotsVertical } from "react-icons/bs";

type DropdownMenuProps = {
  options: { icon: IconType; label: string; color?: string }[];
};

const DropdownMenu = ({ options }: DropdownMenuProps) => {
  return (
    <div className="relative ">
      <Menu as="div" className="relative inline-block text-left">
        <div
          onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        >
          <Menu.Button className="inline-flex w-full justify-center rounded-lg  px-3 py-3 text-lg font-medium text-gray-600 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <BsThreeDotsVertical />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 origin-top-right 
           divide-gray-100 rounded-md
           bg-white shadow-lg ring-1 ring-black/5 focus:outline-none overflow-hidden"
          >
            <div className="w-[max-content]  ">
              {options.map(({ label, icon: Icon, color }, index) => (
                <Menu.Item key={label}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? " bg-gray-100 " : ""
                      }text-gray-900  flex w-full gap-2 items-center  p-4 text-sm ${
                        color ? `text-${color}` : ""
                      }`}
                      onClick={(e: React.MouseEvent<HTMLElement>) =>
                        e.stopPropagation()
                      }
                    >
                      <Icon className={`text-lg `} />
                      <span> {label}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
