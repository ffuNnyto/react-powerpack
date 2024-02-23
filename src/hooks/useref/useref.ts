import { useRef } from "react";

/**
 * Function to create a mutable reference to a value.
 * @param value The initial value for the reference.
 * @returns An object with a `current` property pointing to the value.
 */

export function useStateRef<T>(value: T): { current: T } {
  const ref = useRef<T>(value);
  ref.current = value;
  return ref;
}