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

// *******************************************

// import { useState, useEffect } from "react";
// function useLocalStorageMovies(key, initialMovies = []) {
//   const [movies, setMovies] = useState(() => {
//     try {
//       const storedMovies = localStorage.getItem(key);
//       const parsedMovies = storedMovies ? JSON.parse(storedMovies) : [];
//       return parsedMovies;
//     } catch (error) {
//       console.error("Error retrieving movies from local storage:", error);
//       return initialMovies;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(movies));
//   }, [movies, key]);

//   const addMovie = (newMovie) => {
//     if (movies.some((movie) => movie.id === newMovie.id)) {
//       console.warn("Movie with ID", newMovie.id, "already exists");
//       return;
//     }

//     setMovies((prevMovies) => [...prevMovies, newMovie]);
//   };

//   const removeMovie = (movieId) => {
//     setMovies((prevMovies) =>
//       prevMovies.filter((movie) => movie.id !== movieId)
//     );
//   };

//   return [movies, addMovie, removeMovie];
// }

// export default useLocalStorageMovies;
