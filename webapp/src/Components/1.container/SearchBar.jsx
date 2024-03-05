/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [query, setquery] = useState("");
  const [page, setpage] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setquery(event.target.value);
    setpage(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      return;
    } else {
      navigate(`search/${query}/${page}`);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between  my-4 md:mt-0 mx-4 sm:mx-0 md:mx-0 "
    >
      <CgSearch className="w-[2rem] h-[2rem] m-2 ml-0" />
      <input
        className="w-[100%] bg-transparent border-none outline-none px-4 py-2 text-gray-300 border-b focus:border-b-2 focus:border-red-500  placeholder:text-lg text-lg  sm:placeholder:text-2xl sm:text-2xl"
        type="search"
        value={query}
        placeholder="Search for Movies and tv-shows"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="inline-block py-1 px-2 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-normal sm:font-semibold text-md sm:text-xl sm:py-2 sm:px-4"
      >
        Search
      </button>
    </form>
  );
}
