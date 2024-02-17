/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  const addBookmark = (movieId) =>
    setBookmarkedMovies((prev) => [...prev, movieId]);
  const removeBookmark = (movieId) =>
    setBookmarkedMovies((prev) => prev.filter((id) => id !== movieId));

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedMovies, addBookmark, removeBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
