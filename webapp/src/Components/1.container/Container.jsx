/* eslint-disable react/prop-types */
import Home from "./Home";
import Movies from "../2.SideBar/Movies";
import TvShows from "../2.SideBar/TvShows";
import Library from "../2.SideBar/Library";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Container({
  activeMiniSquares,
  activeLocalMovies,
  activeTelevision,
  activeBookmark,
}) {
  const [Query, setQuery] = useState("");

  return (
    <div className="bg-blue-500 w-[95%] mr-4 my-4 flex flex-col">
      <SearchBar setQuery={setQuery} Query={Query} />
      {activeMiniSquares && <Home />}
      {activeLocalMovies && <Movies />}
      {activeTelevision && <TvShows />}
      {activeBookmark && <Library />}
    </div>
  );
}
