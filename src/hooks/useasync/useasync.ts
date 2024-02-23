import { useEffect, useState } from "react";
import { AsyncResult } from "./types";


/**
 * Custom hook for handling asynchronous operations.
 * @param fn A function that returns a promise representing the asynchronous operation.
 * @param deps Dependencies array for the effect. The effect will re-run if any of these dependencies change.
 * @param defaultValue Default value for the result before the asynchronous operation completes.
 * @returns An object containing loading state, error state, and the result of the asynchronous operation.
 */

export const useAsync = <T>(
    fn: () => Promise<T>,
    deps: any[],
    defaultValue?: T
): AsyncResult<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>();
    const [result, setResult] = useState<T | undefined>(defaultValue);

    useEffect(() => {
        setIsLoading(true);
        let wasCancelled = false;

        fn().then(
            (res: T) => {
                if (wasCancelled) return;
                setIsLoading(false);
                setResult(res);
            },
            (err: Error) => {
                if (wasCancelled) return;
                setIsLoading(false);
                setError(err);
            }
        );

        return () => {
            wasCancelled = true;
        };
    }, deps);

    return { isLoading, error, result };
};
