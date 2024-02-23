import { useCallback } from "react";
import { useStateRef } from "../useref/useref";
import { AnyFunction } from "./types";




export default function useLastCallback<T extends AnyFunction>(callback?: T): T {
    const ref = useStateRef(callback);
    return useCallback((...args: Parameters<T>) => ref.current?.(...args), []) as T;
}