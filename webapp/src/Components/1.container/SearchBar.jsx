/* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import { CgSearch } from "react-icons/cg";
// import { NavLink } from "react-router-dom";
// export default function SearchBar() {
//   const { query, setQuery } = useState("");
//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };
//   const [Active, setActive] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setActive(true);
//   };
//   console.log(query);
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center justify-between  my-4 md:mt-0 mx-4 sm:mx-0 md:mx-0 "
//     >
//       <CgSearch className="w-[2rem] h-[2rem] m-2 ml-0" />
//       <input
//         className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-xl text-gray-300 border-b focus:border-b-2 focus:border-red-500"
//         type="search"
//         value={query}
//         placeholder="Search for Movies and tv-shows"
//         onChange={handleChange}
//       />

//       {Active ? (
//         <NavLink to="searchcontainer">
//           <button
//             type="submit"
//             className="inline-block py-2 px-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-semibold"
//           >
//             Search
//           </button>
//         </NavLink>
//       ) : (
//         <button
//           type="submit"
//           className="inline-block py-2 px-4  rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-semibold"
//         >
//           Search
//         </button>
//       )}
//     </form>
//   );
// }

import { useEffect, useState } from "react";
import { CgSearch } from "react-icons/cg";
import SearchContainer from "./SearchContainer"; // Ensure correct import path

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false); // Use lowercase 'active' for consistency
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  const [results, setResults] = useState(null);
  const [pages, setPages] = useState(null);

  const handleChange = (event) => {
    setQuery(event.target.value);
    // Reset page number when query changes to start from the beginning
    setPageNum(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
  };

  useEffect(() => {
    if (query !== "") {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&page=${pageNum}`,
        options
      )
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData.results);
          setPages(responseData.total_pages);
          setResults(responseData.total_results);
        })
        .catch((err) => console.error(err));
    }
  }, [query, pageNum]); // Include pageNum in dependency array for pagination

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between my-4 md:mt-0 mx-4 sm:mx-0 md:mx-0"
    >
      <CgSearch className="w-[2rem] h-[2rem] m-2 ml-0" />
      <input
        className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-xl text-gray-300 border-b focus:border-b-2 focus:border-red-500"
        type="search"
        value={query}
        placeholder="Search for Movies and tv-shows"
        onChange={handleChange}
      />

      {active ? (
        // Conditionally render SearchContainer only when there are results
        results > 0 && (
          <SearchContainer
            Results={results}
            Pages={pages}
            PageNum={pageNum}
            setPageNum={setPageNum}
            query={query}
            Data={data}
          />
        )
      ) : (
        <button
          type="submit"
          className="inline-block py-2 px-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-semibold"
        >
          Search
        </button>
      )}
    </form>
  );
}
