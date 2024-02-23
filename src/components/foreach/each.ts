import { ReactNode, Children } from "react";
import { EachProps } from "./types";

/**
 * Component Each
 * @param render Function that renders each element of the array.
 * @param of The array to iterate over.
 * @returns ReactNode
 */

export function Each<T>({ render, of }: EachProps<T>): ReactNode {
  return Children.toArray(
    of.map((item, index) => render(item, index))
  );
}