/* eslint-disable react/prop-types */
import { useState } from "react";
import { SearchContext } from "./SearchContext";

export default function SearchProvider({ children }) {
  const [Query, setQuery] = useState("game");
  console.log("SearchProvider Query:", Query);

  
  return (
    <SearchContext.Provider value={{ Query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
