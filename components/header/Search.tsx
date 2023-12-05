"use client";

import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  return (
    <form className="border-2 border-gray-100 rounded-lg flex-1 flex items-center gap-2 h-10">
      <input
        type="text"
        name="searchTerm"
        className="bg-transparent outline-none h-full px-5 flex-1"
        placeholder="Enter your search"
      />
      <button className="bg-gray-700 text-white h-full px-5 rounded-lg hover:bg-black transition-colors">
        <FaMagnifyingGlass className="text-xl" />
      </button>
    </form>
  );
};

export default Search;