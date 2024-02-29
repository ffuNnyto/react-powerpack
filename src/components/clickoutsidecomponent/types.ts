import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
    onClickOutside: () => void;
    className?:string
}
