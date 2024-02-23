import { useCallback } from "react";
import { useStateRef } from "../useref/useref";
import { AnyFunction } from "./types";

/**
 * Hook to return the last version of a callback function.
 * @param callback The callback function to be memoized.
 * @returns The memoized callback function.
 */

export default function useLastCallback<T extends AnyFunction>(callback?: T): T {
    const ref = useStateRef(callback);
    return useCallback((...args: Parameters<T>) => ref.current?.(...args), []) as T;
}