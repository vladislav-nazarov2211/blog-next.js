import { ButtonProps } from "./Button.props";
import classNames from "classnames";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  appearance,
  className,
  arrow = "none",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className, styles[appearance])}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={classNames(styles.arrow, styles[arrow])}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
