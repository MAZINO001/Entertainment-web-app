import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState(null);

  const updateMovieData = (newData) => {
    setMoviesData(newData);
  };

  return (
    <MovieContext.Provider value={{ moviesData, updateMovieData }}>
      {children}
    </MovieContext.Provider>
  );
};
