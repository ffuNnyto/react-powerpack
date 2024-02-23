import { AxiosRequestConfig } from "axios";

export type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'connect' | 'options' | 'trace' | 'patch';

export type AuthenticationScheme =
    | 'Basic'
    | 'Bearer'
    | 'Digest'
    | string;

export interface UseApiOptions<T> extends Omit<AxiosRequestConfig, 'url' | 'method'> {
    initialData?: T;
    useCredentials?: boolean;
    authorization?: {
        scheme: AuthenticationScheme;
        token: string;
    };
}

export interface UseApiResult<T> {
    data: T | undefined;
    loading: boolean;
    error: string | null;
    request: (requestData?: any) => Promise<void>;
}
