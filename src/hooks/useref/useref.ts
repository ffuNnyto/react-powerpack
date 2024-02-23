import { useRef } from "react";

export function useStateRef<T>(value: T): { current: T } {
  const ref = useRef<T>(value);
  ref.current = value;
  return ref;
}