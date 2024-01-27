import { CgSearch } from "react-icons/cg";
export default function SearchBar({Query, setQuery}) {
  const openSearch = () => {
    console.log(Query);
    setQuery("")
  };

  return (
    <div className="flex items-center justify-between bg-red-500">
      <CgSearch className="w-[2rem] h-[2rem] m-2" />
      <input
        className="w-full bg-transparent border-none outline-none px-4 py-2 placeholder:text-gray-300"
        type="search"
        value={Query}
        placeholder="Search for Movies and tv-shows"
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={openSearch}
        className="inline-block py-2 px-6 rounded-lg bg-red-500 hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200 m-2"
      >
        Search
      </button>
    </div>
  );
}
