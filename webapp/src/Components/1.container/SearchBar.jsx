/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import SearchContainer from "./SearchContainer";
import { NavLink } from "react-router-dom";

export default function SearchBar() {
  const [Query, setQuery] = useState("");
  // const [Active, setActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [PageNum, setPageNum] = useState(1);
  const [Data, setData] = useState(null);
  const [Results, setResults] = useState(null);
  const [Pages, setPages] = useState(null);

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
      `https:api.themoviedb.org/3/search/multi?query=${Query}&page=${PageNum}`,
      options
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        setPages(responseData.total_pages);
        setResults(responseData.total_results);
      })
      .catch((err) => console.error(err));
  }, [Query, PageNum]);

  console.log(Data);

  return (
    <div>
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

        {Query !== "" && (
          <NavLink to="searchcontainer">
            <button
              type="submit"
              className="inline-block py-2 px-4 mr-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15  text-[#fff]  font-semibold "
            >
              Search
            </button>
          </NavLink>
        )}
      </form>
      {Query !== "" && (
        <SearchContainer
          Data={Data}
          Query={Query}
          Results={Results}
          Pages={Pages}
          setPageNum={setPageNum}
          PageNum={PageNum}
        />
      )}
    </div>
  );
}
