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

// import React, { createContext, useContext, useEffect } from "react";

// const BookmarksContext = createContext();

// export const useBookmarks = () => useContext(BookmarksContext);

// export const BookmarksProvider = ({ children }) => {
//   const [bookmarkedMovies, setBookmarkedMovies] = useState(() => {
//     const storedBookmarks = localStorage.getItem("bookmarkedMovies");
//     return storedBookmarks ? JSON.parse(storedBookmarks) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
//   }, [bookmarkedMovies]);

//   const addBookmark = (movieId) => {
//     setBookmarkedMovies((prevBookmarks) => [...prevBookmarks, movieId]);
//   };

//   const removeBookmark = (movieId) => {
//     setBookmarkedMovies((prevBookmarks) =>
//       prevBookmarks.filter((id) => id !== movieId)
//     );
//   };

//   return (
//     <BookmarksContext.Provider
//       value={{ bookmarkedMovies, addBookmark, removeBookmark }}
//     >
//       {children}
//     </BookmarksContext.Provider>
//   );
// };

import React, { createContext, useContext, useEffect } from "react";

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
