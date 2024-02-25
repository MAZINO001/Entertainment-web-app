// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useContext, useState } from "react";
// import { CgSearch } from "react-icons/cg";
// import { NavLink } from "react-router-dom";
// import { useSearch } from "../Context/SearchContext";
// export default function SearchBar() {
//   const { updateQuery } = useSearch();
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     const newValue = event.target.value;
//     setInputValue(newValue);
//     updateQuery(newValue);
//   };
//   const [Active, setActive] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setActive(true);
//     updateQuery(inputValue);
//   };
//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex items-center justify-between  my-4 md:mt-0 mx-4 sm:mx-0 md:mx-0 "
//     >
//       <CgSearch className="w-[2rem] h-[2rem] m-2 ml-0" />
//       <input
//         className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-xl text-gray-300 border-b focus:border-b-2 focus:border-red-500"
//         type="search"
//         value={inputValue}
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

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [query, setquery] = useState("");
  const [page, setpage] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setquery(event.target.value);
    setpage(1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(`searchcontainer/${query}?page=${page}`);
    navigate(`searchcontainer/${query}/${page}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between  my-4 md:mt-0 mx-4 sm:mx-0 md:mx-0 "
    >
      <CgSearch className="w-[2rem] h-[2rem] m-2 ml-0" />
      <input
        className="w-[100%] bg-transparent border-none outline-none px-4 py-2 placeholder:text-2xl text-xl text-gray-300 border-b focus:border-b-2 focus:border-red-500"
        type="search"
        value={query}
        placeholder="Search for Movies and tv-shows"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="inline-block py-2 px-4 rounded-md bg-[#5A6A90] hover:placeholder-opacity-15 text-[#fff] font-semibold"
      >
        Search
      </button>
    </form>
  );
}
