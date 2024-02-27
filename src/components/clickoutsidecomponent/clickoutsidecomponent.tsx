import useClickOutside from "../../hooks/useclickoutside/useclickoutside";
import { Props } from "./types";


/**
 * ClickOutsideComponent
 * @param children The children components.
 * @param onClickOutside Function to handle click outside event.
 * @returns ReactNode
 */

export const ClickOutsideComponent: React.FC<Props> = ({ children, onClickOutside }) => {
    const wrapperRef = useClickOutside(onClickOutside);
    return <div ref={wrapperRef}>{children}</div>;
};