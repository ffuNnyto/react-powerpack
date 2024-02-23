import { ReactNode } from "react";

export interface EachProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: T[];
}