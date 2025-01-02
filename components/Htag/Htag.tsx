import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps) => {
  const TagName = tag;
  return <TagName className={styles[tag]}>{children}</TagName>;
};