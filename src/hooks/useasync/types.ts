export type AsyncResult<T> = {
    isLoading: boolean;
    error?: Error;
    result?: T;
};