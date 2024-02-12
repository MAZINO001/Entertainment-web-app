import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";
export default function Container() {
  return (
    <div className=" sm:mx-4 sm:my-4 md:w-full  overflow-hidden">
      <SearchBar />
      <Outlet />
    </div>
  );
}
