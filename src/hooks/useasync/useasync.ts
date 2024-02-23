import { useEffect, useState } from "react";
import { AsyncResult } from "./types";

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
