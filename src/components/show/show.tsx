import React from "react";
import { ReactNode } from "react";
import { ElseProps, ShowProps, WhenProps } from "./types";

/**
 * Show Component
 * @param children The children components.
 * @returns ReactNode
 */

export const Show: React.FC<ShowProps> & {
  When: React.FC<WhenProps>;
  Else: React.FC<ElseProps>;
} = (props) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  React.Children.forEach(props.children, (child) => {
    const children = child as React.ReactElement<any>;
    if (children.props.condition === undefined) {
      otherwise = children;
    } else if (!when && children.props.condition === true) {
      when = children;
    }
  });

  return when || otherwise || null;
};

Show.When = ({ condition, children }) => (condition ? <>{children}</> : null);

Show.Else = ({ children }) => <>{children}</>;