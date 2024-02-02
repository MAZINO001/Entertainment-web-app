// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/prop-types */
// import { useEffect } from "react";

// import { useState } from "react";
// import SearchBar from "./SearchBar";
// import SearchContainer from "./SearchContainer";
// import { Outlet } from "react-router-dom";
// export default function Container({
//   handleSearchContainerClose,
//   handleSearchClick,
//   isSearchContainerOpen,
// }) {
//   const [query, setQuery] = useState("");
//   const [PageNum, setPageNum] = useState(1);
//   const [data, setData] = useState(null);
//   const [AllData, setAllData] = useState(null);
//   useEffect(() => {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzg5MjE1MDdlZjBjNjdlNTNhNjc3OTM2NGU0NjBhZSIsInN1YiI6IjY1YjY1ZWY2MmZhZjRkMDE3Y2RkYjAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OcvYLoz0Ugh1SREfo1q2zt1xDPQ7U7O9e9tdPNbxaok",
//       },
//     };

//     fetch(
//       `https:api.themoviedb.org/3/search/multi?query=${query}&page=${PageNum}`,
//       options
//     )
//       .then((response) => response.json())
//       .then((responseData) => {
//         setData(responseData.results);
//         setAllData(responseData);
//       })
//       .catch((err) => console.error(err));
//   }, [query, PageNum]);

//   return (
//     <div className=" sm:mx-4 sm:my-4 mt-2 md:w-full  overflow-hidden">
//       <SearchBar
//         setQuery={setQuery}
//         Query={query}
//         onSearchClick={handleSearchClick}
//       />
//       {isSearchContainerOpen ? (
//         <SearchContainer
//           query={query}
//           setQuery={setQuery}
//           onClose={handleSearchContainerClose}
//           Data={data}
//           AllData={AllData}
//           setPageNum={setPageNum}
//           PageNum={PageNum}
//         />
//       ) : (
//         <>
//            <Outlet />
//         </>
//       )}
//     </div>
//   );
// }

// // import { Outlet } from "react-router-dom";
// // import SearchBar from "./SearchBar";
// // export default function Container() {
// //   return (
// //     <div>
// //        <SearchBar/>
// //       <Outlet />
// //     </div>
// //   );
// // }
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";
import { Outlet } from "react-router-dom";
export default function Container({
  handleSearchContainerClose,
  handleSearchClick,
  isSearchContainerOpen,
}) {
  const [query, setQuery] = useState("");
  const [PageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  const [AllData, setAllData] = useState(null);
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
      `https:api.themoviedb.org/3/search/multi?query=${query}&page=${PageNum}`,
      options
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.results);
        setAllData(responseData);
      })
      .catch((err) => console.error(err));
  }, [query, PageNum]);

  return (
    <div className=" sm:mx-4 sm:my-4 mt-2 md:w-full  overflow-hidden">
      <SearchBar
        setQuery={setQuery}
        Query={query}
      />
      <Outlet />
    </div>
  );
}