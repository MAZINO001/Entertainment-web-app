/* eslint-disable react/prop-types */
import { CgSearch } from "react-icons/cg";
export default function SearchBar({ setQuery, Query, onSearchClick }) {
  return (
    <div className="flex items-center justify-between bg-red-500">
      <CgSearch className="w-[2rem] h-[2rem] m-2" />
      <input
        className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-gray-300"
        type="search"
        value={Query}
        placeholder="Search for Movies and tv-shows"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={onSearchClick}
        className="inline-block py-2 px-6 rounded-lg bg-red-500 hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 m-2"
      >
        Search
      </button>
    </div>
  );
}
