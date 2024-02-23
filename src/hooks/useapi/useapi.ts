import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { RequestMethod, UseApiOptions, UseApiResult } from './types';


export function useApi<T>(
    url: string,
    method: RequestMethod,
    options: UseApiOptions<T> = {}
): UseApiResult<T> {
    const { initialData, useCredentials, authorization, ...axiosConfig } = options;

    const [data, setData] = useState<T | undefined>(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = async (): Promise<void> => {
        setLoading(true);
        setError(null);

        try {
            const config: AxiosRequestConfig = {
                url,
                method,
                ...axiosConfig,
            };

            if (authorization) {
                config.headers = {
                    ...config.headers,
                    Authorization: `${authorization.scheme} ${authorization.token}`,
                };
            }

            const response: AxiosResponse<T> = await axios(config);

            setData(response.data);
        } catch (err) {
            setError('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        error,
        request,
    };
}

export default useApi;
