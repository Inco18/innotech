"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";

const NavbarModal = ({
  isOpen = false,

  top,
}: {
  isOpen: boolean;

  top: number;
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[70] " onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-[300ms]"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-[300ms]"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed inset-x-0 bottom-0  bg-black/25`}
            style={{ top: `${top}px` }}
          />
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default NavbarModal;
