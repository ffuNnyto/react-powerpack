import { ReactNode } from "react";

export interface ShowProps {
    children: ReactNode;
}

export interface WhenProps {
    isTrue: boolean;
    children: ReactNode;
}

export interface ElseProps {
    children: ReactNode;
}