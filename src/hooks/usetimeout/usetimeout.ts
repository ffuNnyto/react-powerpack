import { useEffect } from "react";
import { UseTimeoutFn } from "./types";
import { useLastCallback } from "../usecallback/usecallback";

/**
 * Custom hook for handling timeouts.
 * @param callback The function to be called when the timeout expires.
 * @param delay The delay in milliseconds before the callback is called.
 * @beta Use the `dependencies` on test mode.
 */

export function useTimeout(callback: UseTimeoutFn, delay?: number, dependencies: readonly any[] = []): void {
    const savedCallback = useLastCallback(callback);

    useEffect(() => {
        if (typeof delay !== 'number') {
            return undefined;
        }

        const id = setTimeout(savedCallback, delay);
        return () => clearTimeout(id);

    }, [delay, savedCallback, ...dependencies]);
}

