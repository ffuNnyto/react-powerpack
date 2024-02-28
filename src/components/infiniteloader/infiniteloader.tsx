import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { InfiniteLoaderProps } from './types';


/**
 * Props for the InfiniteLoader component.
 * @typedef {Object} InfiniteLoaderProps
 * @property {() => void} onLoadMore - Function to call when more content needs to be loaded.
 * @property {boolean} isLoading - Indicates whether content is currently being loaded.
 * @property {number} [threshold=100] - The threshold (in pixels) at which to trigger loading more content. Default is 100.
 * @property {() => ReactNode} renderContent - Function to render the current content.
 * @property {React.ReactNode} [loadingComponent] - Optional component to render while loading is in progress.
 */

/**
 * Component that loads more content when the user scrolls near the bottom.
 * @param {InfiniteLoaderProps} props - Props for the InfiniteLoader component.
 * @returns {JSX.Element} - Rendered component.
 */

export const InfiniteLoader: React.FC<InfiniteLoaderProps> = ({ onLoadMore, isLoading, renderContent, loadingComponent, threshold = 100 }) => {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isLoading) {
                setIntersecting(true);
                onLoadMore();
            } else {
                setIntersecting(false);
            }
        }, {
            root: null,
            rootMargin: `0px 0px ${threshold}px 0px`,
            threshold: 0.1,
        });

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, [onLoadMore, isLoading, threshold]);

    return (
        <>
            <div className='infinite-children'>
                {renderContent()}
            </div>
            <div ref={sentinelRef}></div>
            {isLoading && loadingComponent}
            {isIntersecting && !isLoading && <div>Loading...</div>}
        </>
    );
};