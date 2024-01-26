import { CgSearch } from "react-icons/cg";
export default function SearchBar() {
  return (
    <div className="flex items-center justify-between ">
      <CgSearch />
      <input type="search" name="search" />
      <button>Search</button>
    </div>
  );
}
