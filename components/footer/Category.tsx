"use client";
import React, { useState, useRef } from "react";
import CategoryLink from "./CategoryLink";
import Contact from "./Contact";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

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
      <div key={section.title} className=" flex flex-col py-5 px-3 ">
        <div
          className="flex justify-between cursor-pointer  items-center"
          onClick={toggleOpen}
        >
          <p
            className={` font-bold  ${widthBelowThreshold &&
              "text-[1.5rem] leading-6"} `}
          >
            {section.title}
          </p>
          {widthBelowThreshold ? (
            isOpen ? (
              <FaAngleUp />
            ) : (
              <FaAngleDown />
            )
          ) : null}
        </div>
        <div className={` overflow-hidden   ${isOpen ? " mt-7 " : "h-0"}`}>
          <ul className="flex flex-col gap-3 list-none">
            {!!section.phone && <Contact key={section.title} {...section} />}

            {section.links?.map((link) => (
              <>
                <CategoryLink key={link.title} {...link} />
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
