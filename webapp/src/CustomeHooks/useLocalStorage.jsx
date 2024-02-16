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
  // Retrieve initial value from local storage using the shared key
  const initial = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;

  const [value, setValue] = useState(initial);

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;
