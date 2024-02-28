import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { LocalStorageValue } from './types';

// Function to get the initial value from local storage
// @param key: The key under which the value is stored in local storage
function getInitialValue<T>(key: string, initialValue: T): LocalStorageValue<T> {
  try {
    const item = window.localStorage.getItem(key);
    if (item === null) return initialValue;
   
    return item as any;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
}

// Definition of the useLocalStorage function
// @param key: The key under which the value is stored in local storage
// @param initialValue: The initial value to be set if there is no previously stored value
export function useLocalStorage<T extends string | number>(
  key: string,
  initialValue: T
): [LocalStorageValue<T>, Dispatch<SetStateAction<LocalStorageValue<T>>>] {
  
  const [storedValue, setStoredValue] = useState<LocalStorageValue<T>>(() =>
    getInitialValue<T>(key, initialValue)
  );

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(event.newValue !== null ? (event.newValue as T) : null);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  const updateStoredValue: Dispatch<SetStateAction<LocalStorageValue<T>>> = (value) => {
    try {
      setStoredValue(value);
      if (value === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, value.toString());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, updateStoredValue];
}