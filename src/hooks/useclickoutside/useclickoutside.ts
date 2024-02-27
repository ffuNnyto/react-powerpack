import { useEffect, useRef} from 'react';

/**
 * Hook to detect clicks outside of a specified element.
 * @param handler Function to be called when a click outside the element occurs.
 * @returns Ref object that should be attached to the element to monitor.
 */

const useClickOutside = (handler: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);

  return ref;
};

export default useClickOutside;