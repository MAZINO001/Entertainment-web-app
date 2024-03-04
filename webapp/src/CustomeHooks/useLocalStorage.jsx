/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";
const BookmarksContext = createContext();
export const useBookmarks = () => useContext(BookmarksContext);
export const BookmarksProvider = ({ children }) => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedMovies");
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });
  const [bookmarkedTvShows, setBookmarkedTvShows] = useState(() => {
    const storedBookmarks = localStorage.getItem("bookmarkedTvShows");
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  });
  useEffect(() => {
    localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
  }, [bookmarkedMovies]);
  useEffect(() => {
    localStorage.setItem(
      "bookmarkedTvShows",
      JSON.stringify(bookmarkedTvShows)
    );
  }, [bookmarkedTvShows]);

  const addMovieBookmark = (movieId) => {
    setBookmarkedMovies((prevBookmarks) => [...prevBookmarks, movieId]);
  };

  const removeMovieBookmark = (movieId) => {
    setBookmarkedMovies((prevBookmarks) =>
      prevBookmarks.filter((id) => id !== movieId)
    );
  };

  const addTvShowBookmark = (tvShowId) => {
    setBookmarkedTvShows((prevBookmarks) => [...prevBookmarks, tvShowId]);
  };

  const removeTvShowBookmark = (tvShowId) => {
    setBookmarkedTvShows((prevBookmarks) =>
      prevBookmarks.filter((id) => id !== tvShowId)
    );
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedMovies,
        addMovieBookmark,
        removeMovieBookmark,
        bookmarkedTvShows,
        addTvShowBookmark,
        removeTvShowBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
