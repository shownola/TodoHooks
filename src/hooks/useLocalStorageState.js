import { useState, useEffect } from 'react';

function UseLocalStorageState(key, defaultValue){
  // make piece of stae, based off of value in localStorage or default
  const[state, setState] = useState(() => {
    let val;
    try {
      JSON.parse(window.localStorage.getItem(key) || String(defaultValue))
    }
    catch (e){
      val = defaultValue;
    }
    return val;
  });
  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}

export default UseLocalStorageState;
