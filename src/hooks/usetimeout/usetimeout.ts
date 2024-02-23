import { useEffect } from "react";
import useLastCallback from "../usecallback/usecallback";

type UseTimeoutFn = () => void;

function useTimeout(callback: UseTimeoutFn, delay?: number, dependencies: readonly any[] = []): void {
    const savedCallback = useLastCallback(callback);

    useEffect(() => {
        if (typeof delay !== 'number') {
            return undefined;
        }

        const id = setTimeout(savedCallback, delay);
        return () => clearTimeout(id);

    }, [delay, savedCallback, ...dependencies]);
}

export default useTimeout;