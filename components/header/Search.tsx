"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef<HTMLFormElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current?.contains(e.target as Node)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <form
        ref={node}
        className="border-2 relative border-gray-100 col-start-1 col-end-3 rounded-lg md:flex-1 flex items-center gap-2 h-10 focus-within:shadow-[0_2px_10px_0px_rgba(0,0,0,0.2)] transition-shadow order-5 md:order-2 "
      >
        <input
          type="text"
          name="searchTerm"
          className="bg-transparent outline-none h-full px-5 flex-1"
          placeholder="Enter your search"
          onChange={(e) =>
            setQuery((cur) => (cur.length < 100 ? e.target.value : cur))
          }
          value={query}
          onFocus={() => setIsOpen(true)}
        />
        <button className="bg-gray-700 text-white h-full px-5 rounded-lg hover:bg-black transition-colors">
          <FaMagnifyingGlass className="text-xl" />
        </button>
        <SearchBar query={query} isOpen={isOpen} setIsOpen={setIsOpen} />
      </form>
    </>
  );
};

export default Search;
