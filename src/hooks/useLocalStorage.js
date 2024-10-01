import { useState } from "react";

// This is a custom hook to store a value in a state variable and
// in the local storage.
function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initialValue));

    // Function to set the value to local storage.
    const setValue = (value) => {
        // Check whether the value is a function or not.
       const valueToStore =  value instanceof Function ? value(localStorageValue) : value;

       // Set value to state.
       setLocalStorageValue(value);

       // Set value to local storage.
       localStorage.setItem(key, JSON.stringify(valueToStore));
    }

    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
    const itemFromLocalStorage = localStorage.getItem(key);

    return itemFromLocalStorage ? JSON.parse(itemFromLocalStorage) : initialValue;
}

export default useLocalStorage;