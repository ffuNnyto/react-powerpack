import { useClickOutside } from "../../hooks";
import { Props } from "./types";


/**
 * ClickOutsideComponent
 * @param children The children components.
 * @param onClickOutside Function to handle click outside event.
 * @returns ReactNode
 */

export const ClickOutsideComponent: React.FC<Props> = ({ children, onClickOutside, className }) => {
    const wrapperRef = useClickOutside(onClickOutside);
    return <div className={className ? className : 'each-children'} ref={wrapperRef}>{children}</div>;
};