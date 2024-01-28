/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Home from "./Home";
import Movies from "../2.SideBar/Movies";
import TvShows from "../2.SideBar/TvShows";
import Library from "../2.SideBar/Library";
import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";

export default function Container({
  activeMiniSquares,
  activeLocalMovies,
  activeTelevision,
  activeBookmark,
}) {
  const [query, setQuery] = useState("");
  const [isSearchContainerOpen, setIsSearchContainerOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchContainerOpen(true);
  };

  const handleSearchContainerClose = () => {
    setIsSearchContainerOpen(false);
  };

  return (
    <div className="bg-blue-500 lg:w-full  ml-0 md:ml-4 lg:mr-4 md:mr-4 lg:ml-0 my-4 flex flex-col ">
      <SearchBar
        setQuery={setQuery}
        Query={query}
        onSearchClick={handleSearchClick}
      />
      {isSearchContainerOpen ? (
        <SearchContainer
          query={query}
          setQuery={setQuery}
          onClose={handleSearchContainerClose}
        />
      ) : (
        <>
          {activeMiniSquares && <Home />}
          {activeLocalMovies && <Movies />}
          {activeTelevision && <TvShows />}
          {activeBookmark && <Library />}
        </>
      )}
    </div>
  );
}
