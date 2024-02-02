/* eslint-disable react/prop-types */
import  { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const updateSearchTerm = (term) => {
    setQuery(term);
  };

  return (
    <MyContext.Provider value={{ query, updateSearchTerm }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
