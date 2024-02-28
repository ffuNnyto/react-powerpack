import { ReactNode } from 'react';

export interface InfiniteLoaderProps {
    onLoadMore: () => void;
    isLoading: boolean;
    threshold?: number;
    renderContent: () => ReactNode;
    loadingComponent?: React.ReactNode;
}