/* eslint-disable react/prop-types */
import { useState } from "react";
import { SearchContext } from "./SearchHook";

export default function SearchProvider({ children }) {
  const [Query, setQuery] = useState("game");

  return (
    <SearchContext.Provider value={{ Query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
