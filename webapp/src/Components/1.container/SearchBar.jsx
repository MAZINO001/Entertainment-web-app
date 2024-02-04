/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import SearchContext from "../../context/SearchContext";

export default function SearchBar() {
  // const { query, setQuery } = useContext(SearchContext) ;
  const { query, setQuery } = useContext(SearchContext) || {
    query: "",
    // setQuery: () => {},
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const [Active, setActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
  };
  console.log(query);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between  py-4"
    >
      <CgSearch className="w-[2rem] h-[2rem] m-2" />
      <input
        className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-xl text-xl text-gray-300 border-b focus:border-b-2 focus:border-red-500"
        type="search"
        value={query}
        placeholder="Search for Movies and tv-shows"
        onChange={handleChange}
      />

      {Active ? (
        <NavLink to="searchcontainer">
          <button
            type="submit"
            className="inline-block py-2 px-4 mr-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-semibold"
          >
            Search
          </button>
        </NavLink>
      ) : (
        <button
          type="submit"
          className="inline-block py-2 px-4 mr-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-semibold"
        >
          Search
        </button>
      )}

      {/* <button
        type="submit"
        className="inline-block py-2 px-4 mr-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15  text-[#fff]  font-semibold "
      >
        Search
      </button> */}
    </form>
  );
}
