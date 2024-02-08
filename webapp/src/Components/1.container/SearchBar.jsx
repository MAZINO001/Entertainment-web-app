/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const { query, setQuery } = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const [Active, setActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
    if (query.trim()) {
      navigate("/search", { search: `q=${query}` });
    }
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
    </form>
  );
}
