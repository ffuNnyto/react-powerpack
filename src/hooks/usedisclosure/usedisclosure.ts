import { useState, useCallback } from 'react';
import { DisclosureState } from './types';

/**
 * Hook to manage disclosure state (e.g., modal, panel).
 * @param initialState Initial state of disclosure (default: false).
 * @returns Object containing state and functions to control disclosure.
 */

export const useDisclosure = (initialState: boolean = false): DisclosureState => {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggle = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    return {
        isOpen,
        open,
        close,
        toggle,
    };
};