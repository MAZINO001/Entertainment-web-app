/* eslint-disable react/prop-types */
import { CgSearch } from "react-icons/cg";

export default function SearchBar({ setQuery, Query, onSearchClick }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchClick();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between  py-4"
    >
      <CgSearch className="w-[2rem] h-[2rem] m-2" />
      <input
        className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-xl text-xl text-gray-300 border-b focus:border-b-2 focus:border-red-500"
        type="search"
        value={Query}
        placeholder="Search for Movies and tv-shows"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        type="submit"
        className="inline-block py-2 px-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15  text-[#fff]  font-semibold "
      >
        Search
      </button>
    </form>
  );
}
