import React, { useState, useEffect, useRef } from 'react';
import { TextFitProps } from './types';


/**
 * TextFit component props.
 * @typedef {Object} TextFitProps
 * @property {React.ReactNode} children - The content to be displayed and fitted inside the container.
 * @property {number} [minFontSize=16] - The minimum font size in pixels. Default is 16.
 * @property {number} [fitW=1.5] - The scaling factor for fitting text width. Default is 1.5.
 * @property {number} [fitH=0.8] - The scaling factor for fitting text height. Default is 0.8.
 */

/**
 * Component for fitting text content within a container.
 * @param {TextFitProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */

export const TextFit = ({ children, minFontSize = 16, fitW = 1.5, fitH = 0.8 }: TextFitProps): JSX.Element => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState<number>(minFontSize);

    useEffect(() => {
        const resizeText = () => {
            const container = containerRef.current;
            if (container) {
                const parentWidth = container.parentElement?.offsetWidth || 0;
                const parentHeight = container.parentElement?.offsetHeight || 0;
                const fontSizeToFitWidth = (parentWidth / (children?.toString().length || 1)) * fitW;
                const fontSizeToFitHeight = parentHeight * fitH;
                const newFontSize = Math.max(minFontSize, Math.min(fontSizeToFitWidth, fontSizeToFitHeight));
                setFontSize(newFontSize);
            }
        };

        window.addEventListener('resize', resizeText);
        resizeText();

        return () => window.removeEventListener('resize', resizeText);
    }, [children, minFontSize]);

    return (
        <div ref={containerRef} className='textfit-container' style={{ fontSize, wordWrap: 'break-word', overflow: 'hidden' }}>
            {children}
        </div>
    );
};
