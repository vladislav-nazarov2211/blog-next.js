import React from "react";
import { PtagProps } from "./Ptag.props";
import classNames from "classnames";
import styles from "./Ptag.module.css";

export const Ptag = ({
  size = "m",
  children,
  className,
  ...props
}: PtagProps) => {
  return (
    <p className={classNames(styles.p, className, styles[size])} {...props}>
      {children}
    </p>
  );
};
