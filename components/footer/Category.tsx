"use client";
import React, { useState, useRef } from "react";
import CategoryLink from "./CategoryLink";
import Contact from "./Contact";
import { FaAngleUp } from "react-icons/fa";

const Category = ({
  section,
  width,
}: {
  section: FooterSectionProps;
  width: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const alreadySet = useRef(false);
  const widthBelowThreshold = width < 1000;

  if (!widthBelowThreshold) {
    alreadySet.current = false;
    if (isOpen === false) {
      setIsOpen(true);
    }
  }
  if (widthBelowThreshold && alreadySet.current === false) {
    alreadySet.current = true;
    setIsOpen(false);
  }

  const toggleOpen = () => {
    if (widthBelowThreshold) {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }
  };

  return (
    <>
      {widthBelowThreshold && <hr className="border-b  " />}
      <div
        key={section.title}
        className=" flex flex-col py-5 px-3 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex justify-between cursor-pointer  items-center">
          <p
            className={` font-bold  ${
              widthBelowThreshold && "text-[1.5rem] leading-6"
            } `}
          >
            {section.title}
          </p>
          {widthBelowThreshold && (
            <div
              className={`transition-transform duration-[400ms] ease-in-out transform ${
                isOpen ? "rotate-[180deg]" : "rotate-0"
              }`}
            >
              <FaAngleUp className="w-6 h-6 text-gray-500" />
            </div>
          )}
        </div>

        <ul
          className={`flex flex-col gap-3 list-none transition-all duration-[400ms] ease-in-out overflow-hidden ${
            isOpen ? "h-[25rem] mt-7" : "h-0"
          }`}
        >
          {!!section.phone && <Contact {...section} />}
          {section.links?.map((link) => (
            <CategoryLink key={link.title} {...link} />
          ))}
        </ul>
      </div>
      {widthBelowThreshold && (
        <hr className="border-b invisible last:visible  " />
      )}
    </>
  );
};

export default Category;
