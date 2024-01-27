import Home from "./Home";
import SearchBar from "./SearchBar";
export default function Container() {
  return (
    <div className="bg-blue-500 w-[95%] mr-4 my-4 flex flex-col">
      <SearchBar />
      <Home/>
    </div>
  );
}
