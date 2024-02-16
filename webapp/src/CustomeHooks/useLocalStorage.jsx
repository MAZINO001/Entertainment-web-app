// import { useState } from "react";
// function useLocalStorage(key, initialValue) {
//   const storedValue = localStorage.getItem(key);
//   const initial = storedValue ? JSON.parse(storedValue) : initialValue;

//   const [value, setValue] = useState(initial);

//   const updateValue = (newValue) => {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };

//   return [value, updateValue];
// }

// export default useLocalStorage;


import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);

  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  const updateValue = (newValue) => {
    const updatedValue = { ...value, ...newValue }; // Merge existing and new values
    setValue(updatedValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;
