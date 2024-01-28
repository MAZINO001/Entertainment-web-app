/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Close the SearchContainer if activeMiniSquares becomes true
    if (activeMiniSquares && isSearchContainerOpen) {
      setIsSearchContainerOpen(false);
      
    }
  }, [activeMiniSquares]);

  return (
    <div className="bg-blue-500 w-[95%] mr-4 my-4 flex flex-col">
      <SearchBar
        setQuery={setQuery}
        Query={query}
        onSearchClick={handleSearchClick}
      />
      {isSearchContainerOpen ? (
        <SearchContainer query={query} onClose={handleSearchContainerClose} />
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
