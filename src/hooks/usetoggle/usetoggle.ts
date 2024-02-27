import { useState, useCallback } from 'react';

/**
 * Hook for toggling boolean state.
 * @param initialState Initial state value.
 * @returns A tuple containing the current state value and a function to toggle the state.
 */
export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle];
};

