/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

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
  handleSearchContainerClose,
  handleSearchClick,
  isSearchContainerOpen,
}) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));
  }, [query]);
  return (
    <div className=" sm:mx-4 sm:my-4 mt-2 md:w-[100%]">
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
          Data={data}
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
