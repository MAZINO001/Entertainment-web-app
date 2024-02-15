import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Retrieve initial value from local storage if available
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create state to store the value
  const [value, setValue] = useState(initial);

  // Define a function to update the value and store it in local storage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, updateValue];
}

export default useLocalStorage;
