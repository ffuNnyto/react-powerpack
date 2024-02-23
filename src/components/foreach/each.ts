import { ReactNode, Children } from "react";
import { EachProps } from "./types";


export function Each<T>({ render, of }: EachProps<T>): ReactNode {
  return Children.toArray(of.map((item, index) => render(item, index)));
}