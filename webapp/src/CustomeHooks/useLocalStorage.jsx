
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;

import React, { createContext, useContext, useEffect } from "react";

const BookmarksContext = createContext();

export const useBookmarks = () => useContext(BookmarksContext);

export const BookmarksProvider = ({ children }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedMovies");
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
  }, [bookmarkedMovies]);

  const addBookmark = (movieId) => {
    setBookmarkedMovies((prevBookmarks) => [...prevBookmarks, movieId]);
  };

  const removeBookmark = (movieId) => {
    setBookmarkedMovies((prevBookmarks) =>
      prevBookmarks.filter((id) => id !== movieId)
    );
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarkedMovies, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
