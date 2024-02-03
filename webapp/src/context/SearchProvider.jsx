/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [Query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ Query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
